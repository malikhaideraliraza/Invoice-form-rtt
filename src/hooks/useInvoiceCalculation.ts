import { useMemo } from "react";
import { Item } from "../types";

export const useInvoiceCalculation = (items: Item[]) => {
  const calculateTotal = (qty: number, price: number) => qty * price;

  const subtotal = useMemo(
    () =>
      items.reduce(
        (acc: number, item: Item) => acc + calculateTotal(item.qty, item.price),
        0
      ),
    [items]
  );

  const tax = 0.1 * subtotal;
  const total = subtotal + tax;

  return { calculateTotal, subtotal, tax, total };
};
