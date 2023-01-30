import React, { useEffect, useState } from 'react';
import img from "../../../assets/images/1.jpg"
import SingleActivity from '../DashboardActivities/SingleActivity/SingleActivity';
const DashboardBankDonation = () => {
  const [eye, setEye] = useState(true);
  const [donateData, setDonateData] = useState([]);
  useEffect(() => {
    fetch("https://croudfunding-server-muradwahid.vercel.app/donate")
      .then(res => res.json())
      .then(data => {
        setDonateData(data)
        console.log(data);
      })
  }, [])
  return (
    <div className='w-full p-6 bg-[#04061a] overflow-x-scroll mb-16'>
      <h2 className='text-2xl font-serif text-gray-800 text-center mb-3 -ml-12'>Bank Donation</h2>
      <div className='flex items-center font-serif mb-3'>
        <hr className='w-[42%] border-gray-500' />
        <p>15 january 2023</p>
        <hr className='w-[40%] border-gray-500' />
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6'>
        {donateData?.map(data => <SingleActivity key={data._id} data={data} />)}
      </div>
    </div>
  );
};

export default DashboardBankDonation;