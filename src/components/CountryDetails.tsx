import React from "react";
import { Icon } from "@iconify/react";

interface CountryDetailsProps {
  country: any;
  onBack: () => void;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, onBack }) => {
  return (
    <div className="w-full border  p-3 rounded-xl">
      <button
        onClick={onBack}
        className=" text-base rounded-md flex items-center gap-2"
      >
        <span className="text-xl">
          <Icon icon="flowbite:arrow-left-outline" />
        </span>
        Back to Home
      </button>

      <div className="mt-10 ">
        {/* Display country flag */}
        <img
          src={country.countryFlag}
          alt={`${country.country || "Unknown"} flag`}
          className="h-[200px] w-full object-cover rounded-lg"
        />
        <h1 className="text-xl font-bold my-4 text-appGreen">
          {country.name.common || "Unknown Country"}
        </h1>
        <p>
          <strong>Native Name:</strong>{" "}
          {Object.values(country.name.nativeName || {})
            .map((native: any) => native.common)
            .join(", ") || "N/A"}
        </p>
        <p>
          <strong>Population:</strong>{" "}
          {country.population?.toLocaleString() || "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {country.region || "N/A"}
        </p>
        <p>
          <strong>Subregion:</strong> {country.subregion || "N/A"}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-bold">Top Level Domain</h2>
        <p>{country.tld?.join(", ") || "N/A"}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Currencies</h2>
        <p>
          {country.currencies
            ? Object.values(country.currencies)
                .map((currency: any) => currency.name)
                .join(", ")
            : "N/A"}
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-bold">Languages</h2>
        <p>
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A"}
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
  );
};

export default CountryDetails;
