import React from 'react';
import { useState } from 'react';

const SingleActivity = (data) => {
  const [eye,setEye]=useState(true)
  const { fullName, amount, email, address, cardHolderName, paymentType, image } = data.data;
  console.log(data.data);
  return (
    <div className='w-40 border rounded-t-[10px] h-60 relative bg-white'>
      <div>
        <img className='h-24 w-40 object-cover rounded-t-[10px]' src={image} alt="" />
      </div>
      <div className='px-2'>
        <h4 className='text-sm font-bold font-serif my-[6px] text-gray-800'>{fullName}</h4>
        <small className='font-serif'>{address}</small>
        <div className='absolute flex items-center gap-20 bottom-1' >
          <p className='font-semibold'>{eye ? <span>${amount}</span> : <span>*****</span>}</p>
          <span className='cursor-pointer' onClick={() => setEye(!eye)}>
            {eye ? <i className="fa-solid fa-eye text-blue-800"></i> :
              <i className="fa-solid fa-eye-slash text-blue-800"></i>}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleActivity;