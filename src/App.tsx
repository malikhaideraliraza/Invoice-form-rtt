import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Pages
import InvoicePage from './Pages/Invoice';

// TODO: Some fine grained responsivnes
const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      {/* TODO: We may need some fine grained touch up in InvoicePage UI and flow */}
      <InvoicePage />
      {/* TODO: Toast Needs Improvements as per design */}
      <ToastContainer />
    </div>
  );
};

export default App;
