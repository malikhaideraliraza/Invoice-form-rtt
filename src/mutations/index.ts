import { gql } from "@apollo/client";

export const CREATE_INVOICE = gql`
  mutation CreateInvoice($input: CreateInvoiceInput!) {
    createInvoice(input: $input) {
      id
      billingFrom {
        companyName
        companyEmail
      }
      billingTo {
        clientName
        clientEmail
      }
      invoiceDate
      items {
        name
        quantity
        price
        totalPrice
      }
      subTotal
      tax
      totalAmount
    }
  }
`;