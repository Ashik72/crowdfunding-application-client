import React from "react";
import "./CustomDonationSection.css";
import bg from "../../Components/assets/child help/1.jpg";
const avatar ="https://www.cdc.gov/cancer/prostate/images/man-750.jpg?_=76964"
const CunstomDonationSection = () => {
  return (
    <div className="bg-[#02a95c] mt-[1450px] sm:mt-[1100px] md:mt-[650px] lg:mt-[0px]  text-white overflow-x-hidden">
      <div className="grid max-w-[100%] lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="">
          <div className="divider mb-7 text-xl font-semibold  before:bg-white after:bg-white">
            Make A Donation
          </div>
          <h1 className="text-4xl mb-16 font-bold pl-10">
            Need Pure Water For <br /> Mozambique People
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4  lg:grid-cols-4 gap-2 px-10 ">
            <input
              className="custom_button custom_outline cursor-pointer px-2"
              type="button"
              value="200৳"
            />
            <input
              className="custom_button custom_outline cursor-pointer px-2"
              type="button"
              value="500৳"
            />
            <input
              className="custom_button custom_outline cursor-pointer px-2"
              type="button"
              value="1000৳"
            />
            <input
              className="custom_button custom_outline cursor-pointer px-2"
              type="text"
              placeholder="Custom"
            />
          </div>
          <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-2 px-2">
            <button className="custom_button_submit">Donate Now</button>
            <button className="custom_button_submit">Join Events</button>
          </div>
        </div>
        <div className="">
          <img src={bg} alt="" />
          <div className="mt-10">
            <h1 className="text-4xl py-5 font-semibold ">Great Donners</h1>
            <p className="text-lg font-semibold mb-7">
              Recently, those whose pictures you are looking at below are our
              best donors. They donate regularly to our organization and attend
              many of our events.
            </p>
          </div>
          <div className="flex pb-[55px]">
            <div className="avatar mr-4">
              <div className="w-14 rounded-full ring ring-[#202124] ring-offset-base-100 ring-offset-2">
                <img
                  alt=""
                  src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                />
              </div>
            </div>
            <div className="avatar mr-4">
              <div className="w-14 rounded-full ring ring-[#202124] ring-offset-base-100 ring-offset-2">
                <img
                  alt=""
                  src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
                />
              </div>
            </div>
            <div className="avatar mr-4">
              <div className="w-14 rounded-full ring ring-[#202124] ring-offset-base-100 ring-offset-2">
                <img
                  alt=""
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKVS3fJXWce782tZbbPeRO0EMFopAHno22Q&usqp=CAU"
                />
              </div>
            </div>
            <div className="avatar placeholder">
              <div style={{ backgroundImage: `url(${avatar})` }} className="w-14 rounded-full ring ring-[#202124] bg-[#202124] ring-offset-base-100 ring-offset-2">
                <span className="text-xl">+160</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CunstomDonationSection;
