import React from "react";
import Button from "../../../typography/Button";

const Nagad = () => {
  return (
    <>
      <div className="mr-auto mt-6">
        <h1 className="font-semibold text-2xl py-2">Nagad payment</h1>
        <img
          src="https://i.ibb.co/GsZNmhm/Nagad-Logo-for-web-128x53.jpg"
          className="max-w-[300px]"
          alt=""
        />
        <Button className="mt-4">Payment now</Button>
      </div>
    </>
  );
};

export default Nagad;
