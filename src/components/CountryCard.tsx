import React, { FC } from "react";

interface CountryCardProps {
  country: string;
  population: string;
  region: string;
  capital: string;
  countryFlag: string;
}

const CountryCard: FC<CountryCardProps> = ({
  country,
  population,
  region,
  capital,
  countryFlag,
}) => {
  const countryData = [
    { label: "Population", value: population },
    { label: "Region", value: region },
    { label: "Capital", value: capital },
  ];

  return (
    <div className="my-5 w-full shadow-lg">
      <img
        src={countryFlag}
        alt={`${country} flag`}
        className="rounded-t-lg object-cover h-[200px] w-full"
      />

      <div className="bg-[#f6fffb] shadow-sm px-3 py-2 cursor-pointer">
        <h1 className="text-lg mt-2 font-bold">{country}</h1>
        <div className="mt-3">
          {countryData.map((item, index) => (
            <h3 key={index} className="font-bold text-base">
              {item.label}: <span className="font-normal">{item.value}</span>
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
