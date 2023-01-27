import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Bkash from "../mobileGet/Bkash";
import Nagad from "../mobileGet/Nagad";
import Rocket from "../mobileGet/Rocket";

function PaymentsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [defaultPayment, setDefaultPayment] = useState([]);
  const [btnPayment, setBtnPayment] = useState([]);
  const [renderComp, setRenderComp] = useState("bkash");
  const [paymentSingleObj, setPaymentSingleObj] = useState([]);

  const { setCurrentStepData, userData, setUserData } = useContext(AuthContext);

  // payment data
  useEffect(() => {
    fetch("defaultPayment.json")
      .then((res) => res.json())
      .then((data) => setDefaultPayment(data))
      .catch((error) => console.log(error));
  }, []);

  const handleClick = (index) => {
    setActiveTab(index);
  };

  // btn value catch
  const handlePaymentClick = (payment) => {
    setBtnPayment(payment?.payment);
  };

  // mobile banking payment
  const handleMobileBankingPayment = (e) => {
    const bankingValue = e.target.value;
    setUserData({...userData, paymentMethod: bankingValue })
  };

  // console.log(renderComp);

  const bkashData = {
    paymentType: "bKash",
    paymentId: "",
    number: "",
  };

  const rocketData = {
    paymentType: "Rocket",
    paymentId: "",
    number: "",
  };

  const nagadData = {
    paymentType: "Nagad",
    paymentId: "",
    number: "",
  };

  // renderComp === "bkash" ? <Bkash /> : null;

  // if (renderComp === "bkash") {
  //   return <h1>Hello world</h1>;
  // } else if (renderComp === "rocket") {
  //   return <h1>Hello world, Congratulations </h1>;
  // } else if (renderComp === "nagad") {
  //   return <h1>Hello world, How are you?</h1>;
  // }

  // switch (renderComp) {
  //   case "bkash":
  //     setPaymentSingleObj(bkashData);
  //     break;

  //   case "rocket":
  //     console.log(rocketData);
  //     break;

  //   case "nagad":
  //     console.log(nagadData);
  //     break;

  //   default:
  //     break;
  // }

  return (
    <div className="max-w-[90%] mx-auto">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 0 ? "active" : ""}`}
          onClick={() => handleClick(0)}
        >
          Bank payment
        </div>
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleClick(1)}
        >
          Mobile payment
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleClick(2)}
        >
          Paypal
        </div>
      </div>
      <div className="tab-content mt-7">
        {activeTab === 0 && (
          // bank payment
          <div className="py-7">
            {/* payment */}
            <ul className="flex items-center justify-center flex-wrap my-6">
              {defaultPayment?.map((payment) => (
                <li
                  className="bg-green-600 py-3 px-5 rounded-lg text-white mx-2 cursor-pointer hover:bg-green-700 my-2 transition-all"
                  onClick={() => handlePaymentClick(payment)}
                >
                  {payment?.payment}$
                </li>
              ))}
            </ul>

            <form>
              {/* card info */}
              {/* card name */}
              <div className="w-full  px-3">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="state"
                >
                  Card name <span className="text-2xl text-red-500">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="state"
                  type="text"
                  placeholder="Card name"
                  value={userData["cardType"]}
                  onChange={(event) =>
                    setUserData({ ...userData, cardType: event.target.value })
                  }
                  name="cardType"
                />
              </div>

              {/* card number */}
              <div className="w-full  px-3">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="state"
                >
                  Card number <span className="text-2xl text-red-500">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="state"
                  type="text"
                  placeholder="Card number"
                  value={userData["cardNumber"]}
                  onChange={(event) =>
                    setUserData({ ...userData, cardNumber: event.target.value })
                  }
                  name="cardNumber"
                />
              </div>

              {/* Amount */}
              <div className="w-full  px-3">
                <label
                  className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="state"
                >
                  Amount <span className="text-2xl text-red-500">*</span>
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="state"
                  type="text"
                  placeholder="Amount"
                  // value={userData["amount"]}
                  onChange={(event) =>
                    setUserData({ ...userData, amount: event.target.value })
                  }
                  name="amount"
                  defaultValue={btnPayment}
                />
              </div>

              <div className="md:flex justify-between items-center">
                {/* Expiration date*/}
                <div className="w-full  px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="state"
                  >
                    Expiration date{" "}
                    <span className="text-2xl text-red-500">*</span>
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="state"
                    type="text"
                    placeholder="MM/YY"
                    value={userData["expirationDate"]}
                    onChange={(event) =>
                      setUserData({
                        ...userData,
                        expirationDate: event.target.value,
                      })
                    }
                    name="expirationDate"
                  />
                </div>

                {/* CVV */}
                <div className="w-full  px-3">
                  <label
                    className="block tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="state"
                  >
                    CVV <span className="text-2xl text-red-500">*</span>
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="state"
                    type="text"
                    placeholder="CVV"
                    value={userData["cvv"]}
                    onChange={(event) =>
                      setUserData({ ...userData, cvv: event.target.value })
                    }
                    name="cvv"
                  />
                </div>
              </div>
            </form>
          </div>
        )}
        {activeTab === 1 && (
          // mobile payment
          <div>
            {/* payment */}

            <div className="py-7">
              <select
                className="max-w-lg mx-auto py-3 px-4"
                name="handleMobileBankingPayment"
                onClick={handleMobileBankingPayment}
              >
                <option selected value="bkash">
                  bKash
                </option>
                <option value="rocket">Rocket</option>
                <option value="nagad">Nagad</option>
              </select>

              {renderComp === "bkash" ? <Bkash /> : null}
              {renderComp === "rocket" ? <Rocket /> : null}
              {renderComp === "nagad" ? <Nagad /> : null}
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            {/* Paypal */}
            {/* <ul className="flex items-center justify-center flex-wrap my-6">
              {defaultPayment?.map((payment) => (
                <li className="bg-purple-600 py-3 px-5 rounded-lg text-white mx-2 cursor-pointer hover:bg-purple-700 my-2">
                  {payment?.payment}$
                </li>
              ))}
            </ul> */}

            <h1 className="font-bold text-4xl text-center">Coming soon</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default PaymentsTabs;
