import React from "react";
import { Field } from "formik";

interface InputUI {
  label: string;
  placeholder: string;
  name: string;
  error: string | undefined;
}

const InputUI = ({ label, placeholder, name, error }: InputUI) => {
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
      />
    </div>
  );
};

export default InputUI;
