import React, { FC } from "react";

interface CountryCardProps {
  country: string;
  population: string;
  region: string;
  capital: string;
  countryFlag: string;
  onClick: () => void;
}

const CountryCard: FC<CountryCardProps> = ({
  country,
  population,
  region,
  capital,
  countryFlag,
  onClick,
}) => {
  const countryData = [
    { label: "Population", value: population },
    { label: "Region", value: region },
    { label: "Capital", value: capital },
  ];

  return (
    <div className="my-5 w-full shadow-lg cursor-pointer" onClick={onClick}>
      <img
        src={countryFlag}
        alt={`${country} flag`}
        className="rounded-t-lg object-cover h-[200px] w-full"
      />

      <div className="bg-[#f6fffb] dark:bg-[#242424] dark:text-appWhite text-appDark shadow-sm px-3 py-2 cursor-pointer">
        <h1 className="text-base sm:text-lg mt-2 font-bold text-appGreen">
          {country}
        </h1>
        <div className="mt-3">
          {countryData.map((item, index) => (
            <h3 key={index} className="font-bold text-sm sm:text-base">
              {item.label}: <span className="font-normal">{item.value}</span>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
