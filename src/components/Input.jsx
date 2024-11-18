import React from "react"

const Input = ({
  type,
  label,
  divClassNames,
  customClassName,
  error,
  ...rest
}) => {

  return (
    <div className={`${divClassNames} flex flex-col gap-1`}>
      {label ? (
        <label className="block text-slate-500 text-sm font-medium mb-2 cap-first">
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        className={`border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring ring-blue-400 ${customClassName}`}
        type={type ? type : "text"}
        {...rest}
      />
      <span className="text-red-500">{error ? error : ""}</span>
    </div>
  );
};

export default Input;