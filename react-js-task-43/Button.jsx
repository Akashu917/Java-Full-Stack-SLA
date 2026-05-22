import React from "react";

function Button({ children, variant = "primary" }) {
  
  const baseStyles =
    "px-5 py-2 rounded-lg font-medium transition duration-300 focus:outline-none focus:ring-2 active:scale-95";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",

    secondary:
      "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-300",

    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {children}
    </button>
  );
}

export default Button;