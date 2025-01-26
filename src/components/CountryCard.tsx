import React, { FC } from "react";

interface countryCardProps {
  country: string;
  population: string;
  region: string;
  capital: string;
  countryFlag: string;
}

const CountryCard: FC<countryCardProps> = ({
  country,
  population,
  region,
  capital,
  countryFlag,
}) => {
  return (
    <div className="my-5 w-full bg-yellow-200 ">
      <img
        src={countryFlag}
        alt={`${country} flag`}
        className="w-full h-40 object-cover mb-3 rounded-md"
      />
      <h1 className="text-base font-bold">{country}</h1>
      <ul className="mt-3">
        <li>{population}</li>
        <li>{region}</li>
        <li>{capital}</li>
      </ul>
    </div>
  );
};

export default CountryCard;
