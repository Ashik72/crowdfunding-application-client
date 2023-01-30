import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import '../DashboardStyle.css'
const DashboardUser = () => {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch(`https://croudfunding-server-muradwahid.vercel.app/payment?email=${user?.email}`)
    .then(res=>res.json())
      .then(data => {
        setUserData(data)
        // console.log(data);
    })
  }, [user?.email])
  console.log(userData?.address);
  return (
    <div className='bg-[#04061a] w-full p-6'>
      <p className='mb-3 lg:block hidden text-gray-700 font-bold text-3xl text-center font-serif'>Hi, {user?.displayName} Welcome to Our Dashboard</p>
      <p className='mb-3 lg:hidden block text-gray-700 font-bold text-3xl text-center font-serif'>Hi, {user?.displayName}</p>
      <div className="mt-6">
        <div className='flex items-center font-serif mb-3'>
          <hr className='w-[35%] border-gray-500' />
          <p className='text-xl text-gray-800 font-semibold font-serif text-center'>Your Donation Information</p>
          <hr className='w-[35%] border-gray-500' />
        </div>
        {/* <div className='flex gap-7 mt-6 flex-col'>
          <div className='mx-auto'>
            <img src={user?.photoURL} className="h-36 w-36 object-cover rounded-md" alt="" />
          </div>
          <div className='text-center'>
            <p className='text-xl text-gray-800 font-semibold font-serif'>Name: {user?.displayName}</p>
            <p className='text-gray-800 font-serif my-2'><span className='font-semibold'>Address: {userData?.address} </span> </p>
            <p className='text-gray-800 font-serif my-2'><span className='font-semibold'>Total donate:</span> ${userData?.amount}</p>
          </div>
        </div> */}


        <div className='flex justify-center relative mt-12 z-0 '>
          <div className='dashboardUserImgParent'>
            <img src={user?.photoURL} className="dashboardUserImg" alt="" />
          </div>
          <div className='mr-[68px] h-44 w-44 border-b-[6px] border-[#5764ec] tranform -rotate-[47deg] '>

          </div>
          <div className='h-44 w-44 border-[#5764ec] border-b-[6px] border-r-[6px] transform rotate-45 '>
          </div>
          <div className='ml-[68px] h-44 w-44 border-b-[6px] border-[#5764ec] tranform rotate-[47deg]'>

          </div>
          <p className=' text-gray-300 font-semibold font-serif z-50 absolute top-48 left-[340px]'>{user?.displayName}</p>
          <p className=' text-gray-300 z-50 absolute top-48 right-[340px]'><span>Total Donate:</span> ${userData?.amount}</p>
          <p className=' text-gray-300 z-50 absolute top-56 left-[340px]'><span className='font-semibold font-serif text-[#5764ec]'>Address:</span> {userData?.address}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;