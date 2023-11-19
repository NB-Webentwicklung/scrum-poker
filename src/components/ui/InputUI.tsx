import React from "react";
import { Field } from "formik";

interface InputUIProps {
  label: string;
  placeholder: string;
  name: string;
  error: string | undefined;
  autofocus?: boolean;
}

const InputUI = ({
  label,
  placeholder,
  name,
  error,
  autofocus = false,
}: InputUIProps) => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <label htmlFor={name} className='pl-2 pb-1 text-lg font-medium'>
          {label}
        </label>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
      </div>
      <Field
        name={name}
        className='px-4 py-3 outline-none border-2 border-slate-500 rounded-lg w-full'
        placeholder={placeholder}
        autoFocus={autofocus}
      />
    </div>
  );
};

export default InputUI;
