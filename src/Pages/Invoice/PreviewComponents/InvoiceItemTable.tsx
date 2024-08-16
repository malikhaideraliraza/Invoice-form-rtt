import React from 'react';

interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
}

interface InvoiceItemTableProps {
  items: InvoiceItem[];
  calculateTotal: (quantity: number, price: number) => number;
}

const InvoiceItemTable: React.FC<InvoiceItemTableProps> = ({ items, calculateTotal }) => (
  <div className="mt-4">
    <table className="table-auto w-full">
      <thead className="bg-gray-100">
        <tr>
          <th className="text-left px-4 py-2">Item</th>
          <th className="text-left px-4 py-2">Qty</th>
          <th className="text-left px-4 py-2">Price</th>
          <th className="text-left px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={index}>
            <td className="px-4 py-2">{item.name}</td>
            <td className="px-4 py-2">{item.quantity}</td>
            <td className="px-4 py-2">$ {item.price || 0}</td>
            <td className="px-4 py-2 text-right">
              $ {calculateTotal(item.quantity, item.price) || 0}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default InvoiceItemTable;
