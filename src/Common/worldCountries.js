import worldCountries from "world-countries";
export const COUNTRY_OPTIONS = worldCountries
  .filter(
    (country) => !!country.flag && country.name.common && country.idd.root
  )
  .map((country) => ({
    name: country.name.common,
    label: country.name.common,
    value:
      country.flag + " " + country.idd.root + country.idd.suffixes[0] || "",
    flag: country.flag,
    countryCode: country.idd.root + country.idd.suffixes[0] || "",
    flagCode: country.cca2,
  }));
