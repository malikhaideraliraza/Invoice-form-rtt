import React from 'react';
import { FieldError, useFormContext } from 'react-hook-form';

// Utils
import { getNestedValue } from '../../utills';

interface Option {
  value: string;
  label: string;
}

interface CommonSelectProps {
  name: string;
  options: Option[];
  label: string;
}

const FormSelectInput: React.FC<CommonSelectProps> = ({ name, options, label }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = getNestedValue(errors, name) as FieldError;

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        {...register(name)}
        className={`input w-full h-10 border !rounded-lg bg-white text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${
          error ? "!border-red-500" : ""
        }`}
      >
        <option value="" className="text-gray-500">Select</option>
        {options.map(option => (
          <option 
            key={option.value} 
            value={option.value} 
            className="text-gray-700 bg-white hover:bg-gray-100 hover:text-blue-500"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500 text-sm mt-1">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormSelectInput;
