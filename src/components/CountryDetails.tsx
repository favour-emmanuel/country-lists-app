import React from "react";
import { Icon } from "@iconify/react";

interface NativeName {
  common: string;
}

interface Currency {
  name: string;
}

interface Country {
  name: {
    common: string;
    nativeName?: { [key: string]: NativeName };
  };
  countryFlag: string;
  population: number;
  region: string;
  subregion: string;
  capital?: string[];
  tld?: string[];
  currencies?: { [key: string]: Currency };
  languages?: { [key: string]: string };
  borders?: string[];
}

interface CountryDetailsProps {
  country: Country;
  onBack: () => void;
}

const CountryDetails: React.FC<CountryDetailsProps> = ({ country, onBack }) => {
  const basicDetails = [
    {
      label: "Native Name:",
      value:
        Object.values(country.name.nativeName || {})
          .map((native) => native.common)
          .join(", ") || "",
    },
    {
      label: "Population:",
      value: country.population?.toLocaleString() || "N/A",
    },
    {
      label: "Region:",
      value: country.region || "N/A",
    },
    {
      label: "Subregion:",
      value: country.subregion || "N/A",
    },
    {
      label: "Capital:",
      value: country.capital?.[0] || "N/A",
    },
  ];

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
      <div className="w-full border dark:border-appGreen/35 p-3 rounded-xl lg:max-w-[30rem] mx-auto shadow-md">
        <div className="mt-4">
          <img
            src={country.countryFlag}
            alt={`${country.name.common} flag`}
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h1 className="text-xl font-bold my-4 text-appGreen">
            {country.name.common || "Unknown Country"}
          </h1>
          {basicDetails.map((detail, index) => (
            <p className="font-bold text-sm sm:text-base" key={index}>
              {detail.label}{" "}
              <span className="font-light text-sm ml-1.5">{detail.value}</span>
            </p>
          ))}
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-bold">Top Level Domain</h2>
          <p>{country.tld?.join(", ") || ""}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-base font-bold">Currencies</h2>
          <p>
            {country.currencies
              ? Object.values(country.currencies)
                  .map((currency) => currency.name)
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
              ? country.borders.map((border) => (
                  <span
                    key={border}
                    className="dark:bg-appDark dark:border-appGreen/20 bg-[#f6fffd] border shadow-md dark:text-appWhite text-appDark my-2 text-sm px-3 py-1 rounded-md"
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
