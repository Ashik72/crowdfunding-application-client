import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
const eventCardImg = 'https://bdevs.net/wp/donakion/wp-content/uploads/2021/10/cause19.jpg';
const EventUpcoming = () => {
  const { data: events = [], refetch, isLoading } = useQuery({
    queryKey: ['event'],
    queryFn: async () => {
      const res = await fetch(`https://croudfunding-server-muradwahid.vercel.app/event`)
      const data = await res.json()
      return data
    }
  })
  return (
    <div className='w-[30%]'>
      <div className='border px-5 py-10 bg-white'>
        <h4 className='font-bold text-xl text-gray-800 border-b-[1px] border-gray-400 pb-2 mb-3'>Upcoming Event</h4>
        {
          events?.map(event => <div key={event._id} className='flex gap-4 mt-6'>
            <div className='overflow-hidden cursor-pointer'>
              <img className='w-40 h-24 object-cover transition-all duration-200 hover:scale-110' src={event.image} alt="" />
            </div>
            <div>
              <h4 className='leading-5 font-semibold mb-3 hover:text-green-700'><Link>{event.tittle}</Link></h4>
              <p><i className="fa-solid fa-calendar-days text-green-600 mr-1"></i> {event.date}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default EventUpcoming;