import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="flex items-center bg-green-600 hover:bg-green-700 py-2 px-6 rounded-md text-white mt-4">
        {children}
      </button>
    </div>
  );
};

export default Button;

