import React, { useEffect, useState } from 'react';
import SingleActivity from './SingleActivity/SingleActivity';
const DashboardActivities = () => {
  const [donateData, setDonateData] = useState([]);
  useEffect(() => {
    fetch("https://croudfunding-server-muradwahid.vercel.app/donate")
    .then(res=>res.json())
      .then(data => {
        setDonateData(data)
        console.log(data);
    })
  },[])
  return (
    <div className='w-full p-6 bg-[#04061a] overflow-x-scroll '>
      <h1 className=' text-2xl font-serif text-gray-400 text-center mb-3'>Recent Donation Activity</h1>
      <div className='flex items-center font-serif mb-3'>
        <hr className='w-[40%] border-gray-400' />
        <p>15 january 2023</p>
        <hr className='w-[40%] border-gray-400' />
        
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 mb-10'>
        {donateData?.map(data => <SingleActivity key={data._id} data={data} />)}
      </div>
    </div>
  );
};

export default DashboardActivities;