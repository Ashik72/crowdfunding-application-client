import React, { createContext, useState } from "react";

export const MultiStepContext = createContext();

const StepContext = ({ children }) => {
  const [currentStepData, setCurrentStepData] = useState(1);
  const [userData, setUserData] = useState([]);
  const [stepperFinalData, setStepperFinalData] = useState([]);

  const submitStepperFinalData = () => {
    setStepperFinalData((data) => [...data, userData]);
    setUserData("");
    setCurrentStepData(1);
  };

  const stepperInfo = {
    currentStepData,
    setCurrentStepData,
    userData,
    setUserData,
    stepperFinalData,
    setStepperFinalData,
    submitStepperFinalData,
  };

  //   setCurrentStep("Rakiul Islam");

  return (
    <div>
      <MultiStepContext.Provider value={stepperInfo}>
        {children}
      </MultiStepContext.Provider>
    </div>
  );
};

export default StepContext;
