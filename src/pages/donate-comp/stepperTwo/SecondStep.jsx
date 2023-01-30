import { Button } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import PaymentsTabs from "../paymentTabs/PaymentsTabs";

const SecondStep = () => {
  const {
    user,
    setCurrentStepData,
    userData,
    setUserData,
    submitStepperFinalData,
    stepperFinalData,
  } = useContext(AuthContext);
  const handleUserDonationData = (e) => {


    const cardData = {
      fullName: userData.fName + " " + userData.lName,
      amount: userData.amount,
      email: userData.email,
      address: userData.address,
      cardHolderName: userData.cardType,
      paymentType: userData.payment,
      image: user?.photoURL,
    };
    fetch("https://croudfunding-server-muradwahid.vercel.app/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cardData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <PaymentsTabs />
      <div className="flex justify-between">
        <Button
          variant="contained"
          onClick={() => setCurrentStepData(1)}
          sx={{
            backgroundColor: "#02A95C",
            "&:hover": { backgroundColor: "#15803D" },
          }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={() => setCurrentStepData(3)}
          sx={{
            backgroundColor: "#02A95C",
            "&:hover": { backgroundColor: "#15803D" },
          }}
        >
          <span onClick={handleUserDonationData}>Submit</span>
        </Button>
      </div>
    </div>
  );
};

export default SecondStep;
