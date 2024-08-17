import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//Utills
import { invoiceSchema } from "../../validations";
import { InvoiceFormData } from "../../types";
import { invoiceDefaultVals } from "../../utills/constants";

//Comps
import Header from "../../components/singletonComponents/Header";
import BillFromSection from "./FormComponents/BillFromSection";
import BillToSection from "./FormComponents/BillToSection";
import ItemsListSection from "./FormComponents/ItemsListSection";
import InvoicePreview from "./PreviewComponents/InvoicePreview";

//Hooks
import useCreateInvoice from "../../hooks/useCreateInvoice";

// TODO: Buttons on hover/Click effects
const InvoiceForm: React.FC = () => {
  const methods = useForm<InvoiceFormData>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: invoiceDefaultVals,
  });
  const { handleSubmit, reset } = methods;
  const resetForm = () => reset(invoiceDefaultVals);
  const { onSubmit, loading } = useCreateInvoice({ resetForm });

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
         {/* Header Section */}
        <Header
          title="New Invoice"
          subtitle="Create new invoice for your customers"
          onReset={resetForm}
          saveBtnLoading={loading}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Form Section */}
          <div className="p-6 bg-white rounded-3xl border border-gray-300">
            <BillFromSection />
            {/* TODO: This sction could be further devided in two sections */}
            <BillToSection />
            <ItemsListSection />
          </div>

          {/* Preview Section */}
          <InvoicePreview />
        </div>
      </form>
    </FormProvider>
  );
};

export default InvoiceForm;
