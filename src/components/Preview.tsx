import React from "react";
import { Item } from "../types";
import { useInvoiceCalculation } from "../hooks/useInvoiceCalculation";

interface PreviewProps {
  watch: any;
}

const Preview: React.FC<PreviewProps> = ({ watch }) => {
    const items = watch("items", []);
    const { calculateTotal, subtotal, tax, total } = useInvoiceCalculation(items);
    return(
  <div className="card">
    <h2 className="text-xl font-semibold mb-4">Preview</h2>
    <div className="card">
      <h3 className="text-lg font-semibold mb-2">New Invoice</h3>
      <p>Invoice Date: {watch("invoiceDate")}</p>
      <p>Payment Terms: Net {watch("paymentTerms")} Days</p>

      <div className="mt-4">
        <h4 className="font-semibold">Billed From</h4>
        <p>{watch("billingFromAttributes.companyName")}</p>
        <p>{watch("billingFromAttributes.companyEmail")}</p>
        <p>{watch("billingFromAttributes.billingFromAddressAttributes.city")}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Billed To</h4>
        <p>{watch("billingToAttributes.clientName")}</p>
        <p>{watch("billingToAttributes.clientEmail")}</p>
        <p>{watch("billingToAttributes.billingToAddressAttributes.city")}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Description</h4>
        <p>{watch("projectDescription")}</p>
      </div>

      <div className="mt-4">
        <h4 className="font-semibold">Items</h4>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Item</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: Item, index: number) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.qty}</td>
                <td>{item.price}</td>
                <td>{calculateTotal(item.qty, item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-end">
        <div className="text-right">
          <p>Subtotal: ${subtotal}</p>
          <p>Tax (10%): ${tax}</p>
          <p className="font-bold">Total: ${total}</p>
        </div>
      </div>
    </div>
  </div>
)};

export default Preview;