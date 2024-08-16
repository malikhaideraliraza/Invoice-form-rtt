// useInvoiceCalculations.ts

import { useMemo } from 'react';
import { Item } from '../types';

interface UseInvoiceCalculationsProps {
    items: Item[];
}

const useInvoiceCalculations = ({ items }: UseInvoiceCalculationsProps) => {
  const calculateTotal = useMemo(
    () => (quantity: number, price: number) => quantity * price,
    []
  );

  const subtotal = items.reduce(
      (acc: number, item: Item) => acc + calculateTotal(item.quantity, item.price),
      0
    );

  const tax = Number((0.1 * subtotal)?.toFixed(2));

  const total = subtotal + tax;

  return { calculateTotal, subtotal, tax, total };
};

export default useInvoiceCalculations;
