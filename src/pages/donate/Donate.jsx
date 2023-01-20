import React from "react";
import CharitableUser from "../donate-comp/charitableUser/CharitableUser";
import DonateGallery from "../donate-comp/donateGallery/DonateGallery";
// import CharitableUser from "../../components/donate-comp/charitableUser/CharitableUser";
// import DonateGallery from "../../components/donate-comp/donateGallery/DonateGallery";
// import TopBanner from "../../components/shared/topBanner/TopBanner";

const Donate = () => {
  return (
    <div className="">
      {/* <TopBanner>Donate now</TopBanner> */}
      <DonateGallery />

      <CharitableUser />
    </div>
  );
};

export default Donate;
