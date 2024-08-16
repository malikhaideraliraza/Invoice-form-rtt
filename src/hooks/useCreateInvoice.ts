import { useMutation } from '@apollo/client';
import { CREATE_INVOICE } from '../mutations';
import { toast } from 'react-toastify';
import { InvoiceFormData, Item } from '../types';

interface UseCreateInvoiceProps {
  resetForm: () => void;
}

const useCreateInvoice = ({ resetForm }: UseCreateInvoiceProps) => {
  const [createInvoice] = useMutation(CREATE_INVOICE);

  const onSubmit = async (data: InvoiceFormData) => {
    const payload: InvoiceFormData = {
        ...data,
        itemAttributes: data.itemAttributes.map(item => ({ name: item.name, quantity: item.quantity, price: item.price })) as [Item, ...Item[]]
    }
    console.log((payload));
    
    try {
      const res = await createInvoice({
        variables: {
          input: {
            createInvoiceAttributes: payload
          },
        },
      });
      console.log(res);

      toast.success("Invoice created successfully!");
      resetForm();
    } catch (error) {
      console.error(error);
      toast.error("Failed to create invoice.");
    }
  };

  return { onSubmit };
};

export default useCreateInvoice;
