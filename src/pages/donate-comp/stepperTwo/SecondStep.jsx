import { Button } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import PaymentsTabs from "../paymentTabs/PaymentsTabs";

const SecondStep = () => {
  const { setCurrentStepData, userData, setUserData, submitStepperFinalData, stepperFinalData } =
    useContext(AuthContext);
  const handleUserDonationData = (e) => {
    console.log(userData);
    const cardData = {
      fullName: userData.fName + " " + userData.lName,
      amount: userData.amount,
      email: userData.email,
      address: userData.address,
      cardHolderName: userData.cardType,
    }
    fetch('http://localhost:5000/payment', {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify(cardData)
    })
      .then(res => res.json())
      .then(data => {
      console.log(data);
    })
  }
  return (
    <div>
      <PaymentsTabs />
      <div className="flex justify-between">
        <Button variant="contained" onClick={() => setCurrentStepData(1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => setCurrentStepData(3)}>
          <span onClick={handleUserDonationData}>Submit</span>
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
