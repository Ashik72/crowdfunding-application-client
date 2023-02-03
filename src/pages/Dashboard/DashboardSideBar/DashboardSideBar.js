import React, { useContext, useEffect, useState } from 'react';
import {Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const DashboardSideBar = ({ dashboardToggle, setDashboardToggle }) => {
  const { user, logOut } = useContext(AuthContext)
  const [currentUser, setCurrentUser] = useState();
  const navigate=useNavigate()
  const [dropdown, setDropdown] = useState(false);
  const handleDashboardLogOut = () => {
    logOut()
    navigate('/')

  }

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then(res => res.json())
      .then(data => { setCurrentUser(data) })
  }, [user?.email])

  return (
    <div className={`w-[300px] h-full lg:block hidden py-4 px-6 bg-[#010424] text-gray-300 font-semibold tracking-[1px] font-serif transition-all duration-500 ${dashboardToggle ? 'lg:ml-0 ml-[-300px]' : "ml-0"} lg:static absolute z-50`}>
      <div className='flex justify-between items-center transition-all duration-200 py-1 px-3 mb-2 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] rounded-full'>
        <Link to="/"><i className="fa-solid fa-house text-xl"></i>
        <span className='text-[18px] ml-1'>HOME</span>
        </Link>
        <i onClick={()=>setDashboardToggle(!dashboardToggle)} className="fa-solid fa-xmark text-2xl -mt-4 lg:hidden block"></i>
      </div>
      {
        user?.uid && <div className='flex gap-3 items-center my-2 ml-2'>
          <img className='rounded-full w-10 h-10' src={user?.photoURL} alt="" />
          <div>
            <p className='text-[14px]'>{user?.displayName}</p>
            <p className='text-[11px] capitalize'>{currentUser?.role}</p>
          </div>
        </div>
      }
      <ul className='grid gap-3 transition-all duration-300'>

        <NavLink to="overview" className={({ isActive}) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          
          <p>
            <i className="fa-solid fa-chart-line mr-2"></i>
            <span>Overview</span>
          </p>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink>
        <NavLink to="user" className={({ isActive}) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          
          <p>
            <i className="fa-solid fa-user-tie mr-2"></i>
            <span className=''>Murad Wahid</span>
          </p>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink>
        <NavLink onClick={() => setDropdown(!dropdown)} className="flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] hover:text-[#d9d9db] py-1 px-2 rounded-full">
          <p className='text-gray-200'>
            <i className="fa-solid fa-hand-holding-dollar mr-2"></i>
            <span className=''>Donations</span>
          </p>
          {dropdown ? <i className="fa-solid fa-chevron-down ml-2 text-gray-200"></i>:
            <i className="fa-solid fa-chevron-right text-gray-200"></i>}
        </NavLink>
        {
          dropdown && <>
            <NavLink to="activity" className={({ isActive}) =>
              isActive
                ? "ml-8 flex justify-between items-center transition-all duration-300 bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] text-[#d9d9db] py-1 px-2 rounded-full"
                : "ml-8 flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d]hover:text-[#d9d9db] py-1 px-2 rounded-full"
            }>Avtivity</NavLink>
            <NavLink to="bankdonors" className={({ isActive}) =>
              isActive
                ? "ml-8 flex justify-between items-center transition-all duration-300 bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] text-[#d9d9db] py-1 px-2 rounded-full"
                : "ml-8 flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] hover:text-[#d9d9db] py-1 px-2 rounded-full"
            }>Bank Donation</NavLink>
            <NavLink to="bkash" className={({ isActive }) =>
              isActive
                ? "ml-8 flex justify-between items-center transition-all duration-300 bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] text-[#d9d9db] py-1 px-2 rounded-full"
                : "ml-8 flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] hover:text-[#d9d9db] py-1 px-2 rounded-full"
            }>Bkash Donation</NavLink>
          </>
        }
        <NavLink to="donors" className={({ isActive, isPending }) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          <span>
            <i className="fa-solid fa-user-group mr-2"></i>
            <span>Donors</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink>
        <NavLink to="posts" className={({ isActive, isPending }) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          <span>
            <i className="fa-solid fa-blog mr-2"></i>
            <span>Blog Post</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink>
        <NavLink to="admin" className={({ isActive, isPending }) =>
          isActive
            ? "flex justify-between items-center transition-all duration-300 bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] text-[#d9d9db] py-1 px-2 rounded-full"
            : "flex justify-between items-center transition-all duration-300 hover:bg-gradient-to-t from-[#414edf] via-[#282f6e] to-[#09148d] hover:text-[#d9d9db] py-1 px-2 rounded-full"
        }>
          <span>
            <i className="fa-solid fa-users-gear mr-2"></i>
            <span>Admin</span>
          </span>
          <i className="fa-solid fa-chevron-right ml-2"></i>
        </NavLink>
        <li onClick={handleDashboardLogOut} className='flex items-center gap-2 ml-2 mt-3 cursor-pointer hover:text-red-700'>
          <i className="fa-solid fa-arrow-up-from-bracket text-red-700 text-[20px]"></i>
          <p>Log Out</p>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSideBar;