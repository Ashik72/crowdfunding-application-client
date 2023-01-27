import React, { useContext } from 'react';
import logo from "../../../assets/logo/logo1.png"
import image from "../../../assets/images/1.jpg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
const DashboardNavBar = ({ dashboardToggle, setDashboardToggle }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className='bg-[#010424] py-2 flex justify-between items-center px-5 border-b-[4px] border-[#5764ec]'>
      {/* <i onClick={() => setDashboardToggle(!dashboardToggle)} className="fa-solid fa-bars text-xl text-black lg:hidden block"></i> */}
      <Link className='md:block hidden' to="/"><img className='h-16' src={logo} alt="" /></Link>
      <h1 className='text-xl lg:block hidden font-semibold font-serif text-gray-200 tracking-[1px]'>Welcome to our Dashboard</h1>
      <h1 className='text-xl lg:hidden block font-semibold font-serif text-gray-200 tracking-[1px]'>Dashboard</h1>
      <div className='flex gap-4 items-center'>
        <p className='font-semibold font-serif md:block hidden text-gray-200'>{user?.displayName}</p>
        <img className='w-10 h-10 rounded-full object-cover' src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default DashboardNavBar;