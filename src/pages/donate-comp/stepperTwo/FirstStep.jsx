import { Button } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const FirstStep = () => {
  const { setCurrentStepData, userData, setUserData } = useContext(AuthContext);

  const handleUserDonateData = (event) => {
    event.preventDefault();
  };
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
                className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="fName"
              >
                First Name <span className="text-2xl text-red-500">*</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="fName"
                type="text"
                placeholder="First name"
                value={userData["fName"]}
                onChange={(event) =>
                  setUserData({ ...userData, fName: event.target.value })
                }
                name="fName"
                required
              />
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="lName"
                type="text"
                placeholder="Last name"
                value={userData["lName"]}
                onChange={(event) =>
                  setUserData({ ...userData, lName: event.target.value })
                }
                name="lName"
              />
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="text"
                placeholder="Email"
                value={userData["email"]}
                onChange={(event) =>
                  setUserData({ ...userData, email: event.target.value })
                }
                name="email"
                required
              />
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="number"
                type="text"
                placeholder="Number"
                value={userData["number"]}
                onChange={(event) =>
                  setUserData({ ...userData, number: event.target.value })
                }
                name="number"
              />
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
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="address"
              type="text"
              placeholder="Address"
              value={userData["address"]}
              onChange={(event) =>
                setUserData({ ...userData, address: event.target.value })
              }
              name="address"
            />
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="city"
                type="text"
                placeholder="City name"
                value={userData["city"]}
                onChange={(event) =>
                  setUserData({ ...userData, city: event.target.value })
                }
                name="city"
              />
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="state"
                type="text"
                placeholder="State name"
                value={userData["state"]}
                onChange={(event) =>
                  setUserData({ ...userData, state: event.target.value })
                }
                name="state"
              />
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
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="zipCode"
                type="text"
                placeholder="Zip or postal code"
                value={userData["zipCode"]}
                onChange={(event) =>
                  setUserData({ ...userData, zipCode: event.target.value })
                }
                name="zipCode"
              />
            </div>
          </div>

          <div>
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
        mt-7
      "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
              value={userData["name"]}
              onChange={(event) =>
                setUserData({ ...userData, name: event.target.value })
              }
              name="message"
            ></textarea>
          </div>

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
        </form>
      </div>
    </div>
  );
};

export default FirstStep;
