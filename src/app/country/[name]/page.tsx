"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { IBasicDetail, ICountryDetails } from "@/types/country";
import Loading from "@/app/loading";

export default function CountryDetailsPage() {
  const router = useRouter();
  const [country, setCountry] = React.useState<ICountryDetails | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const countryName = window.location.pathname.split("/").pop();
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${countryName}`
        );
        const [data] = await response.json();
        setCountry({
          ...data,
          countryFlag: data.flags.svg,
        });
      } catch (error) {
        console.error("Error fetching country:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCountryData();
  }, []);

   if (isLoading || !country) {
     return (
       <div className="w-full lg:px-12 px-6 lg:mt-28 mt-24">
         <Loading />
       </div>
     );
   }

  const getNativeNames = (nativeName?: {
    [key: string]: { common: string };
  }) => {
    if (!nativeName || Object.keys(nativeName).length === 0) return undefined;
    return Object.values(nativeName)
      .map((native) => native.common)
      .join(", ");
  };

  const getBasicDetails = (country: ICountryDetails): IBasicDetail[] => {
    const details: IBasicDetail[] = [];

    const nativeNames = getNativeNames(country.name.nativeName);
    if (nativeNames) {
      details.push({
        label: "Native Name",
        value: nativeNames,
      });
    }

    if (country.population) {
      details.push({
        label: "Population",
        value: country.population.toLocaleString(),
      });
    }

    if (country.region) {
      details.push({
        label: "Region",
        value: country.region,
      });
    }

    if (country.subregion) {
      details.push({
        label: "Subregion",
        value: country.subregion,
      });
    }

    if (country.capital?.[0]) {
      details.push({
        label: "Capital",
        value: country.capital[0],
      });
    }

    return details;
  };

  const basicDetails = getBasicDetails(country);

  return (
    <div className="w-full lg:px-12 px-6 lg:mt-28 mt-24">
      <div className="my-5">
        <button
          onClick={() => router.push("/")}
          className="text-base rounded-md flex items-center gap-2 font-bold text-appGreen"
        >
          <span className="text-xl">
            <Icon icon="flowbite:arrow-left-outline" />
          </span>
          Back to Home
        </button>
        <div className="w-full border dark:border-appGreen/35 p-3 rounded-xl lg:max-w-[30rem] mx-auto shadow-md">
          <div className="mt-4">
            <img
              src={country.countryFlag}
              alt={`${country.name.common} flag`}
              className="h-[200px] w-full object-cover rounded-lg"
            />
            <h1 className="text-xl font-bold my-4 text-appGreen">
              {country.name.common}
            </h1>
            {basicDetails.map((detail, index) => (
              <p className="font-bold text-sm sm:text-base" key={index}>
                {detail.label}:{" "}
                <span className="font-light text-sm ml-1.5">
                  {detail.value}
                </span>
              </p>
            ))}
          </div>

          {country.tld && country.tld.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-bold">Top Level Domain</h2>
              <p>{country.tld.join(", ")}</p>
            </div>
          )}

          {country.currencies && Object.keys(country.currencies).length > 0 && (
            <div className="mt-4">
              <h2 className="text-base font-bold">Currencies</h2>
              <p>
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(", ")}
              </p>
            </div>
          )}

          {country.languages && Object.keys(country.languages).length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-bold">Languages</h2>
              <p>{Object.values(country.languages).join(", ")}</p>
            </div>
          )}

          <div className="mt-4">
            <h2 className="text-lg font-bold">Border Countries</h2>
            <div className="flex flex-wrap gap-2">
              {country.borders && country.borders.length > 0 ? (
                country.borders.map((border) => (
                  <span
                    key={border}
                    className="dark:bg-appDark dark:border-appGreen/20 bg-[#f6fffd] border shadow-md dark:text-appWhite text-appDark my-2 text-sm px-3 py-1 rounded-md"
                  >
                    {border}
                  </span>
                ))
              ) : (
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  No bordering countries
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
