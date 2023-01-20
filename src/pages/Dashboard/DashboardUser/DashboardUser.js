import React from 'react';
import murad from "../../../assets/images/1.jpg"
const DashboardUser = () => {
  return (
    <div className='bg-gray-200 w-full p-6'>
      <p className='mb-3 text-gray-700 font-bold text-3xl text-center font-serif'>Hi, Murad Wahid Welcome to Our Dashboard</p>
      <div className="mt-6">
        <div className='flex items-center font-serif mb-3'>
          <hr className='w-[35%] border-gray-500' />
          <p className='text-xl text-gray-800 font-semibold font-serif text-center'>Your Donation Information</p>
          <hr className='w-[35%] border-gray-500' />
        </div>
        <div className='flex gap-7 mt-6'>
          <div>
            <img src={murad} className="h-36 w-36 object-cover" alt="" />
          </div>
          <div>
            <p className='text-xl text-gray-800 font-semibold font-serif'>Name: Murad Wahid</p>
            <p className='text-gray-800 font-serif my-2'><span className='font-semibold'>Total donate:</span> $300</p>
            <p className='text-gray-800 font-serif'><span className='font-semibold'>Last donate:</span> $300</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;