import React from 'react';
import second1 from '../assets/sponsored/1.png'
import second2 from '../assets/sponsored/2.png'
import second3 from '../assets/sponsored/3.png'
import second4 from '../assets/sponsored/4.png'
import second5 from '../assets/sponsored/5.png'
import second6 from '../assets/sponsored/6.png'
import second7 from '../assets/sponsored/7.png'
import second8 from '../assets/sponsored/8.png'

const Sponsored = () => {
  return (
    <div className='bg-[#07847f]'>
      <div className="w-4/5 mx-auto py-28">
        <div className="">
          <div className="heading">
            <h4 className='text-4xl font-semibold text-white mb-7'>Top Partners</h4>
          </div>
          <div className="letter mb-14">
            <p className='text-lg font-medium text-white border-l-4 px-5'>
              We make a difference in the lives of people during a very traumatic time in <br /> their life. Meeting their medical transport needs eases their burden.
            </p>
          </div>
        </div>
        <div className="grid gap-14 items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="500">
          <img className='hover:scale-110 transition-all duration-500 cursor-pointer' src={second1} alt="" />
          <img className='hover:scale-110 transition-all duration-500 cursor-pointer' src={second2} alt="" />
          <img className='hover:scale-110 transition-all duration-500 cursor-pointer' src={second3} alt="" />
          <img className='hover:scale-110 transition-all duration-500 cursor-pointer' src={second4} alt="" />
          <img className='hover:scale-110 transition-all duration-500 cursor-pointer' src={second5} alt="" />
          <img className='hover:scale-110 transition-all duration-500 cursor-pointer' src={second6} alt="" />
          <img className='hover:scale-110 transition-all duration-500 cursor-pointer' src={second7} alt="" />
          <img className='hover:scale-110 transition-all duration-500 cursor-pointer' src={second8} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;