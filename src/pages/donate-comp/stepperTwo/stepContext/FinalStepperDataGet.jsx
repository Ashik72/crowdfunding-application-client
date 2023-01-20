import React, { useContext, useState } from "react";
import { MultiStepContext } from "./StepContext";

const FinalStepperDataGet = () => {
  const { stepperFinalData } = useContext(MultiStepContext);
  const [data, setData] = useState({
    fName: stepperFinalData?.fName,
    lName: stepperFinalData?.lName,
    email: stepperFinalData?.email,
  });

  console.log(data);

  const userDonateData = {
    fName: stepperFinalData?.fName,
    lName: stepperFinalData?.lName,
    email: stepperFinalData?.email,
  };

  // console.log(userDonateData);

  // fetch("http://localhost:5000/payment/", {
  //   method: "POST",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  //   body: JSON.stringify(userDonateData),
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.success) {
  //       console.log(data.message);
  //     } else {
  //       console.log(data.error);
  //     }
  //   })
  //   .catch((error) => console.log(error));

  return <div>{/* <p>Hwllo</p> */}</div>;
};

export default FinalStepperDataGet;
