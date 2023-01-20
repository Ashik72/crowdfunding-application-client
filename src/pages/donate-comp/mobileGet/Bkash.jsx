import React from "react";
import Button from "../../../typography/Button";

const Bkash = () => {
  return (
    <div className="mr-auto mt-6">
      <h1 className="font-semibold text-2xl  py-2">bKash payment</h1>
      <img
        src="https://i.ibb.co/d2C9JfV/bkash-payment-logo.png"
        className="max-w-[300px]"
        alt=""
      />
      <Button className="mt-4">Payment now</Button>
    </div>
  );
};

export default Bkash;
