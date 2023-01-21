import { Button } from "@mui/material";
import React, { useContext } from "react";
import { FaCheck } from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const ThirdStep = () => {
  const { setCurrentStepData, userData, setUserData, submitStepperFinalData } =
    useContext(AuthContext);

  // const moreOnclicHnadler = useCallback({

  // })

  return (
    <div>
      {/* <div className="flex items-center justify-center py-7">
        <div className="flex items-center justify-center flex-col">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white text-center flex items-center justify-center">
            <FaCheck />
          </div>
          <h2 className="text-green-600 font-semibold text-xl">
            Congratulations
          </h2>
          <h3>Your payment is successful!</h3>{" "}
          <Button variant="contained " onClick={() => setCurrentStepData(1)}>
            Close
          </Button>
        </div>
      </div> */}

      <div className="flex items-center justify-center py-7">
        <div className="flex items-center justify-center flex-col">
          <div className="w-12 h-12 rounded-full bg-green-600 text-white text-center flex items-center justify-center">
            <FaCheck className="text-white" />
          </div>
          <h2 className="text-green-600 font-semibold text-xl">
            Congratulations
          </h2>
          <h3>Your payment is successful!</h3>{" "}
          <Button variant="contained " onClick={() => setCurrentStepData(1)}>
            Close
          </Button>
        </div>
      </div>

      {/* <Button variant="contained" onClick={() => setCurrentStepData(2)}>
        Back
      </Button>
      <Button variant="contained" onClick={() => submitStepperFinalData()}>
        Submit
      </Button> */}
    </div>
  );
};

export default ThirdStep;
