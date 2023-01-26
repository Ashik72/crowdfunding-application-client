import React from "react";
import "./JoinRecentEvent.css";
import child2 from "../../Components/assets/cold_clothes/child4.jpg";
import child3 from "../../Components/assets/cold_clothes/child.jpg";
import child4 from "../../Components/assets/cold_clothes/child7.jpg";
import child6 from "../../Components/assets/cold_clothes/child6.png";
// import child6 from '../../Components/assets/';
import { Link } from "react-router-dom";
const JoinRecentEvent = () => {
  return (
    <div className="max-w-[85%] mx-auto mb-20">
      <div className="my-24">
        <p className="text-[#02a95c] text-2xl font-bold">Recent Events</p>
        <h1 className="text-4xl font-bold">
          Join Recent Funraising Event <br /> of Givest
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="">
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row custom-border items-center">
            <div className="overflow-hidden transiton">
              <div className="box md:max-w-[300px] overflow-hidden">
                <img
                  className=" custom-scale h-full max-w-full"
                  src={child2}
                  alt=""
                />
              </div>
            </div>

            <div className="p-6">
              <p className="text-lg font-semibold">
                15 Februay 2023 //
                <span className="text-[#02a95c]">Education</span>{" "}
              </p>
              <h4 className="text-2xl font-bold hover:text-[#02a95c] cursor-pointer">
                {" "}
                Need School For Poor Children.
              </h4>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row custom-border items-center">
            <div className="overflow-hidden transiton">
              <div className="box md:max-w-[300px] overflow-hidden">
                <img
                  className=" custom-scale h-full max-w-full"
                  src={child3}
                  alt=""
                />
              </div>
            </div>

            <div className="p-6">
              <p className="text-lg font-semibold">
                1 March 2023 //
                <span className="text-[#02a95c]">Cold Clothes</span>{" "}
              </p>
              <h4 className="text-2xl font-bold hover:text-[#02a95c] cursor-pointer">
                Donate to Poor People Sweater.
              </h4>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row custom-border items-center">
            <div className="overflow-hidden transiton">
              <div className="box md:max-w-[300px] overflow-hidden">
                <img
                  className=" custom-scale h-full max-w-full"
                  src={child6}
                  alt=""
                />
              </div>
            </div>

            <div className="p-6">
              <p className="text-lg font-semibold">
                15 March 2023 //<span className="text-[#02a95c]"> Foods</span>{" "}
              </p>
              <h4 className="text-2xl font-bold hover:text-[#02a95c] cursor-pointer">
                {" "}
                Need Foods For Poor Children.
              </h4>
            </div>
          </div>
        </div>
        {/* ================== */}
        <div className="join_img">
          <img src={child4} alt="" className="rounded" />
          <Link className="custom__reactIcon video-icons-animations">
            <i class="fa-solid fa-circle-play text-white md:text-5xl text-4xl lg:text-5xl shadow-[#02a95c] sm:shadow-none"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JoinRecentEvent;
