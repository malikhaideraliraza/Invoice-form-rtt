import React from 'react';
import { formateDate, getCountryName, prepareItemString } from '../../../utills';

interface InvoiceDetailsProps {
  watch: (path: string) => any;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({ watch }) => {

  const invoiceDate = watch("invoiceDate");
  const paymentTerms = watch("paymentTerms");
  const billingFrom = watch("billingFromAttributes") || {};
  const billingTo = watch("billingToAttributes") || {};
  const projectDescription = watch("projectDescription");

  return (
    <div className="space-y-4 mt-4">
      {/* Date and Payment Terms */}
      <div className="grid grid-cols-2 gap-4">
        <DetailSection
          title="Invoice Date"
          content={formateDate(invoiceDate)}
        />
        <DetailSection
          title="Payment Terms"
          content={paymentTerms?.replaceAll('_', " ")}
        />
      </div>

      {/* Billed From and Billed To */}
      <div className="grid grid-cols-2 gap-4">
        <DetailSection
          title="Billed From"
          content={
            <>
              <p>{billingFrom.companyName}</p>
              <p>{billingFrom.companyEmail}</p>
              <p>{billingFrom.billingFromAddressAttributes?.streetAddress}</p>
              <p>{prepareItemString(billingFrom.billingFromAddressAttributes?.city, billingFrom.billingFromAddressAttributes?.postalCode)}</p>
              <p>{getCountryName(billingFrom.billingFromAddressAttributes?.country)}</p>
            </>
          }
        />
        <DetailSection
          title="Billed To"
          content={
            <>
              <p>{billingTo.clientName}</p>
              <p>{billingTo.clientEmail}</p>
              <p>{billingTo.billingToAddressAttributes?.streetAddress}</p>
              <p>{prepareItemString(billingTo.billingToAddressAttributes?.city, billingTo.billingToAddressAttributes?.postalCode)}</p>
              <p>{getCountryName(billingTo.billingToAddressAttributes?.country)}</p>
            </>
          }
        />
      </div>

      <div className="mt-4">
        <h4 className="font-semibold text-gray-400">Project Description</h4>
        <p>{projectDescription}</p>
      </div>
    </div>
  );
};

// Helper component
const DetailSection: React.FC<{ title: string; content: React.ReactNode }> = ({ title, content }) => (
  <div className="flex flex-col">
    <h4 className="font-semibold text-gray-400">{title}</h4>
    <div className="mt-3 space-y-6">
      {content}
    </div>
  </div>
);

export default InvoiceDetails;
