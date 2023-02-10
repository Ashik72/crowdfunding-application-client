import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const eventCardImg ='https://bdevs.net/wp/donakion/wp-content/uploads/2021/10/cause19.jpg';



const EventCard = ({ event }) => {
  const {_id,tittle,image,date,location } = event;
  const [time,setTime]=useState()
  let countDownDate=new Date(date).getTime()
  let dateFunc = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24))
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes= Math.floor((distance%(1000*60*60))/(1000*60))
    let seconds = Math.floor((distance % (1000 * 60)) / 1000)
    setTime({days,hours,minutes,seconds})
  },1000)

  return (
    <div className='h-32 flex justify-between items-center border pr-6 mb-6'>
      <div className='h-full overflow-hidden cursor-pointer'>
        <img className='h-full transition-all duration-200 hover:scale-110' src={image} alt="" />
      </div>
      <div>
        <h3 className='text-3xl font-bold transition-all duration-200 hover:text-green-700'><Link to={`/our-events/event-details/${_id}`}>{tittle}</Link></h3>
        <p>{location}</p>
      </div>
      <div className='flex'>
        <div className='border-r-[1px] border-l-[1px] px-5'>
          <h3 className='text-4xl font-bold'>{time?.days}</h3>
          <p>Days</p>
        </div>
        <div className='border-r-[1px] px-5'>
          <h3 className='text-4xl font-bold'>{time?.hours}</h3>
          <p>Hours</p>
        </div>
        <div className='border-r-[1px] px-5'>
          <h3 className='text-4xl font-bold'>{time?.minutes}</h3>
          <p>Minutes</p>
        </div>
        <div className='px-5'>
          <h3 className='text-4xl font-bold'>{time?.seconds}</h3>
          <p>Second</p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;