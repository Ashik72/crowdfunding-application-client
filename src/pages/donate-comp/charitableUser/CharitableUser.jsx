import { Step, StepLabel, Stepper } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

import FirstStep from "../stepperTwo/FirstStep";
import SecondStep from "../stepperTwo/SecondStep";
import FinalStepperDataGet from "../stepperTwo/stepContext/FinalStepperDataGet";
import ThirdStep from "../stepperTwo/ThirdStep";

const CharitableUser = () => {
  const { currentStepData, stepperFinalData } = useContext(AuthContext);

  const steps = ["User information", "Billing Information", "Complete"];

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;

      default:
        break;
    }
  };

  return (
    <div className="max-w-[70%] mx-auto">
      {/* Stepper */}

      <FinalStepperDataGet></FinalStepperDataGet>

      <h2 className="text-center text-2xl font-semibold">Donate information</h2>
      <div className="md:1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white">
        <div className="center-stepper py-7">
          <Stepper
            alternativeLabel
            style={{ width: "100%" }}
            activeStep={currentStepData - 1}
            orientation="horizontal"
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
        {showStep(currentStepData)}
      </div>
    </div>
  );
};

export default CharitableUser;
