import { z } from "zod";

export const invoiceSchema = z.object({
  billingFromAttributes: z.object({
    companyEmail: z.string().email("Invalid email address"),
    billingFromAddressAttributes: z.object({
      country: z.string().nonempty("Country is required"),
      city: z.string().nonempty("City is required"),
      postalCode: z.string().nonempty("Postal Code is required"),
      streetAddress: z.string().nonempty("Street Address is required"),
    }),
    companyName: z.string().nonempty("Company Name is required"),
  }),
  billingToAttributes: z.object({
    clientName: z.string().nonempty("Client Name is required"),
    clientEmail: z.string().email("Invalid email address"),
    billingToAddressAttributes: z.object({
      country: z.string().nonempty("Country is required"),
      city: z.string().nonempty("City is required"),
      postalCode: z.string().nonempty("Postal Code is required"),
      streetAddress: z.string().nonempty("Street Address is required"),
    }),
  }),
  paymentTerms: z.string().nonempty("Payment Terms is required"),
  projectDescription: z.string().nonempty("Project Description is required"),
  itemAttributes: z
    .array(
      z.object({
        name: z.string().nonempty("Required"),
        quantity: z.coerce.number().positive("Invalid"),
        price: z.coerce.number().positive("Invalid"),
        total: z.coerce.number().nullable().optional(),
      })
    )
    .nonempty("At least one item is required"),
  invoiceDate: z.string().nonempty("Invoice Date is required"),
});
