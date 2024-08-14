export type Item = {
  id?: string;
  name: string;
  qty: number;
  price: number;
};

export type InvoiceFormData = {
  billingFromAttributes: {
    companyName: string;
    companyEmail: string;
    billingFromAddressAttributes: {
      streetAddress: string;
      city: string;
      country: string;
      postalCode: string;
    };
  };
  billingToAttributes: {
    clientName: string;
    clientEmail: string;
    billingToAddressAttributes: {
      streetAddress: string;
      city: string;
      country: string;
      postalCode: string;
    };
  };
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  items: Item[];
};
