import React from "react";
import "./CustomDonationSection.css";
import bg from "../../Components/assets/child help/1.jpg";
const CunstomDonationSection = () => {
  return (
    <div className="bg-[#02a95c] mt-[14 50px] sm:mt-[1100px] md:mt-[650px] lg:mt-[0px]  text-white overflow-x-hidden">
      <div className="grid max-w-[100%] lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
        <div className="">
          <div className="divider mb-7 text-xl font-semibold  before:bg-white after:bg-white">
            Make A Donation
          </div>
          <h1 className="text-4xl mb-16 font-bold">
            Need Pure Water For <br /> Mozambique People
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4  lg:grid-cols-4 gap-2 px-2">
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
          <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2  gap-2">
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
                  src="https://scontent.fspd3-1.fna.fbcdn.net/v/t1.6435-9/127236498_166685291840972_6634378565443689719_n.jpg?stp=c0.34.206.206a_dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=da31f3&_nc_ohc=pPwSrYUPHkAAX9esKtq&_nc_ht=scontent.fspd3-1.fna&oh=00_AfBWxE3d6fBmVneAumeuqaE50UHapjjr3_KRhFZMRzA6fw&oe=63F1D07C"
                />
              </div>
            </div>
            <div className="avatar mr-4">
              <div className="w-14 rounded-full ring ring-[#202124] ring-offset-base-100 ring-offset-2">
                <img
                  alt=""
                  src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/324858921_843690006925407_2741781176648495660_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=-8L7bEAeV1AAX-zO5_Z&_nc_ht=scontent.fspd3-1.fna&oh=00_AfAE81weww-EIDB9OcpdDIyAMBB3bxih--3M3IEqJoIPpA&oe=63CEC7B4"
                />
              </div>
            </div>
            <div className="avatar mr-4">
              <div className="w-14 rounded-full ring ring-[#202124] ring-offset-base-100 ring-offset-2">
                <img
                  alt=""
                  src="https://scontent.fspd3-1.fna.fbcdn.net/v/t39.30808-6/323417073_1676027036151398_4496687601506444548_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=oFGWq0ZabXUAX_OfA6b&_nc_ht=scontent.fspd3-1.fna&oh=00_AfDbdKMMUlo5E5lCqMFe0oDy33mstykkPSTMWsEHV-LKpg&oe=63CFDBDF"
                />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-14 rounded-full ring ring-[#202124] bg-[#202124] ring-offset-base-100 ring-offset-2">
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
