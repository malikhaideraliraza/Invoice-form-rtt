import React from "react";

//Comps
import FormTextInput from "../../../components/commonComps/FormTextInput";
import FormSelectInput from "../../../components/commonComps/FormSelectInput";

//Utills
import { countryOptions } from "../../../utills/constants";

interface BillFromSectionProps {}

const BillFromSection: React.FC<BillFromSectionProps> = () => {
  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Bill From</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormTextInput
          label="Company Name"
          name="billingFromAttributes.companyName"
        />
        <FormTextInput
          label="Company Email"
          name="billingFromAttributes.companyEmail"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <FormSelectInput
          label="Country"
          name="billingFromAttributes.billingFromAddressAttributes.country"
          options={countryOptions}
        />
        <FormTextInput
          label="City"
          name="billingFromAttributes.billingFromAddressAttributes.city"
        />
        <FormTextInput
          label="Postal Code"
          name="billingFromAttributes.billingFromAddressAttributes.postalCode"
        />
      </div>
      <FormTextInput
        label="Street Address"
        name="billingFromAttributes.billingFromAddressAttributes.streetAddress"
      />
    </div>
  );
};

export default BillFromSection;
