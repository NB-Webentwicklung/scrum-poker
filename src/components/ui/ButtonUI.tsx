import React from "react";

interface ButtonUIProps {
  label: string;
}

const ButtonUI = ({ label }: ButtonUIProps) => {
  return (
    <button
      type='submit'
      className='w-full py-3 bg-blue-300 hover:bg-blue-400 rounded-lg mt-4'
    >
      {label}
    </button>
  );
};

export default ButtonUI;
