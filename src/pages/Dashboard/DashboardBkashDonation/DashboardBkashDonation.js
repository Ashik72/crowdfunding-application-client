import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Circles } from "react-loader-spinner";
import SingleActivity from "../DashboardActivities/SingleActivity/SingleActivity";

const options = { year: "numeric", month: "long", day: "numeric" };
const today = new Date();
const date = today.toLocaleDateString("en-US", options);

const DashboardBkashDonation = () => {
  const { data: donateData = [], isLoading } = useQuery({
    queryKey: ["donate"],
    queryFn: async () => {
      const res = await fetch(
        `https://croudfunding-server-muradwahid.vercel.app/donate`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full p-6 bg-[#F1F5F9] overflow-x-scroll h-[100vh] flex justify-center items-center">
        <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        ></Circles>
      </div>
    );
  }
  return (
    <div className="pt-24 w-full p-6 bg-[#F1F5F9] overflow-x-scroll mb-16">
      <h2 className="text-2xl font-serif text-slate-800 text-center mb-3 -ml-12">
        Bkash Donation
      </h2>
      <div className="flex items-center font-serif mb-3">
        <hr className="w-[42%] border-gray-500" />
        <p className="text-slate-800">{date}</p>
        <hr className="w-[40%] border-gray-500" />
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6">
        {donateData?.slice(8).map((data) => (
          <SingleActivity key={data._id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default DashboardBkashDonation;
