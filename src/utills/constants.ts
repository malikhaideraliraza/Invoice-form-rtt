import { countries } from "countries-list";
import { Country } from "../types";

export const countryOptions = Object.keys(countries).map((code) => ({
  value: code,
  label: (countries as unknown as Record<string, Country>)[code].name,
}));

export const paymentTermsOptions = [
  { value: "NET_10_DAYS", label: "NET 10 DAYS" },
  { value: "NET_20_DAYS", label: "NET 20 DAYS" },
  { value: "NET_30_DAYS", label: "NET 30 DAYS" },
];

export const invoiceDefaultVals = {
  billingFromAttributes: {
    companyEmail: "",
    billingFromAddressAttributes: {
      country: "",
      city: "",
      postalCode: "",
      streetAddress: "",
    },
    companyName: "",
  },
  billingToAttributes: {
    clientName: "",
    clientEmail: "",
    billingToAddressAttributes: {
      country: "",
      city: "",
      postalCode: "",
      streetAddress: "",
    },
  },
  paymentTerms: "",
  projectDescription: "",
  invoiceDate: new Date().toISOString().substring(0, 10),
  itemAttributes: [],
};
