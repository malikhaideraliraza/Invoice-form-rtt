import React from "react";
import { useFormContext, FieldError } from "react-hook-form";

//Utills
import { getNestedValue } from "../../utills";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  name: string;
  type?: string;
}

const FormTextInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  name,
  type = "text",
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = getNestedValue(errors, name) as FieldError;

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...rest}
        {...register(name)}
        placeholder={placeholder}
        type={type}
        className={`input w-full h-10 ${
          error ? "!border-red-500" : ""
        } !rounded-lg`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FormTextInput;
