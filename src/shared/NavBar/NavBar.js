import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className='bg-[#379237] relative'>
      <div className='w-4/5 mx-auto flex justify-between items-center text-[18px] font-semibold py-6'>
        <div className=''>
          <h2 className='text-3xl text-gray-200 font-bold'>Logo</h2>
        </div>
        <ul className='flex items-center text-gray-200'>
          <li className='px-5 border-r-2 hover:bg-white hover:text-[#379237] hover:rounded-full transition-all duration-200'><Link to="home">Home</Link></li>
          <li className='border-r-2 px-5 hover:bg-white hover:text-[#379237] hover:rounded-full transition-all duration-200'><Link to="signin">Login</Link></li>
          <li className='border-r-2 px-5 hover:bg-white hover:text-[#379237] hover:rounded-full transition-all duration-200'><Link to="signup">Register</Link></li>
          <li className='border-r-2 px-5 hover:bg-white hover:text-[#379237] hover:rounded-full transition-all duration-200'><Link to="/dashboard/user">Dashboard</Link></li>
          {
            search ? <li className='px-5 text-[18px] cursor-pointer'><i onClick={() => setSearch(!search)} className="fa-solid fa-xmark"></i></li> : <li onClick={() => setSearch(!search)} className='px-5'><i className="fa-solid fa-magnifying-glass cursor-pointer"></i></li> 
          }
          <li className='bg-slate-500 text-[14px] uppercase py-2 px-4 bg-gradient-to-t from-[#58bd0b] to-[#a3af1b] rounded-[6px] cursor-pointer'>Donate us</li>
        </ul>
      </div>
      <form className={`w-2/5 absolute bg-[#82CD47] px-2 rounded-md right-52 transition-opacity duration-300 ${search ? "opacity-100":"opacity-0"}`}>
        <div className='relative w-full my-3'>
          <input type="text" className='w-full py-2 px-4 rounded-full outline-[#82CD47]' placeholder='Search' />
          <i onClick={() => setSearch(!search)} className="fa-solid fa-xmark absolute right-[20px] top-[4px] text-[#439207] hover:bg-gray-200 p-2 rounded-full cursor-pointer"></i>
        </div>
      </form>
    </div>
  );
};

export default NavBar;