import React from "react";
import { useLoaderData } from "react-router-dom";
// import partner from "../../images/partners2.jpg";

const PartnerDetails = () => {
  const detailPartner = useLoaderData();
  return (
    <div>
      <div>
        <img src={"https://i.postimg.cc/wMLJ04sr/partners2.jpg"} alt="" />
      </div>

      <div className="m-20 lg:m-32">
        <img src={detailPartner.companyWebsite} alt="" />
        <p className="text-2xl font-bold my-6">
          {detailPartner.organigationName}
        </p>
        <p className="text-lg font-thin">{detailPartner.decs}</p>
      </div>
    </div>
  );
};

export default PartnerDetails;
