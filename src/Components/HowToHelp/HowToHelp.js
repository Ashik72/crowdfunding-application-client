import React from 'react';
import './HowToHelp.css'
import second1 from '../assets/sponsored/icon1.png'
import second2 from '../assets/sponsored/icon2.png'
import second3 from '../assets/sponsored/icon3.png'

const HowToHelp = () => {
  return (
    <div className='pb-24'>
      <div className='bg-[#07847f] w-[90%] mx-auto rounded-tl-[150px] rounded-br-[150px]'>
        <div className="w-4/5 mx-auto">
          <div className="text-4xl font-semibold text-white py-16 text-center">
            <h4 className='text-white'>How To Help?</h4>
          </div>
          <div className="grid gap-14 grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="help__card cursor-pointer text-black justify-center rounded-md flex items-center gap-6 border py-5 hover:border-black transition-all duration-500 mb-20" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="500">
              <img src={second1} alt="" />
              <div className="te-xt">
                <p className='text-white font-medium text-sm'>Sharing</p>
                <h4 className='text-white text-2xl font-medium'>With Others</h4>
              </div>
            </div>
            <div className="help__card justify-center cursor-pointers rounded-md flex items-center gap-6 border py-5 hover:border-black transition-all duration-500 mb-20" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
              <img src={second2} alt="" />
              <div className="te-xt">
                <p className='text-white font-medium text-sm'>Donate</p>
                <h4 className='text-white text-2xl font-medium'>For A New Life</h4>
              </div>
            </div>
            <div className="help__card cursor-pointer justify-center rounded-md flex items-center gap-6 border py-5 hover:border-black transition-all duration-500 mb-20" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1200">
              <img src={second3} alt="" />
              <div className="te-xt">
                <p className='text-white font-medium text-sm'>Save</p>
                <h4 className='text-white text-2xl font-medium'>The Earth</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
  );
};

export default HowToHelp;