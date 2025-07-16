import React, { useId } from "react";
const SelectBtn = ({ options, label, className = "", ...props }, ref) => {
  const id = useId();
  return (
    <div>
      {label && <label htmlFor={id} className=""></label>}
      <select
        ref={ref}
        {...props}
        id={id}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full dark:bg-gray-800 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-gray-200 dark:focus:bg-gray-700 ${className}`}
      >
        {options?.map((value, index) => (
          <option value={value} key={index}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(SelectBtn);
