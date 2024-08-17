import React from 'react';
import { formateDate, getCountryName } from '../../../utills';

interface InvoiceDetailsProps {
  watch: (path: string) => any;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ watch }) => {
  return (
    <div className="space-y-4 mt-4">
      {/* Date and Payment Terms */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h4 className="font-semibold mt-4 text-gray-400">Invoice Date</h4>
          <p className="mt-3">{formateDate(watch("invoiceDate"))}</p>
        </div>
        <div className="flex flex-col">
          <h4 className="font-semibold mt-4 text-gray-400">Payment Terms</h4>
          <p className="mt-3">{watch("paymentTerms")?.replaceAll('_', " ")}</p>
        </div>
      </div>

      {/* Billed From and Billed To */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold mt-4 text-gray-400">Billed From</h4>
          <p className="mt-3">{watch("billingFromAttributes.companyName")}</p>
          <p className="mt-3">{watch("billingFromAttributes.companyEmail")}</p>
          <p className="mt-3">{watch("billingFromAttributes.billingFromAddressAttributes.streetAddress")}</p>
          <p className="mt-3">{`${watch("billingFromAttributes.billingFromAddressAttributes.city")}, ${watch("billingFromAttributes.billingFromAddressAttributes.postalCode")}`}</p>
          <p className="mt-3">
            {getCountryName(watch("billingFromAttributes.billingFromAddressAttributes.country"))}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mt-4 text-gray-400">Billed To</h4>
          <p className="mt-3">{watch("billingToAttributes.clientName")}</p>
          <p className="mt-3">{watch("billingToAttributes.clientEmail")}</p>
          <p className="mt-3">{watch("billingToAttributes.billingToAddressAttributes.streetAddress")}</p>
          <p className="mt-3">{`${watch("billingToAttributes.billingToAddressAttributes.city")}, ${watch("billingToAttributes.billingToAddressAttributes.postalCode")}`}</p>
          <p className="mt-3">
            {getCountryName(watch("billingToAttributes.billingToAddressAttributes.country"))}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-gray-400">Project Description</h4>
        <p>{watch("projectDescription")}</p>
      </div>
    </div>
  );
};

export default InvoiceDetails;
