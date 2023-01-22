import React, { useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider/AuthProvider";

const FinalStepperDataGet = () => {
  const { stepperFinalData } = useContext(AuthContext);
  const [data, setData] = useState({
    fName: stepperFinalData?.fName,
    lName: stepperFinalData?.lName,
    email: stepperFinalData?.email,
  });

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
