import React from "react";
import "./FirstSection.css";
import childVideo from "../../Components/assets/child help/videoChild.jpg";
import background from "../../Components/assets/backgroundImage/background.png";
// import childVideo from '../../assets/child help/videoChild.jpg';
// import background from '../../assets/backgroundImage/background.png';
const FirstSection = () => {
  const video = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6 "
    >
      <path
        strokeLinecap="round"
        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
      />
    </svg>
  );

  return (
    <div
      className="grid mt-[600px] items-center gap-5 p-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-[90%] bg-[#3cf09c]  mx-auto mb-[150px] custom"
      style={{
        backgroundImage: `linear-gradient(#0b0b0b93,#0b0b0b93),url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="indicator">
        <span className="indicator-item cursor-pointer left-[90px] right-0 h-[30%] w-[8%] rounded-full indicator-middle badge bg-red-600 hover:bg-[#202124] hover:text-[white] hover:border-none text-white">
          {video}
        </span>
        <div className="grid w-[40%]   place-items-center">
          <img className="readius-child" src={childVideo} alt="" />
        </div>
      </div>
      <div className="">
        <h2 className="text-white text-4xl">
          We're a worldwide nonprofit charity organization
        </h2>
      </div>
      <div className="">
        <p className="text-white text-lg font-semibold">
          The purpose of our organization is to help the helpless and poor
          people. All of us workers have been working successfully. We do not
          keep any profit for us through this organization. If you want to know
          more about us, you can see our fund and our donations
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
