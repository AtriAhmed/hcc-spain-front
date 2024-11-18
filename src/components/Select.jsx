import React from "react";

const Select= ({
  label,
  name,
  value,
  onChange,
  divClassNames,
  labelClassNames,
  selectClassNames,
  error,
  children,
  disabled,
}) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`${divClassNames} flex flex-col gap-1`}>
      {label ? (
        <label htmlFor={name} className={`block text-slate-500 font-medium mb-2 text-sm ${labelClassNames}`}>
          {label}
        </label>
      ) : (
        ""
      )}
      <select
        id={name}
        className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${selectClassNames}`}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      >
        {children}
      </select>
      <span className="text-red-500">{error ? error : ""}</span>
    </div>
  );
};

export default Select;