import React, { useEffect, useState } from 'react';
import murad from "../../../assets/images/1.jpg"
import SingleDonor from './SingleDonor/SingleDonor';
const DashboardDonors = () => {
  const [donateData, setDonateData] = useState([]);
  useEffect(() => {
    fetch("https://croudfunding-server-muradwahid.vercel.app/donate")
      .then(res => res.json())
      .then(data => {
        setDonateData(data)
      })
  }, [])
  return (
    <div className='w-full p-6 bg-gray-200 '>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-serif font-semibold text-gray-800'>Donors</h2>
        <p><span className='font-semibold text-gray-800 font-serif'>Totall donors:</span>{donateData.length}</p>
      </div>
      <div className="">
        <table className="w-full">
          <thead className='bg-gradient-to-t from-[#040e77] to-[#5252f8] border border-gray-400 rounded-full'>
            <tr className='text-gray-200'>
              <th className='text-left'></th>
              <th className='text-left'>Donor</th>
              <th className='text-left'>Total Donation</th>
              <th className='text-left'>Last Donation Date</th>
              <th className='text-left'>Donor Type</th>
            </tr>
          </thead>
          <tbody>
            {donateData?.map(data => <SingleDonor key={data._id} data={data}/>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardDonors;