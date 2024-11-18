import React from "react"

const Button = ({
  children,
  customClassnames,
  ...rest
}) => {
  return (
    <button
      className={`bg-primary hover:bg-primaryHover text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${customClassnames}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;