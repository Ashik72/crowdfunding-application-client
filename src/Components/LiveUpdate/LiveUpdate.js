import React from 'react';
import CountUp from 'react-countup';
import second1 from '../assets/sponsored/icon-fun1.png'
import second2 from '../assets/sponsored/icon-fun2.png'
import second3 from '../assets/sponsored/icon-fun3.png'
import second4 from '../assets/sponsored/icon-fun4.png'

const LiveUpdate = () => {
  return (
    <div className="bg-[#07847f]">
      <div className='w-4/5 mx-auto py-24'>
        <div className="grid items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="flex items-center justify-center py-10 gap-4
           border-r border-b" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <img src={second1} alt="" />
            <div className="">
              <h3 className='font-normal mb-1 text-2xl text-white'>Total Collection</h3>
              <h2 className='text-5xl font-bold text-black'>
                <CountUp enableScrollSpy start={0} end={199750}></CountUp>$</h2>
            </div>
          </div>
          <div className="flex items-center justify-center py-10 gap-4
           border-l border-b" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">
            <img src={second2} alt="" />
            <div className="">
              <h3 className='font-normal mb-1 text-2xl text-white'>Total Volunteers</h3>
              <h2 className='text-5xl font-bold text-black'><CountUp enableScrollSpy  start={0} end={900}></CountUp>+</h2>
            </div>
          </div>
          <div className="flex items-center justify-center py-10 gap-4
           border-r border-t" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <img src={second3} alt="" />
            <div className="">
              <h3 className='font-normal mb-1 text-2xl text-white'>Helped People</h3>
              <h2 className='text-5xl font-bold text-black'><CountUp enableScrollSpy start={0} end={21000}></CountUp>+</h2>
            </div>
          </div>
          <div className="flex items-center justify-center py-10 gap-4
           border-l border-t" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500">
            <img src={second4} alt="" />
            <div className="">
              <h3 className='font-normal mb-1 text-2xl text-white'>Supported Country</h3>
              <h2 className='text-5xl font-bold text-black'><CountUp enableScrollSpy duration={5} start={0} end={30}></CountUp>+</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveUpdate;