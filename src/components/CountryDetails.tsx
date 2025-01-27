import React from "react";
import { Icon } from "@iconify/react";

interface CountryDetailsProps {
  country: any;
  onBack: () => void;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, onBack }) => {
  return (
    <div className="my-5">
      <button
        onClick={onBack}
        className=" text-base rounded-md flex items-center gap-2 font-bold text-appGreen"
      >
        <span className="text-xl">
          <Icon icon="flowbite:arrow-left-outline" />
        </span>
        Back to Home
      </button>
      <div className="w-full border dark:border-appGreen/35  p-3 rounded-xl lg:max-w-[30rem] mx-auto shadow-md">
        <div className="mt-4">
          <img
            src={country.countryFlag}
            alt={`${country.country} flag`}
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h1 className="text-xl font-bold my-4 text-appGreen">
            {country.name.common || "Unknown Country"}
          </h1>
          <p>
            <strong>Native Name:</strong>{" "}
            {Object.values(country.name.nativeName || {})
              .map((native: any) => native.common)
              .join(", ") || ""}
          </p>
          <p>
            <strong>Population:</strong> {country.population?.toLocaleString()}
          </p>
          <p>
            <strong>Region:</strong> {country.region}
          </p>
          <p>
            <strong>Subregion:</strong> {country.subregion}
          </p>
          <p>
            <strong>Capital:</strong> {country.capital?.[0]}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Top Level Domain</h2>
          <p>{country.tld?.join(", ") || ""}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Currencies</h2>
          <p>
            {country.currencies
              ? Object.values(country.currencies)
                  .map((currency: any) => currency.name)
                  .join(", ")
              : ""}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Languages</h2>
          <p>
            {country.languages
              ? Object.values(country.languages).join(", ")
              : ""}
          </p>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Border Countries</h2>
          <div className="flex flex-wrap gap-2">
            {country.borders?.length
              ? country.borders.map((border: string) => (
                  <span
                    key={border}
                    className="bg-gray-200 text-sm px-3 py-1 rounded-md"
                  >
                    {border}
                  </span>
                ))
              : "None"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
