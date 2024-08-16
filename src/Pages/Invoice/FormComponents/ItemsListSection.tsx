import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

//Comps
import FormTextInput from "../../../components/commonComps/FormTextInput";

//Assets
import DeleteIcon from "../../../assets/DeleteIcon";
import PlusIcon from "../../../assets/PlusIcon";

interface ItemsListSectionProps {}

const ItemsListSection: React.FC<ItemsListSectionProps> = () => {
  const {
    watch,
    control,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "itemAttributes",
  });

  return (
    <div className="p-6 bg-white">
      <h2 className="text-xl font-semibold mb-4">Items List</h2>
      {fields.map((_, index) => (
        <div key={index} className="grid grid-cols-12 gap-4 mb-4">
          <div className="col-span-5">
            <FormTextInput
              label="Item Name"
              name={`itemAttributes.${index}.name`}
            />
          </div>

          <div className="col-span-2">
            <FormTextInput
              label="Qty."
              name={`itemAttributes.${index}.quantity`}
              type="number"
            />
          </div>

          <div className="col-span-2">
            <FormTextInput
              label="Price"
              name={`itemAttributes.${index}.price`}
              type="number"
            />
          </div>

          <div className="col-span-2">
            <FormTextInput
              label="Total"
              name={`itemAttributes.${index}.total`}
              value={
                watch(`itemAttributes.${index}.price`, 0) *
                watch(`itemAttributes.${index}.quantity`, 0)
              }
              disabled
              type="number"
            />
          </div>

          <div className="col-span-1 flex justify-center items-center">
            <button
              type="button"
              onClick={() => remove(index)}
              className="text-red-500"
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: "", quantity: 1, price: 0, total: 0 })}
        className="bg-customPurple text-white w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
      >
        <PlusIcon /> <span>Add New Item</span>
      </button>
      {!Array.isArray(errors?.itemAttributes) &&
        errors?.itemAttributes?.message && (
          <p className="text-red-500 text-sm mt-1">
            {typeof errors?.itemAttributes.message == "string"
              ? errors?.itemAttributes.message
              : "Required"}
          </p>
        )}
    </div>
  );
};

export default ItemsListSection;
