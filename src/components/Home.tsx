"use client";

import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import CountryCard from "./CountryCard";
import CountryDetails from "./CountryDetails";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRegion, setFilterRegion] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);

  const regionOptions = [
    { value: "", label: "Filter by Region" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];

  // Fetch countries data
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const formattedData = data.map((country: any) => ({
          country: country.name.common,
          population: country.population.toLocaleString(),
          region: country.region,
          capital: country.capital ? country.capital[0] : "N/A",
          countryFlag: country.flags.svg,
          details: {
            ...country,
            countryFlag: country.flags.svg, // Add flag for details view
          },
        }));
        setCountries(formattedData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  // Filter countries based on search and region
  const filteredCountries = countries.filter(
    (country: any) =>
      country.country.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterRegion ? country.region === filterRegion : true)
  );

  return (
    <div className="w-full lg:px-12 px-6 lg:mt-12 mt-10">
      {selectedCountry ? (
        <CountryDetails
          country={selectedCountry}
          onBack={() => setSelectedCountry(null)}
        />
      ) : (
        <>
          {/* Search and Filter */}
          <div className="flex justify-between">
            <div className="flex items-center gap-3 rounded-md bg-appDark border-appGreen/50 px-2.5 py-2 shadow-md w-full lg:max-w-[22rem] max-w-[15rem]">
              <span className="text-lg">
                <Icon icon="flowbite:search-outline" />
              </span>
              <input
                type="search"
                placeholder="Search for a country..."
                className="outline-none py-1.5 px-3 text-base w-full bg-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              value={filterRegion}
              onChange={(e) => setFilterRegion(e.target.value)}
              className="outline-none text-appGreen shadow-md px-2.5 rounded-md"
            >
              {regionOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Country Cards */}
          <div className="mt-12">
            <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 items-center">
              {filteredCountries.map((item: any, index) => (
                <CountryCard
                  key={index}
                  country={item.country}
                  capital={item.capital}
                  population={item.population}
                  region={item.region}
                  countryFlag={item.countryFlag}
                  onClick={() => setSelectedCountry(item.details)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
