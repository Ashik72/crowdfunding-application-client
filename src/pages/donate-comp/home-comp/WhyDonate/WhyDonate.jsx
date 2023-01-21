import React from "react";
import { FaCheck, FaPlay } from "react-icons/fa";

const WhyDonate = () => {
  return (
    <div>
      <div className="hero min-h-screen  whyDonate">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="md:max-w-[50%] w-full px-2 relative">
            <img
              src="https://i.ibb.co/6wx7ZWZ/city.jpg"
              className="max-w-full rounded-lg shadow-2xl"
              alt=""
            />
            {/* video */}
            <div className="w-16 h-16 bg-purple-600 text-white rounded-full text-center flex items-center justify-center hover:border-6  why-play-btn">
              <div className="play-btn-effect">
                <FaPlay />
              </div>
            </div>
          </div>
          <div className="md:max-w-[50%] w-full px-2">
            <h2 className="text-3xl font-bold">Why donate </h2>
            <p className="py-6">
              Although many organizations use text-to-give and text-to-donate
              interchangeably to describe their text fundraising efforts, key
              differences in the setup and donation process separate the two
              into completely different fundraising methods.
            </p>
            <ul>
              <li className="flex items-center text-sm justify-start mt-1">
                <FaCheck />{" "}
                <span className="ml-2">
                  The phone carrier processes the donations and transfers.
                </span>
              </li>

              <li className="flex items-center text-sm justify-start mt-1">
                <FaCheck />{" "}
                <span className="ml-2">
                  The phone carrier processes the donations and transfers.
                </span>
              </li>

              <li className="flex items-center text-sm justify-start mt-1">
                <FaCheck />{" "}
                <span className="ml-2">
                  The phone carrier processes the donations and transfers.
                </span>
              </li>

              <li className="flex items-center text-sm justify-start mt-1">
                <FaCheck />{" "}
                <span className="ml-2">
                  The phone carrier processes the donations and transfers.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyDonate;
