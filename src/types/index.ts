import { z } from "zod";
import { invoiceSchema } from "../validations";

export type Item = {
  id?: string;
  name: string;
  quantity: number;
  price: number;
  total?: number;
};

export type InvoiceFormData = z.infer<typeof invoiceSchema>;

export type Country = {
  name: string;
  native: string;
  phone: string;
  continent: string;
  capital: string;
  currency: string;
  region: string;
};
