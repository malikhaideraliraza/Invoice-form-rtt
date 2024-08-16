import React from 'react';

interface InvoiceTotalsProps {
  subtotal: number;
  tax: number;
  total: number;
}

const InvoiceTotals: React.FC<InvoiceTotalsProps> = ({ subtotal, tax, total }) => (
  <div className="mt-4 flex justify-end">
    <div className="text-right space-y-1">
      <p className="mb-3">
        Subtotal: <span className="font-semibold ml-24">$ {subtotal}</span>
      </p>
      <p className="mb-3">
        Tax (10%): <span className="font-semibold ml-24">$ {tax}</span>
      </p>
      <p className="font-bold">
        Total: <span className="font-semibold ml-24">$ {total}</span>
      </p>
    </div>
  </div>
);

export default InvoiceTotals;
