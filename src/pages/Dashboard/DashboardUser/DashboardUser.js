import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const DashboardUser = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
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
    <div className='bg-gray-200 w-full p-6'>
      <p className='mb-3 lg:block hidden text-gray-700 font-bold text-3xl text-center font-serif'>Hi, {user?.displayName} Welcome to Our Dashboard</p>
      <p className='mb-3 lg:hidden block text-gray-700 font-bold text-3xl text-center font-serif'>Hi, {user?.displayName}</p>
      <div className="mt-6">
        <div className='flex items-center font-serif mb-3'>
          <hr className='w-[35%] border-gray-500' />
          <p className='text-xl text-gray-800 font-semibold font-serif text-center'>Your Donation Information</p>
          <hr className='w-[35%] border-gray-500' />
        </div>
        <div className='flex gap-7 mt-6 flex-col'>
          <div className='mx-auto'>
            <img src={user?.photoURL} className="h-36 w-36 object-cover rounded-md" alt="" />
          </div>
          <div className='text-center'>
            <p className='text-xl text-gray-800 font-semibold font-serif'>Name: {user?.displayName}</p>
            <p className='text-gray-800 font-serif my-2'><span className='font-semibold'>Address: {userData?.address} </span> </p>
            <p className='text-gray-800 font-serif my-2'><span className='font-semibold'>Total donate:</span> ${userData?.amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardUser;