import React from "react";
import TopBanner from "../../shared/topBanner/TopBanner";
import CharitableUser from "../donate-comp/charitableUser/CharitableUser";
import DonateGallery from "../donate-comp/donateGallery/DonateGallery";

const Donate = () => {
  return (
    <div className="">
      <TopBanner>Donate now</TopBanner>
      <DonateGallery />
      <CharitableUser />
    </div>
  );
};

export default Donate;
