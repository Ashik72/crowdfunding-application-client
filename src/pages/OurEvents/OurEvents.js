import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import WaterWave from 'react-water-wave';
import EventCard from './EventCard/EventCard';
const eventsPhoto = 'https://i.ibb.co/5nTGLcS/breadcrum-bg-2.jpg';
const bottomBanner = 'https://i.ibb.co/yhbsJhS/donation-bg.jpg';
const bottomimg1 = 'https://i.ibb.co/ZTgHQpb/photo-1617878227827-8360231f7f03-ixlib-rb-4-0.jpg';
const bottomimg2 = 'https://i.ibb.co/7YmhpbJ/photo-1621795166651-745ceaa5c92f-ixlib-rb-4-0.jpg';
const OurEvents = () => {
  const { data: events= [], refetch, isLoading } = useQuery({
    queryKey: ['event'],
    queryFn: async () => {
      const res = await fetch(`https://croudfunding-server-muradwahid.vercel.app/event`)
      const data = await res.json()
      return data
    }
  })
  return (
    <div>
      {/* <div className='h-[100vh] w-full object-fill our-programs-top-banner' style={{
        backgroundImage: `linear-gradient(#00000082,#00000082),url(${eventsPhoto})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition:"cover cover"
      }}>

      </div> */}
      <WaterWave
        imageUrl={eventsPhoto}
        style={{height:"100vh", backgroundPosition:"center center"}}
      >
        {methods => (
          <div className='flex justify-center'>
            <h2 className='text-8xl font-bold text-gray-100 mt-[22%]'>Our Event</h2>
          </div>
        )}
      </WaterWave>
      <div className='w-4/5 mx-auto my-20'>
        {events?.map(event => <EventCard key={event._id} event={event} />)}
        
      </div>
      {/* bottom banner */}
      {/* <div className='h-[90vh] flex items-center z-0' style={{
        backgroundImage: `url(${bottomBanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "cover cover"
      }}>
        <div className='w-4/5 mx-auto flex gap-12'>
          <div className='mt-16'>
            <h2 className='text-5xl font-bold mb-6 text-gray-700'>Make Donation <br /> for poor people</h2>
            <p className='flex items-center'><span>Raised: </span> <h2 className='text-2xl font-semibold'> $9000</h2> </p>
            <div className='w-full h-5 bg-[#7CA055] rounded-full overflow-hidden mb-6'>
              <div className='w-[70%] h-full gap-6 bg-[#3D7D3C]'></div>
            </div>
            <div>
              <Link className='bg-[#3D7D3C] px-4 py-2 text-[18px] font-semibold text-gray-300 rounded-xl'>Donate Now</Link>
            </div>
          </div>
          <div>
            <div className='relative'>
              <img className='h-[370px] w-[360px] object-cover rounded-xl' src={bottomimg1} alt="" />
              <img className='h-[200px] w-[170px] rounded-xl object-cover absolute top-20 -right-24' src={bottomimg2} alt="" />
            </div>
          </div>
        </div>
      </div> */}

      <WaterWave
        imageUrl={bottomBanner}
        style={{ height: "90vh", backgroundPosition: "center center" }}
      >
        {methods => (
          <div className='w-4/5 mx-auto flex gap-12 pt-20'>
            <div className='mt-16'>
              <h2 className='text-5xl font-bold mb-6 text-gray-200'>Make Donation <br /> for poor people</h2>
              <p className='flex items-center text-gray-200'><span>Raised: </span> <h2 className='text-2xl font-semibold'> $9000</h2> </p>
              <div className='w-full h-5 bg-[#7CA055] rounded-full overflow-hidden mb-10'>
                <div className='w-[70%] h-full gap-6 bg-[#3D7D3C]'></div>
              </div>
              <div>
                <Link className='bg-gradient-to-t from-[#3D7D3C] to-[#64e262] px-7 py-4 text-[18px] font-semibold text-gray-300 rounded-xl'>Donate Now</Link>
              </div>
            </div>
            <div>
              <div className='relative'>
                <img className='h-[370px] w-[360px] object-cover rounded-xl' src={bottomimg1} alt="" />
                <img className='h-[200px] w-[170px] rounded-xl object-cover absolute top-20 -right-24' src={bottomimg2} alt="" />
              </div>
            </div>
          </div>
        )}
      </WaterWave>

    </div>
  );
};

export default OurEvents;