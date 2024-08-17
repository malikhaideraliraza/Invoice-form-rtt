import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import DeleteIcon from "../assets/DeleteIcon";
import PlusIcon from "../assets/PlusIcon";

const CREATE_INVOICE_MUTATION = gql`
  mutation createInvoice($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      id
    }
  }
`;

const InvoiceForm: React.FC = () => {
  const { register, handleSubmit, control, watch, reset } =
    useForm<InvoiceFormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "items",
  });

  const [createInvoice] = useMutation(CREATE_INVOICE_MUTATION);

  const onSubmit = async (data: any) => {
    //return console.log(data);

    try {
      //   const payload = {
      //     clientMutationId: "",
      //     createInvoiceAttributes: {
      //       invoiceDate: "",
      //       paymentTerms: "net-10-days",
      //       projectDescription: "",
      //       billingToAttributes: {
      //         clientName: "!",
      //         clientEmail: "String!",
      //         billingToAddressAttributes: {
      //           streetAddress: "",
      //           city: "",
      //           country: "",
      //           postalCode: "",
      //         },
      //       },
      //       billingFromAttributes: {
      //         companyName: "!",
      //         companyEmail: "",
      //         billingFromAddressAttributes: {
      //           streetAddress: "",
      //           city: "",
      //           country: "",
      //           postalCode: "",
      //         },
      //       },
      //       itemAttributes: [
      //         {
      //           name: "s",
      //           quantity: "i",
      //           price: "f",
      //         },
      //       ],
      //     },
      //   };

      await createInvoice({ variables: { input: data } });
      alert("Invoice created successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to create invoice.");
    }
  };

  const watchItems = watch("items", []);

  const calculateTotal = (qty: number, price: number) => qty * price;
  const calculateSubtotal = () =>
    watchItems.reduce(
      (acc: number, item: any) => acc + calculateTotal(item.qty, item.price),
      0
    );
  const tax = 0.1 * calculateSubtotal();
  const total = calculateSubtotal() + tax;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">New Invoice</h1>
          <p className="text-sm text-gray-500">
            Create new invoice for your customers
          </p>
        </div>
        <div className="space-x-2">
          <button
            type="button"
            className="btn btn-secondary !bg-white !text-black border border-gray-300 !rounded-lg"
            onClick={() => reset()}
          >
            Reset
          </button>

          <button
            type="submit"
            className="btn btn-primary !bg-[#7F56D9] !text-white !rounded-lg"
          >
            Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form Section */}
        <div className="p-6 bg-white rounded-3xl border border-gray-300">
          <div className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Bill From</h2>

            {/* Company Name and Email in the same row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  {...register("billingFromAttributes.companyName", {
                    required: true,
                  })}
                  placeholder="Company Name"
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Email
                </label>
                <input
                  {...register("billingFromAttributes.companyEmail", {
                    required: true,
                  })}
                  placeholder="Company Email"
                  className="input w-full"
                />
              </div>
            </div>

            {/* Other input fields */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  {...register(
                    "billingFromAttributes.billingFromAddressAttributes.country",
                    { required: true }
                  )}
                  className="input w-full h-10"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  {...register(
                    "billingFromAttributes.billingFromAddressAttributes.city",
                    { required: true }
                  )}
                  placeholder="City"
                  className="input w-full"
                />
              </div>
              <div className="mt-4">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Postal Code
  </label>
  <input
    {...register(
      "billingFromAttributes.billingFromAddressAttributes.postalCode",
      {
        required: true,
      }
    )}
    placeholder="Postal Code"
    className="input w-full !rounded-lg"
  />
</div>

            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Street Address
              </label>
              <input
                {...register(
                  "billingFromAttributes.billingFromAddressAttributes.streetAddress",
                  {
                    required: true,
                  }
                )}
                placeholder="Street Address"
                className="input w-full"
              />
            </div>
          </div>

          <div className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Bill To</h2>

            {/* Client Name and Email in the same row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Client Name
                </label>
                <input
                  {...register("billingToAttributes.clientName", {
                    required: true,
                  })}
                  placeholder="Client Name"
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Client Email
                </label>
                <input
                  {...register("billingToAttributes.clientEmail", {
                    required: true,
                  })}
                  placeholder="Client Email"
                  className="input w-full"
                />
              </div>
            </div>

            {/* Country, City, and Postal Code in the same row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  {...register(
                    "billingToAttributes.billingToAddressAttributes.country",
                    { required: true }
                  )}
                  className="input w-full h-10"
                >
                  <option value="">Select Country</option>
                  <option value="US">United States</option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City
                </label>
                <input
                  {...register(
                    "billingToAttributes.billingToAddressAttributes.city",
                    {
                      required: true,
                    }
                  )}
                  placeholder="City"
                  className="input w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code
                </label>
                <input
                  {...register(
                    "billingToAttributes.billingToAddressAttributes.postalCode",
                    {
                      required: true,
                    }
                  )}
                  placeholder="Postal Code"
                  className="input w-full"
                />
              </div>
            </div>

            {/* Invoice Date and Payment Terms in the same row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Invoice Date
                </label>
                <Controller
                  name="invoiceDate"
                  control={control}
                  defaultValue={new Date().toISOString().substring(0, 10)}
                  render={({ field }) => (
                    <input
                      type="date"
                      {...field}
                      className="input w-full h-10"
                    />
                  )}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Payment Terms
                </label>
                <select
                  {...register("paymentTerms", { required: true })}
                  className="input w-full h-10"
                >
                  <option value="10">Net 10 Days</option>
                  <option value="20">Net 20 Days</option>
                  <option value="30">Net 30 Days</option>
                </select>
              </div>
            </div>

            {/* Project Description */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Description
              </label>
              <input
                {...register("projectDescription", { required: true })}
                placeholder="Project Description"
                className="input w-full"
              />
            </div>
          </div>

          <div className="p-6 bg-white">
            <h2 className="text-xl font-semibold mb-4">Items List</h2>
            {fields.map((item, index) => (
              <div key={index} className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Item Name
                  </label>
                  <input
                    {...register(`items.${index}.name`, { required: true })}
                    placeholder="Item Name"
                    className="input w-full"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Qty.
                  </label>
                  <input
                    type="number"
                    {...register(`items.${index}.qty`, { required: true })}
                    placeholder="Qty"
                    className="input w-full"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    {...register(`items.${index}.price`, { required: true })}
                    placeholder="Price"
                    className="input w-full"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Total
                  </label>
                  <input
                    type="number"
                    value={calculateTotal(item.qty, item.price)}
                    disabled
                    className="input w-full"
                  />
                </div>

                <div className="col-span-1 flex items-end">
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-red-500 mb-2"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={() => append({ name: "", qty: 1, price: 0 })}
              className="bg-customPurple text-white w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
            >
              <PlusIcon /> <span>Add New Item</span>
            </button>
          </div>
        </div>

        {/* Preview Section */}
        <div className="p-6 bg-customGray rounded-3xl border border-gray-300">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="p-6 bg-white rounded-2xl border">
            <h3 className="text-lg font-semibold mb-2">New Invoice</h3>
            <p>Invoice Date: {watch("invoiceDate")}</p>
            <p>Payment Terms: Net {watch("paymentTerms")} Days</p>

            <div className="mt-4">
              <h4 className="font-semibold">Billed From</h4>
              <p>{watch("billingFromAttributes.companyName")}</p>
              <p>{watch("billingFromAttributes.companyEmail")}</p>
              <p>
                {watch(
                  "billingFromAttributes.billingFromAddressAttributes.city"
                )}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Billed To</h4>
              <p>{watch("billingToAttributes.clientName")}</p>
              <p>{watch("billingToAttributes.clientEmail")}</p>
              <p>
                {watch("billingToAttributes.billingToAddressAttributes.city")}
              </p>
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
                  {watchItems.map((item: any, index: number) => (
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
                <p>Subtotal: ${calculateSubtotal()}</p>
                <p>Tax (10%): ${tax}</p>
                <p className="font-bold">Total: ${total}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InvoiceForm;

type Item = {
  id?: string;
  name: string;
  qty: number;
  price: number;
};

type InvoiceFormData = {
  billingFromAttributes: {
    companyName: string;
    companyEmail: string;
    billingFromAddressAttributes: {
      streetAddress: string;
      city: string;
      country: string;
      postalCode: string;
    };
  };
  billingToAttributes: {
    clientName: string;
    clientEmail: string;
    billingToAddressAttributes: {
      streetAddress: string;
      city: string;
      country: string;
      postalCode: string;
    };
  };
  invoiceDate: string;
  paymentTerms: string;
  projectDescription: string;
  items: Item[];
};
