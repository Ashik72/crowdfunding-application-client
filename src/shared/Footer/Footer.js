import React from 'react';
import './Locations.css'
import FooterSliders from './FooterSliders';

const logo="https://i.ibb.co/chCtMTL/logo.png"
const second1='https://i.ibb.co/D1xPg0m/footer-widget-one-gallery-1.jpg'
const second2='https://i.ibb.co/80p56MT/footer-widget-one-gallery-2.jpg'
const second3='https://i.ibb.co/3fmhwpZ/footer-widget-one-gallery-3.jpg'
const second4='https://i.ibb.co/qJyhJyk/footer-widget-one-gallery-4.jpg'
const second5='https://i.ibb.co/MBNRyTR/footer-widget-one-gallery-5.jpg'
const second6='https://i.ibb.co/bWCcS2r/footer-widget-one-gallery-6.jpg'
const second7='https://i.ibb.co/X2WdvV9/footer-widget-one-gallery-7.jpg'
const second8='https://i.ibb.co/SsD3NwC/footer-widget-one-gallery-8.jpg'
const second9='https://i.ibb.co/TchHCCf/footer-widget-one-gallery-9.jpg'






const Footer = () => {
  return (
    <div className="bg-[#07847f] ">
      <div className="py-20">
        <div className='w-4/5 mx-auto'>
          <div className="grid gap-5 justify-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="first">
              <div className="">
                <img src={logo} alt="" className='mb-5' />
                <p className='text-lg text-slate-300 font-medium py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore.</p>
                <div className="location flex items-center gap-2 my-3">
                  <i className="fa-solid fa-location-dot text-white"></i>
                  <p className='text-slate-300 font-medium'>13/A, Debiganj City.</p>
                </div>
                <div className="location flex items-center gap-2 my-3">
                  <i class="fa-regular fa-envelope-open text-white"></i>
                  <p className='text-slate-300 font-medium'>rkrocky2018@gmail.com</p>
                </div>
                <div className="location flex items-center gap-2 my-3">
                  <i class="fa-solid fa-phone-volume text-white"></i>
                  <p className='text-slate-300 font-medium'>01737546168</p>
                </div>
              </div>
            </div>
            <div className="second max-w-[280px]">
              <div className="">
                <h4 className='text-2xl font-medium text-white my-10'>Gallery</h4>
              </div>
              <div className="grid  gap-y-3 -gap-x- grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
                <img src={second1} alt="" />
                <img src={second2} alt="" />
                <img src={second3} alt="" />
                <img src={second4} alt="" />
                <img src={second5} alt="" />
                <img src={second6} alt="" />
                <img src={second7} alt="" />
                <img src={second8} alt="" />
                <img src={second9} alt="" />
              </div>
            </div>
            <div className="third">
              <div className="">
                <h4 className='text-2xl font-medium text-white my-10'>Latest News</h4>
              </div>
              <div className="flex flex-col gap-4">
                <div className="border-slate-200 p-5 py-6 bg-[#18434185]">
                  <p className='text-md text-slate-300 font-medium'>Change your Life Through Education</p>
                  <p className='text-lg text-orange-400 font-medium'>Februay 29, 2023</p>
                </div>
                <div className="border-slate-200 p-5 py-6 bg-[#18434185]">
                  <p className='text-md text-slate-300 font-medium'>Donate your woolens this <br /> winter</p>
                  <p className='text-lg text-orange-400 font-medium'>Februay 29, 2023</p>
                </div>
              </div>
            </div>
            <div className="fourth ml-3">
              <div className="">
                <h4 className='text-2xl font-medium text-white my-10'>Social Media Feed</h4>
              </div>
              <FooterSliders />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-10 bg-[#10625f]">
        <p className='text-slate-300 text-md font-medium'>© 2022 Copyright by <span className='font-bold'>AidHumans</span></p>
      </div>
    </div>
  );
};

export default Footer;