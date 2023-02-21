import React from 'react';
import './Volunteer.css'
import second from '../asstes/team-1-1.jpg'

const Volunteer = () => {
  return (
    <section className='w-4/5 mx-auto'>
      <div className="">
        <div className="text-center">
          <h4 className='font-2xl text-orange-500 font-medium mb-3'>EXPERT TEAM</h4>
          <h2 className='font-semibold text-4xl text-black mb-7'>Meet Our Volunteer Team.</h2>
        </div>
      </div>
      <div className="volunteerCard">
        <div className="volunteerBox">
          <div className="volunteerItems max-w-[300px] h-[400px] flex flex-col items-center justify-center">
            <div className="volunteerImage ">
              <img className='max-w-full' src={second} alt="" />
            </div>
            <article className='transition-all duration-500 text-center w-[350px]'>
              <div className="vounteerName text-center">
                <h4 className='text-2xl font-bold mt-5'>Rakibul Vai</h4>
                <p className='text-slate-500 font-semibold text-lg my-2'>Ceo</p>
              </div>
              <div className="volunteerSocialConnections flex justify-center">
                <i className="w-10 h-10 border m-2 mb-6 border-slate-500 flex items-center justify-center  fa-brands fa-twitter"></i>
                <i className="w-10 h-10 border m-2 mb-6 border-slate-500 flex items-center justify-center  fa-brands fa-facebook"></i>
                <i className="w-10 h-10 border m-2 mb-6 border-slate-500 flex items-center justify-center  fa-brands fa-twitter"></i>
                <i className="w-10 h-10 border m-2 mb-6 border-slate-500 flex items-center justify-center  fa-brands fa-facebook"></i>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteer;