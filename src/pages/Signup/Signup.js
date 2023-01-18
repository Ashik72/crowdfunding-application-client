import React from 'react';
import { Link } from 'react-router-dom';
import reImg from "../../assets/images/register.jpg"
import "../Signin/Signin.css"
const Signup = () => {
  return (
    <div className='w-4/5 mx-auto flex pt-20'>
      <div className='flex gap-6 items-center'>
        <div className='w-[50%]'>
          <img className='w-full lg:block md:block hidden' src={reImg} alt="" />
        </div>
        <div className='w-[50%]'>
          <h3 className='text-2xl font-semibold text-gray-800 uppercase'>Register</h3>
          <form className='lg:w-4/5'>
            <div className='txt_field'>
              <input className='text-gray-700 font-semibold' type="text" required />
              <span></span>
              <label className='font-serif'>Full name</label>
            </div>
            <div className='txt_field'>
              <input className='text-gray-700 font-semibold' type="text" required />
              <span></span>
              <label className='font-serif'>Email</label>
            </div>
            <div className='txt_field'>
              <input className='text-gray-700 font-semibold' type="text" required />
              <span></span>
              <label className='font-serif'>Password</label>
            </div>
            <div className='txt_field'>
              <input className='text-gray-700 font-semibold' type="password" required />
              <span></span>
              <label className='font-serif'>Confirm password</label>
            </div>
            <input className='bg-[#B37127] py-2 w-full rounded-lg text-xl text-gray-200 uppercase font-serif transition-all duration-200 hover:bg-[#da8f3b] cursor-pointer mt-7' type="submit" value="register" />

            <p className='mt-4 text-center text-gray-800'>Already have an account? <Link to="/signin" className='underline font-semibold text-[#B37127]'>Login</Link></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;