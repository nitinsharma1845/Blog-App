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
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
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
