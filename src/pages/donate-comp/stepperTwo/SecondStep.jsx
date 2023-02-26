import { Button } from "@mui/material";
import React, { createContext, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import PaymentsTabs from "../paymentTabs/PaymentsTabs";

export const BANK_PAYMENT_INFO = createContext();
const SecondStep = () => {
  const {
    user,
    setCurrentStepData,
    userData,
  } = useContext(AuthContext);
  const handleUserDonationData = (e) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const today = new Date();
    const date = today.toLocaleDateString("en-US", options);

    const cardData = {
      fullName: userData.fName + " " + userData.lName,
      amount: userData.amount,
      email: userData.email,
      city: userData.city,
      address: userData.address,
      number:userData.number,
      cardHolderName: userData.cardType,
      paymentType: userData.payment,
      image: user?.photoURL,
      date: date,
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

  // bank info object
  const [bankCardName, setBankCardName] = useState("");
  const [bankCardNumber, setBankCardNumber] = useState("");
  const [bankAmount, setBankAmount] = useState("");
  const [bankCardExp, setBankcardExp] = useState("");
  const [bankCardCvv, setBankcardCvv] = useState("");

  const bankPaymentInfo = {
    setBankCardName,
    setBankCardNumber,
    setBankAmount,
    setBankcardExp,
    setBankcardCvv,
  };

  return (
    <div>
      <BANK_PAYMENT_INFO.Provider value={bankPaymentInfo}>
        <PaymentsTabs />
      </BANK_PAYMENT_INFO.Provider>
      <div className="flex justify-between">
        <Button
          variant="contained"
          onClick={() => setCurrentStepData(1)}
          sx={{
            backgroundColor: "#07847f",
            "&:hover": { backgroundColor: "#15803D" },
          }}
        >
          Back
        </Button>

        {bankCardName === "" ||
        (bankCardName && bankCardName.length < 5) ||
        bankCardName.length > 15 ||
        bankCardNumber === "" ||
        (bankCardNumber && bankCardNumber.length < 8) ||
        bankCardNumber.length > 19 ||
        bankAmount === "" ||
        bankAmount.length > 11 ||
        bankCardExp === "" ||
        (bankCardExp && bankCardExp.length < 2) ||
        bankCardExp.length > 11 || bankCardCvv === "" ||
        (bankCardCvv && bankCardCvv.length < 2) ||
        bankCardCvv.length > 11 ? (
          <Button
            variant="contained"
            onClick={() => setCurrentStepData(3)}
            sx={{
              backgroundColor: "#07847f",
              "&:hover": { backgroundColor: "#15803D" },
            }}
            disabled
          >
            <span onClick={handleUserDonationData}>Submit</span>
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => setCurrentStepData(3)}
            sx={{
              backgroundColor: "#07847f",
              "&:hover": { backgroundColor: "#15803D" },
            }}
          >
            <span onClick={handleUserDonationData}>Submit</span>
          </Button>
        )}
      </div>
    </div>
  );
};

export default SecondStep;
