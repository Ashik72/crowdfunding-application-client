import React, { useEffect, useState } from "react";

export default function CampaignShow() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/campaign")
      .then((res) => res.json())
      .then((data) => setCampaigns(data));
  }, []);
  return (
    <div>
      <div className="bannerImg">
        {/* <img className='w-full h-96 object-cover' src={bannerImg} alt="" /> */}
        <h1 className="text-4xl font-bold">Campaign Show</h1>
      </div>
      {/* section for campaign */}
      <div className="my-16">
        {campaigns.map((campaign) => (
          <section
            key={campaign._id}
            className="border rounded-xl bg-emerald-200 w-[900px] mx-auto lg:flex p-6 mb-6"
          >
            <div>
              <img src={"https://i.postimg.cc/HWByHV1V/campaign.png"} alt="" />
            </div>
            <div>
              <p className="text-3xl font-bold text-center mb-4">
                Our Campaign
              </p>
              <p className="text-2xl font-semibold mb-5">Campaign Details: </p>
              <p className="text-xl font-thin mb-5">
                The type of account that will be receiving funds:{" "}
                <span className="text-2xl font-semibold text-red-500">
                  {campaign.money}
                </span>
              </p>
              <p className="text-xl font-thin mb-5">
                Residence Country:{" "}
                <span className="text-2xl font-semibold text-red-500">
                  {campaign.country}
                </span>
              </p>
              <p className="text-xl font-thin mb-5">
                Bank Country:{" "}
                <span className="text-2xl font-semibold text-red-500">
                  {campaign.bankCountry}
                </span>
              </p>
              <p className="text-xl font-thin mb-5">
                Bank Name:{" "}
                <span className="text-2xl font-semibold text-red-500">
                  {campaign.bankName}
                </span>
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
