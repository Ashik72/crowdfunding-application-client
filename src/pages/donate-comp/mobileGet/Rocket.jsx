import React from "react";
import Button from "../../../typography/Button";

const Rocket = () => {
  return (
    <>
      <div className="mr-auto mt-6">
        <h1 className="font-semibold text-2xl py-2">Rocket payment</h1>
        <img
          src="https://i.ibb.co/Wcj2HnZ/rocket.png"
          className="max-w-[300px]"
          alt=""
        />
        <Button className="mt-4">Payment now</Button>
      </div>
    </>
  );
};

export default Rocket;
