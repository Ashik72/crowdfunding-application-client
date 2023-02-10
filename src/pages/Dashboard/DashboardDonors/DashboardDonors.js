import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import SingleDonor from "./SingleDonor/SingleDonor";
const DashboardDonors = () => {
  const [donorAmount, setDonorAmount] = useState("");

  const {
    data: donateData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
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
    <div className="pt-24 w-full p-6 bg-[#F1F5F9] overflow-x-scroll ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif font-semibold text-slate-800">
          Donors
        </h2>
        <p className="text-slate-800">
          <span className="font-semibold text-slate-800 font-serif">
            Totall donors:
          </span>{" "}
          {donateData.length}
        </p>
      </div>
      <div className="">
        <table className="w-full">
          {/* <thead className="bg-gradient-to-t from-[#040e77] to-[#5252f8] border border-gray-400 rounded-full"> */}
          <thead className="bg-[#C7D2FE] border border-gray-400 rounded-full">
            <tr className="text-slate-800">
              <th className="text-left pl-2">Donor</th>
              <th className="text-left">Address</th>

              <th className="text-left">Donation</th>
              <th className="text-left">Donation Date</th>
              <th className="text-left">Donor Type</th>
            </tr>
          </thead>
          <tbody>
            {donateData?.map((data) => (
              <SingleDonor
                key={data._id}
                donorAmount={donorAmount}
                setDonorAmount={setDonorAmount}
                data={data}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardDonors;
