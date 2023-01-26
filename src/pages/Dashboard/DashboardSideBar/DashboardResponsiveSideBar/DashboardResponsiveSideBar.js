import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DashboardResponsiveSideBar = () => {
  return (
    <div className='bg-[#010424] z-50 w-20 relative lg:hidden block'>
      <ul className='grid gap-6 p-3'>
        <Link to="/"><i className="fa-solid fa-house text-xl text-gray-200"></i>
        </Link>
        <li>
          <NavLink to="overview" className={({ isActive }) =>
            isActive
              ? "text-gray-200 transition-all duration-300 mt-7 ml-8 border-8 border-gray-200 pl-4 bg-[#010424] p-3 rounded-full"
              : "text-gray-200 transition-all duration-300 px-2"
          }><i className="fa-solid fa-chart-line text-xl"></i></NavLink>
        </li>
        <li>
          <NavLink to="user" className={({ isActive }) =>
            isActive
              ? "text-gray-200 transition-all duration-300 mt-7 ml-8 border-8 border-gray-200 pl-4 bg-[#010424] p-3 rounded-full"
              : "text-gray-200 transition-all duration-300 px-2"
          }><i className="fa-solid fa-user-tie text-xl"></i></NavLink>
        </li>
        <li>
          <NavLink to="activity" className={({ isActive }) =>
            isActive
              ? "text-gray-200 transition-all duration-300 mt-7 ml-8 border-8 border-gray-200 bg-[#010424] pr-0 p-3 rounded-full"
              : "text-gray-200 transition-all duration-300 px-2"
          }><i className="fa-solid fa-hand-holding-dollar mr-2 text-xl"></i></NavLink>
        </li>
        <li>
          <NavLink to="donors" className={({ isActive }) =>
            isActive
              ? "text-gray-200 transition-all duration-300 mt-7 ml-8 border-8 border-gray-200 pr-0 bg-[#010424] p-3 rounded-full"
              : "text-gray-200 transition-all duration-300 px-2"
          }><i className="fa-solid fa-user-group mr-2 text-xl"></i></NavLink>
        </li>
        <li>
          <NavLink to="admin" className={({ isActive }) =>
            isActive
              ? "text-gray-200 transition-all duration-300 mt-7 ml-8 border-8 border-gray-200 pr-2 bg-[#010424] p-3 rounded-full"
              : "text-gray-200 transition-all duration-300 px-2"
          }><i className="fa-solid fa-users-gear text-xl"></i></NavLink>
        </li>
        {/* <li className='absolute text-red-700 -right-12 border-8 border-white pl-4 bg-slate-500 p-3 rounded-full ml-4'>Home</li> */}
      </ul>
    </div>
  );
};

export default DashboardResponsiveSideBar;