import React from 'react';
import CountUp from 'react-countup';
import second from '../assets/Capture-removebg-preview.png'
import second2 from '../assets/Capture22-removebg-preview.png'
import second3 from '../assets/Capture33-removebg-preview.png'
import second4 from '../assets/Capture44-removebg-preview.png'
import second5 from '../assets/Capture55-removebg-preview.png'
import second6 from '../assets/medical.png'
import './Top.css'
const TopPartners = () => {
  return (
    <div className='bg-[#07847f] mt-[550px] mb-28 rounded-tl-[300px] rounded-br-[300px]'>
      <div className=" flex justify-between w-4/5 mx-auto">
        <div className="my-24">
          <p className='texl-xl font-semibold text-white mb-4'>EXPLORE CATEGORIES</p>
          <h2 className='text-5xl text-white font-bold'>Check Which Category <br /> Intrest You</h2>
        </div>
        <div className="bg-orange-500 max-w-full flex items-center gap-6 p-5 text-white max-h-[130px]">
          <span className='text-7xl'>
            <i className="fa-solid fa-people-roof"></i>
          </span>
          <div className="">
            <span><p className='text-5xl mb-2 font-semibold'><CountUp enableScrollSpy duration={15} start={0} end={37400}></CountUp> </p></span>
            <p className='font-medium text-xl'>Total Visitor</p>
          </div>
        </div>
      </div>
      <div className="max-w-[80%] mx-auto grid gap-7 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 text-white" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="500">
        <div className="border border-slate-400 mx-auto my-5 category_items">
          <img className='' src={second} alt="" />
          <p className='text-center  font-semibold text-xl mb-7'>Technology</p>
        </div>
        <div className="border border-slate-400 mx-auto my-5 category_items">
          <img className='' src={second2} alt="" />
          <p className='text-center  font-semibold text-xl mb-7'>Fashion</p>
        </div>
        <div className="border border-slate-400 mx-auto my-5 category_items">
          <img className='' src={second3} alt="" />
          <p className='text-center  font-semibold text-xl mb-7'>Videos</p>
        </div>
        <div className="border border-slate-400 mx-auto my-5 category_items">
          <img className='' src={second4} alt="" />
          <p className='text-center  font-semibold text-xl mb-7'>Education</p>
        </div>
        <div className="border border-slate-400 mx-auto my-5 category_items">
          <img className='' src={second5} alt="" />
          <p className='text-center  font-semibold text-xl mb-7'>Design</p>
        </div>
        <div className="border border-slate-400 mx-auto my-5 category_items">
          <img className='' src={second6} alt="" />
          <p className='text-center  font-semibold text-xl mb-7'>Medical</p>
        </div>
      </div>
      <div className="text-center pb-20 text-white text-lg font-semibold">
        <p>
          Discover projects just for you and get great recommendations when you <span className='underline font-bold text-white'>select your interests.</span>
        </p>
      </div>
    </div>
  );
};

export default TopPartners;