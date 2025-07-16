import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="inline-block mb-1 pl-1 dark:text-gray-200">
          {label}
        </label>
      )}
      <input
        type={type}
        ref={ref}
        {...props}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-gray-200 dark:focus:bg-gray-700 ${className}`}
        id={id}
      />
    </div>
  );
});

export default Input;
