import React from 'react';
import { Link } from 'react-router-dom';
const DetailsLeft = ({event}) => {
  const { _id, tittle, image, date, location, dis } = event;
  return (
    <div className='w-[67%]'>
      <div className='border'>
        <div className='relative'>
          <img className='w-full h-[400px]' src={image} alt="" />
          <div className='absolute -bottom-32 left-12 right-12 bg-white p-7 -mt-6 shadow-gray-300 shadow-md'>
            <div className='flex justify-center gap-14  w-[100%] mx-auto '>
              <div className='bg-gray-100 flex gap-6 py-8 px-6 w-[50%]'>
                <i className="fa-solid fa-calendar-days text-3xl text-green-600"></i>
                <div>
                  <h5 className='text-xl font-bold'>Event Date</h5>
                  <p className='text-[16px] font-semibold text-gray-600'>{date}</p>
                  <p className='text-[17px] font-semibold text-gray-600'>10.00am</p>
                </div>
              </div>
              <div className='bg-gray-100 flex gap-6 py-8 px-6 w-[50%]'>
                <i className="fa-solid fa-location-dot text-3xl text-green-600"></i>
                <div>
                  <h5 className='text-xl font-bold'>Event Location</h5>
                  <p className='text-[16px] font-semibold text-gray-600'>{location}</p>
                </div>
              </div>

            </div>
            <div className='mt-8'>
              <Link to="/donate" className="bg-gradient-to-t from-green-700 to-green-400 py-3 px-5 text-[17px] font-semibold text-gray-200">Donate Now</Link>
            </div>
          </div>
        </div>
        <div className='mt-44 px-12 text-gray-700 text-justify pb-7'>
          <p>{dis}</p>
        </div>
        
      </div>
    </div>
  );
};

export default DetailsLeft;