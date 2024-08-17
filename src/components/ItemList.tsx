import React from "react";
import DeleteIcon from "../assets/DeleteIcon";
import PlusIcon from "../assets/PlusIcon";
import { FieldArrayWithId } from "react-hook-form";
import { InvoiceFormData, Item } from "../types";

interface ItemListProps {
  fields: FieldArrayWithId<InvoiceFormData, "items", "id">[];
  append: (value: Partial<Item> | Partial<Item>[], shouldFocus?: boolean) => void;
  remove: (index: number) => void;
  register: any;
  calculateTotal: (qty: number, price: number) => number;
}

export const ItemList: React.FC<ItemListProps> = ({ fields, append, remove, register, calculateTotal }) => (
  <div className="card">
    <h2 className="text-xl font-semibold mb-4">Item List</h2>
    {fields.map((item, index) => (
      <div key={item.id} className="grid grid-cols-6 gap-2 mb-4">
        <input
          {...register(`items.${index}.name`, { required: true })}
          placeholder="Item Name"
          className="input col-span-2"
        />
        <input
          type="number"
          {...register(`items.${index}.qty`, { required: true })}
          placeholder="Qty"
          className="input col-span-1"
        />
        <input
          type="number"
          {...register(`items.${index}.price`, { required: true })}
          placeholder="Price"
          className="input col-span-1"
        />
        <input
          type="number"
          value={calculateTotal(item.qty, item.price)}
          disabled
          className="input col-span-1"
        />
        <button type="button" onClick={() => remove(index)}>
          <DeleteIcon />
        </button>
      </div>
    ))}
    <button
      type="button"
      onClick={() => append({ name: "", qty: 1, price: 0 })}
      className="btn btn-secondary"
    >
      <PlusIcon /> Add Item
    </button>
  </div>
);
