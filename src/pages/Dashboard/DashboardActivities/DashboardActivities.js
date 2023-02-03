import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import SingleActivity from './SingleActivity/SingleActivity';


const options = { year: "numeric", month: "long", day: "numeric" };
const today = new Date();
const date = today.toLocaleDateString("en-US", options);

const DashboardActivities = () => {
  // const [donateData, setDonateData] = useState([]);
  const { data: donateData = [],isLoading } = useQuery({
    queryKey: ["donate"],
    queryFn: async () => {
      const res = await fetch(`https://croudfunding-server-muradwahid.vercel.app/donate`)
      const data = await res.json()
      return data
    }
  })
  if (isLoading) {
    return <div className='w-full p-6 bg-[#04061a] overflow-x-scroll h-[100vh] flex justify-center items-center' >
      <Circles
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      >

      </Circles>
    </div>
  }
  return (
    <div className='w-full p-6 bg-[#04061a] overflow-x-scroll '>
      <h1 className=' text-2xl font-serif text-gray-400 text-center mb-3'>Recent Donation Activity</h1>
      <div className='flex items-center font-serif mb-3'>
        <hr className='w-[40%] border-gray-400' />
        <p className='text-gray-300'>{date}</p>
        <hr className='w-[40%] border-gray-400' />
        
      </div>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-6 mb-10'>
        {donateData?.map(data => <SingleActivity key={data._id} data={data} />)}
      </div>
    </div>
  );
};

export default DashboardActivities;