import React from 'react';
import { useLoaderData } from 'react-router-dom';
import WaterWave from 'react-water-wave';
import DetailsLeft from './DetailsLeft/DetailsLeft';
import EventUpcoming from './EventUpcoming/EventUpcoming';
const topBanner = "https://i.ibb.co/xMC3kR2/1.jpg";
const OurEventDetails = () => {
const event=useLoaderData()
  return (
    <div className='bg-gray-100'>
      {/* top banner start */}
      <WaterWave
        imageUrl={topBanner}
        style={{ height: "80vh", backgroundPosition: "center center",objectFit:"cover" }}
      >
        {methods => (
          <div className='flex justify-center w-4/5 mx-auto'>
            <h2 className='text-6xl font-bold text-gray-200 mt-[18%]'>{event.tittle}</h2>
          </div>
        )}
      </WaterWave>
      {/* top banner end */}
      <div className='flex gap-16 w-4/5 mx-auto py-24'>
        <DetailsLeft event={event} key={event._id} />
        <EventUpcoming/>
      </div>
    </div>
  );
};

export default OurEventDetails;