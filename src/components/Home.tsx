"use client";

import React, { useEffect, useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import CountryCard from "./CountryCard";
import { ICountry, IRegionOption, ICountryDetails } from "@/types/country";
import Loading from "@/app/loading";

const Home = () => {
  const router = useRouter();
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const regionOptions: IRegionOption[] = [
    { value: "", label: "Filter by Region" },
    { value: "africa", label: "Africa" },
    { value: "americas", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) throw new Error("Failed to fetch countries");
        const data: ICountryDetails[] = await response.json();

        const formattedData: ICountry[] = data.map((country) => {
          const capital = country.capital?.[0] ?? "";
          return {
            country: country.name.common,
            population: country.population.toLocaleString(),
            region: country.region.toLowerCase(),
            capital,
            countryFlag: country.flags.svg,
            details: {
              ...country,
              countryFlag: country.flags.svg,
            },
          };
        });

        setCountries(formattedData);
      } catch (error) {
        setError("Error fetching countries. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = useMemo(
    () =>
      countries.filter(
        (country) =>
          country.country.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (filterRegion ? country.region === filterRegion.toLowerCase() : true)
      ),
    [countries, searchTerm, filterRegion]
  );

  const handleCountryClick = (country: ICountry) => {
    router.push(
      `/country/${encodeURIComponent(country.country.toLowerCase())}`
    );
  };

  return (
    <div className="w-full lg:px-12 px-6 lg:mt-28 mt-24">
      <div className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="flex items-center gap-3 bg-white rounded-md dark:bg-[#242424] border-appGreen/50 px-2.5 py-2 shadow-md">
          <span className="text-lg">
            <Icon icon="flowbite:search-outline" />
          </span>
          <input
            type="search"
            placeholder="Search for a country..."
            className="outline-none py-1.5 px-3 text-sm sm:text-base w-full bg-transparent placeholder:text-appGreen/85"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          value={filterRegion}
          onChange={(e) => setFilterRegion(e.target.value)}
          className="outline-none text-appGreen bg-appWhite dark:bg-[#242424] text-sm sm:text-base shadow-md px-3 py-4 rounded-md"
        >
          {regionOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {loading && <Loading />}
      {error && <p className="text-center mt-5 text-red-500">{error}</p>}

      <div className="mt-12">
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 items-center">
          {filteredCountries.map((item) => (
            <CountryCard
              key={item.country}
              country={item.country}
              capital={item.capital}
              population={item.population}
              region={item.region}
              countryFlag={item.countryFlag}
              onClick={() => handleCountryClick(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
