import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const FirstStep = () => {
  const { setCurrentStepData, userData, setUserData } = useContext(AuthContext);

  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [zip, setZip] = useState("");

  // handle input error
  let inputFirstName;
  let inputLastName;
  let inputEmail;
  let inputPhone;
  let inputAddress;
  let inputCity;
  let inputStateName;
  let inputZip;
  const reg = "";

  const handleUserDonateData = (event) => {
    event.preventDefault();
  };

  // first name
  if (fName && fName === "") {
    inputFirstName = "First name is require";
  } else if ((fName && fName.length < 2) || fName.length > 10) {
    inputFirstName = "First name must be between 2 to 10 range";
  }

  // last name
  if (lName && lName === "") {
    inputLastName = "Last name is require";
  } else if ((lName && lName.length < 2) || lName.length > 10) {
    inputLastName = "Last name must be between 2 to 10 range";
  }

  // Email

  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email || emailRegex.test(email)) {
    inputEmail = "";
  } else {
    inputEmail = "Please provide valid email";
  }

  // Number
  if (number && number === "") {
    inputPhone = "Number is require";
  } else if ((number && number.length < 5) || number.length > 11) {
    inputPhone = "Number must be between 5 to 11 range";
  }

  // address
  if (address && address === "") {
    inputAddress = "Address is require";
  } else if ((address && address.length < 10) || address.length > 35) {
    inputAddress = "Address must be between 10 to 35 range";
  }

  // City
  if (city && city === "") {
    inputCity = "city is require";
  } else if ((city && city.length < 3) || city.length > 15) {
    inputCity = "City must be between 3 to 15 range";
  }

  // State
  if (stateName && stateName === "") {
    inputStateName = "State is require";
  } else if ((stateName && stateName.length < 3) || stateName.length > 15) {
    inputStateName = "State must be between 3 to 15 range";
  }

  // Zip code
  if (zip && zip === "") {
    inputZip = "State is require";
  } else if ((zip && zip.length < 3) || zip.length > 10) {
    inputZip = "Zip code must be between 3 to 10 range";
  }

  // const handleFirstForm = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div>
      {/* <div>
        <input
          type="text"
          placeholder="Name"
          value={userData["name"]}
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          className="input input-bordered w-full max-w-xs"
          value={userData["name"]}
          onClick={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          required
        />
      </div> */}

      <div className="flex flex-col">
        <form onSubmit={handleUserDonateData}>
          {/* basic info */}
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
            {/* first name */}
            <div className="w-full  px-3">
              <label
                className=" block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="fName"
              >
                First Name <span className="text-2xl text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  fName && (fName === "" || fName.length < 2)
                    ? "inputErrorBorder"
                    : null
                }`}
                id="fName"
                type="text"
                placeholder="First name"
                value={userData["fName"]}
                onChange={(event) =>
                  setUserData({ ...userData, fName: event.target.value })
                }
                name="fName"
                onBlur={(e) => setFname(e.target.value)}
              />
              <small
                style={{ ontSize: "13px", padding: "10px 0", color: "red" }}
              >
                {inputFirstName}
              </small>
            </div>

            {/* last name */}
            <div className="w-full  px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="lName"
              >
                Last Name <span className="text-2xl text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  lName && (lName === "" || lName.length < 2)
                    ? "inputErrorBorder"
                    : null
                }`}
                id="lName"
                type="text"
                placeholder="Last name"
                value={userData["lName"]}
                onChange={(event) =>
                  setUserData({ ...userData, lName: event.target.value })
                }
                name="lName"
                onBlur={(e) => setLname(e.target.value)}
              />
              <small
                style={{ ontSize: "13px", padding: "10px 0", color: "red" }}
              >
                {inputLastName}
              </small>
            </div>

            {/* Email */}
            <div className="w-full  px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="email"
              >
                Email <span className="text-2xl text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  email && (!email || !emailRegex.test(email))
                    ? "inputErrorBorder"
                    : null
                }`}
                id="email"
                type="text"
                placeholder="Email"
                value={userData["email"]}
                onChange={(event) =>
                  setUserData({ ...userData, email: event.target.value })
                }
                name="email"
                onBlur={(e) => setEmail(e.target.value)}
              />
              <small
                style={{ ontSize: "13px", padding: "10px 0", color: "red" }}
              >
                {inputEmail}
              </small>
            </div>

            {/* Phone */}
            <div className="w-full  px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="number"
              >
                Number <span className="text-2xl text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  (number && number.length < 5) ||
                  (number && number.length > 11)
                    ? "inputErrorBorder"
                    : null
                }`}
                id="number"
                type="number"
                placeholder="Number"
                value={userData["number"]}
                onChange={(event) =>
                  setUserData({ ...userData, number: event.target.value })
                }
                name="number"
                onBlur={(e) => setNumber(e.target.value)}
              />
              <small
                style={{ ontSize: "13px", padding: "10px 0", color: "red" }}
              >
                {inputPhone}
              </small>
            </div>
          </div>

          {/* address */}
          <div className="w-full  px-3">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="address"
            >
              Address <span className="text-2xl text-red-500">*</span>
            </label>
            <input
              className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                (address && address.length < 10) ||
                (address && address.length > 35)
                  ? "inputErrorBorder"
                  : null
              }`}
              id="address"
              type="text"
              placeholder="Address"
              value={userData["address"]}
              onChange={(event) =>
                setUserData({ ...userData, address: event.target.value })
              }
              name="address"
              onBlur={(e) => setAddress(e.target.value)}
            />
            <small style={{ ontSize: "13px", padding: "10px 0", color: "red" }}>
              {inputAddress}
            </small>
          </div>

          {/* basic info */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* City name */}
            <div className="w-full  px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="city"
              >
                City Name <span className="text-2xl text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  (city && city.length < 3) || (city && city.length > 15)
                    ? "inputErrorBorder"
                    : null
                }`}
                id="city"
                type="text"
                placeholder="City name"
                value={userData["city"]}
                onChange={(event) =>
                  setUserData({ ...userData, city: event.target.value })
                }
                name="city"
                onBlur={(e) => setCity(e.target.value)}
              />
              <small
                style={{ ontSize: "13px", padding: "10px 0", color: "red" }}
              >
                {inputCity}
              </small>
            </div>

            {/* State name */}
            <div className="w-full  px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="state"
              >
                State name <span className="text-2xl text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  (stateName && stateName.length < 3) ||
                  (stateName && stateName.length > 15)
                    ? "inputErrorBorder"
                    : null
                }`}
                id="state"
                type="text"
                placeholder="State name"
                value={userData["state"]}
                onChange={(event) =>
                  setUserData({ ...userData, state: event.target.value })
                }
                name="state"
                onBlur={(e) => setStateName(e.target.value)}
              />
              <small
                style={{ ontSize: "13px", padding: "10px 0", color: "red" }}
              >
                {inputStateName}
              </small>
            </div>

            {/* Zip/postal code */}
            <div className="w-full  px-3">
              <label
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="zipCode"
              >
                Zip / postal code{" "}
                <span className="text-2xl text-red-500">*</span>
              </label>
              <input
                className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                  (zip && zip.length < 3) || (zip && zip.length > 10)
                    ? "inputErrorBorder"
                    : null
                }`}
                id="zipCode"
                type="text"
                placeholder="Zip or postal code"
                value={userData["zipCode"]}
                onChange={(event) =>
                  setUserData({ ...userData, zipCode: event.target.value })
                }
                name="zipCode"
                onBlur={(e) => setZip(e.target.value)}
              />
              <small
                style={{ ontSize: "13px", padding: "10px 0", color: "red" }}
              >
                {inputZip}
              </small>
            </div>
          </div>

          {/* message */}
          <div className="w-full  px-3 mt-7">
            <label
              className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="message"
            >
              Your message
            </label>
            <textarea
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="message"
              rows="3"
              placeholder="Your message"
              value={userData["name"]}
              onChange={(event) =>
                setUserData({ ...userData, name: event.target.value })
              }
              name="message"
            ></textarea>
          </div>
          {/* (fName && fName.length < 5) || fName.length > 10) */}

          {fName === "" ||
          (fName && fName.length < 2) ||
          fName.length > 10 ||
          lName === "" ||
          !email ||
          !emailRegex.test(email) ||
          (lName && lName.length < 2) ||
          lName.length > 10 ||
          (number && number.length < 5) ||
          (number && number.length > 11) ||
          address === "" ||
          (address && address.length < 10) ||
          (address && address.length > 35) ||
          city === "" ||
          (city && city.length < 3) ||
          (city && city.length > 15) ||
          stateName === "" ||
          (stateName && stateName.length < 3) ||
          (stateName && stateName.length > 15) ||
          zip === "" ||
          (zip && zip.length < 3) ||
          (zip && zip.length > 10) ? (
            <Button
              sx={{
                backgroundColor: "#02A95C",
                "&:hover": { backgroundColor: "#15803D" },
              }}
              variant="contained"
              onClick={() => setCurrentStepData(2)}
              style={{ margin: "25px 0" }}
              type="submit"
              disabled
            >
              Next
            </Button>
          ) : (
            <Button
              sx={{
                backgroundColor: "#02A95C",
                "&:hover": { backgroundColor: "#15803D" },
              }}
              variant="contained"
              onClick={() => setCurrentStepData(2)}
              style={{ margin: "25px 0" }}
              type="submit"
            >
              Next
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default FirstStep;
