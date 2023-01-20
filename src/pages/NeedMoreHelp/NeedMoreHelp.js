import React from "react";
import old from "../../Components/assets/images/old.jpg";
const NeedMoreHelp = () => {
  return (
    <div
      className="my-32 w-4/5 mx-auto rounded p-[100px] text-white bg-[#6d1b7b]"
      style={{
        backgroundImage: `linear-gradient(#0b0b0b93,#0b0b0b93),url(${old})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="">
        <h1 className="font-semibold text-3xl mt-10 mb-2">How we help</h1>
        <p className="font-semibold text-5xl mb-7 font-sans">
          Join The Community To Help Poor Peoples
        </p>
      </div>
      <p className="font-semibold text-lg">
        Amader community te join korar maddhome osohay doridro manuser sahajjo
        korar etai ekti valo maddhom.Apnara sohojei ekhane theke osohay and
        doridro manusder sahajjo korte paren. apniw apnar sahajjer hatti bariye
        din.
      </p>
      <button className="btn px-10  text-lg bg-[#6d1b7b] mt-10">Donate </button>
    </div>
  );
};

export default NeedMoreHelp;
