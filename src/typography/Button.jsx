import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="flex items-center bg-purple-600 py-2 px-6 rounded-md text-white hover:bg-purple-700 mt-4">
        {children}
      </button>
    </div>
  );
};

export default Button;
