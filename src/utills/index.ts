import { countries } from "countries-list";

export function getNestedValue(obj: any, key: string) {
  return key.split(".").reduce((accumulator, currentKey) => {
    return accumulator ? accumulator[currentKey] : undefined;
  }, obj);
}

export function formateDate(dateVal: string) {
  const date = new Date(dateVal);
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export const getCountryName = (countryCode: string): string | undefined => {
  const country = countries[countryCode];
  return country ? country.name : undefined;
};

export const prepareItemString = (...items: string[]) => items.filter(s => Boolean(s)).join(", ");
