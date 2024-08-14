import React from 'react';
import { FieldError } from 'react-hook-form';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: SelectOption[];
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: FieldError;
}

const Select: React.FC<SelectProps> = ({ label, name, options, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`mt-1 block w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-sm text-red-600">{error.message}</p>}
    </div>
  );
};

export default Select;
