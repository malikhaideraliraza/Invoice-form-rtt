import React from 'react';
import { useFormContext } from 'react-hook-form';

// Components
import InvoiceDetails from './InvoiceDetails';
import InvoiceItemTable from './InvoiceItemTable';
import InvoiceTotals from './InvoiceTotals';

// Hooks
import useInvoiceCalculations from '../../../hooks/useInvoiceCalculations';

const InvoicePreview: React.FC = () => {
  const { watch } = useFormContext();
  const items = watch('itemAttributes', []);
  const { calculateTotal, subtotal, tax, total } = useInvoiceCalculations({
    items,
  });

  return (
    <div className="p-6 bg-customGray rounded-3xl border border-gray-300">
      <h2 className="text-xl font-semibold mb-4">Preview</h2>
      <div className="p-6 bg-white rounded-2xl border">
        <h3 className="text-lg font-semibold mb-2">New Invoice</h3>
        <hr />
        <InvoiceDetails watch={watch} />
        <InvoiceItemTable items={items} calculateTotal={calculateTotal} />
        <hr className="mt-4" />
        <InvoiceTotals subtotal={subtotal} tax={tax} total={total} />
      </div>
    </div>
  );
};

export default InvoicePreview;
