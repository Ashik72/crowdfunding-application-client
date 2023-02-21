import React from "react";

const Button = ({ children }) => {
  return (
    <div>
      <button className="flex items-center bg-[#07847f] transition-all duration-500 hover:bg-[#078480c0] py-2 px-6 rounded-md text-white mt-4">
        {children}
      </button>
    </div>
  );
};

export default Button;

