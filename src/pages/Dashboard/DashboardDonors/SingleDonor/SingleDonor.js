import React from 'react';

const SingleDonor = ({ data, setDonorAmount,donorAmount}) => {
  const { fullName, amount, email, address, cardHolderName, paymentType, image } = data;
  
  return (
    <>
      <tr className='bg-[#1521a54d] border-b-2 border-gray-500'>
        <td className='text-sm font-semibold text-gray-700'><img className='ml-2 w-10 h-10 rounded-full object-cover' src={image} alt="" /></td>
        <td className='text-gray-700 font-semibold py-3'>{fullName}</td>
        <td className=''>{amount && amount.substring(0, 4)}</td>
        <td className='text-sm text-gray-700'>24 january 2023</td>
        <td className='text-sm text-gray-700'>Regular</td>
        
      </tr> 
    </>
  );
};

export default SingleDonor;