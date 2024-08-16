declare module 'countries-list' {
    interface Country {
      name: string;
      native: string;
      phone: string;
      continent: string;
      capital: string;
      currency: string;
      region: string;
    }
  
    export const countries: Record<string, Country>;
  }
  