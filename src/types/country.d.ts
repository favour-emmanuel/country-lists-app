export interface ICountry {
  country: string;
  population: string;
  region: string;
  capital: string;
  countryFlag: string;
  details: ICountryDetails;
}

export interface ICountryDetails {
  name: {
    common: string;
    nativeName?: {
      [key: string]: {
        common: string;
      };
    };
  };
  countryFlag: string;
  population: number;
  region: string;
  subregion?: string;
  capital?: string[];
  tld?: string[];
  currencies?: {
    [key: string]: {
      name: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  borders?: string[];
  flags: {
    svg: string;
  };
}

export interface ICountryCardProps {
  country: string;
  population: string;
  region: string;
  capital: string;
  countryFlag: string;
  onClick: () => void;
}

export interface ICountryDetailsProps {
  country: ICountryDetails;
  onBack: () => void;
}

export interface IRegionOption {
  value: string;
  label: string;
}

export interface IBasicDetail {
  label: string;
  value: string;
}