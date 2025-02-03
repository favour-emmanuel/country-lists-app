"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import CountryCard from "./CountryCard";
import { ICountry, IRegionOption, ICountryDetails } from "@/types/country";

const Home = () => {
  const router = useRouter();
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");

  const regionOptions: IRegionOption[] = [
    { value: "", label: "Filter by Region" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data: ICountryDetails[] = await response.json();
        console.log("divine", data);

        const formattedData: ICountry[] = data.map((country) => {
          const capital = country.capital?.[0] ?? "";

          return {
            country: country.name.common,
            population: country.population.toLocaleString(),
            region: country.region,
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
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const filteredCountries = countries.filter(
    (country) =>
      country.country.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterRegion ? country.region === filterRegion : true)
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
