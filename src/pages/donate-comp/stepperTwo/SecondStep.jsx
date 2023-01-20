import { Button } from "@mui/material";
import React, { useContext } from "react";
import PaymentsTabs from "../paymentTabs/PaymentsTabs";
import { MultiStepContext } from "./stepContext/StepContext";

const SecondStep = () => {
  const { setCurrentStepData, userData, setUserData, submitStepperFinalData } =
    useContext(MultiStepContext);

  return (
    <div>
      <PaymentsTabs />
      <div className="flex justify-between">
        <Button variant="contained" onClick={() => setCurrentStepData(1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => setCurrentStepData(3)}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
