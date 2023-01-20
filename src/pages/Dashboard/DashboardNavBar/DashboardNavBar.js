import React from 'react';
import logo from "../../../assets/logo/logo3.png"
import image from "../../../assets/images/1.jpg"
import { Link } from 'react-router-dom';
const DashboardNavBar = ({ dashboardToggle, setDashboardToggle }) => {
  return (
    <div className='bg-gray-50 py-2 flex justify-between items-center px-5'>
      <i onClick={() => setDashboardToggle(!dashboardToggle)} className="fa-solid fa-bars text-xl text-black lg:hidden block"></i>
      <Link to="/"><img className='h-16' src={logo} alt="" /></Link>
      <h1 className='text-xl font-semibold font-serif text-gray-800 tracking-[1px]'>Welcome to our Dashboard</h1>
      <div className='flex gap-4 items-center'>
        <p className='font-semibold font-serif'>MURAD WAHID</p>
        <img className='w-10 h-10 rounded-full object-cover' src={image} alt="" />
      </div>
    </div>
  );
};

export default DashboardNavBar;