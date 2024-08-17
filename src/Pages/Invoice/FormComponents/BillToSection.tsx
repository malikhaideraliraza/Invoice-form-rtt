import React from "react";

//Comps
import FormTextInput from "../../../components/commonComps/FormTextInput";
import FormSelectInput from "../../../components/commonComps/FormSelectInput";

//Utills
import { countryOptions, paymentTermsOptions } from "../../../utills/constants";

interface BillToSectionProps {}

const BillToSection: React.FC<BillToSectionProps> = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Bill To</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormTextInput
          label="Client Name"
          name="billingToAttributes.clientName"
        />
        <FormTextInput
          label="Client Email"
          name="billingToAttributes.clientEmail"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormSelectInput
          label="Country"
          name="billingToAttributes.billingToAddressAttributes.country"
          options={countryOptions}
        />
        <FormTextInput
          label="City"
          name="billingToAttributes.billingToAddressAttributes.city"
        />
        <FormTextInput
          label="Postal Code"
          name="billingToAttributes.billingToAddressAttributes.postalCode"
        />
      </div>
      <FormTextInput
        label="Street Address"
        name="billingToAttributes.billingToAddressAttributes.streetAddress"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <FormTextInput label="Invoice Date" name="invoiceDate" type="date" />
        <FormSelectInput
          label="Payment Terms"
          name="paymentTerms"
          options={paymentTermsOptions}
        />
      </div>

      <FormTextInput label="Project Description" name="projectDescription" />
    </div>
  );
};

export default BillToSection;
