import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo2 from "../../assets/logo/logo.png";
import logo from "../../assets/logo/logo1.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Bars3Icon } from "@heroicons/react/24/solid";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [className, setClassName] = useState("");
  const [logoHidden, setLogoHidden] = useState("");
  const [logoShow, setLogoShow] = useState("");
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    if (window.scrollY > 0) {
      setClassName("sticky");
    } else {
      setClassName("");
    }
  }

  //   logo show
  useEffect(() => {
    window.addEventListener("scroll", handleScrollLogoShow);
    return () => {
      window.removeEventListener("scroll", handleScrollLogoShow);
    };
  }, []);

  function handleScrollLogoShow() {
    if (window.scrollY > 0) {
      setLogoShow("logo-show");
    } else {
      setLogoShow("");
    }
  }

  //   logo hidden
  useEffect(() => {
    window.addEventListener("scroll", handleScrollLogoHidden);
    return () => {
      window.removeEventListener("scroll", handleScrollLogoHidden);
    };
  }, []);

  function handleScrollLogoHidden() {
    if (window.scrollY > 0) {
      setLogoHidden("logo-hidden");
    } else {
      setLogoHidden("");
    }
  }

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  const navItems = (
    <>
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "nav-link border-b-2 border-[#07847f] pb-1"
              : "nav-link pb-1 hover:border-b-2 hover:border-[#07847f]"
          }
        >
          Home
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "nav-link border-b-2 border-[#07847f] pb-1"
              : "nav-link pb-1 hover:border-b-2 hover:border-[#07847f]"
          }
        >
          About
        </NavLink>
      </li>

      <li className="nav-item cursor-pointer navbar-dropdown-events">
        <NavLink
          to="/pages"
          className={({ isActive }) =>
            isActive
              ? "nav-link border-b-2 border-[#07847f] pb-1"
              : "nav-link pb-1 hover:border-b-2 hover:border-[#07847f]"
          }
        >
          pages
        </NavLink>
        <i className="fa-solid fa-chevron-down ml-2 text-[#07847f]"></i>

        {/* dropdown menu start */}
        <ul className="absolute w-60 px-10 pl-0 z-50 navbar-events-dropdown rounded-2xl">
          <li className="transition-all duration-300 hover:pl-4">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "nav-link border-b-2 pb-1" : "nav-link"
              }
            >
              <span className="text-white">Gallery</span>
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:pl-4">
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "nav-link border-b-2 pb-1" : "nav-link"
              }
            >
              <span className="text-white">blogs</span>
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:pl-4">
            <NavLink
              to="/naturalDisaster"
              className={({ isActive }) =>
                isActive ? "nav-link border-b-2 pb-1" : "nav-link"
              }
            >
              <span className="text-white">Natural Disaster</span>
            </NavLink>
          </li>
        </ul>
        {/* dropdown menu end */}
      </li>
      <li className="nav-item cursor-pointer navbar-dropdown-events">
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive
              ? "nav-link border-b-2 border-[#07847f] pb-1"
              : "nav-link pb-1 hover:border-b-2 hover:border-[#07847f]"
          }
        >
          Events
        </NavLink>
        <i className="fa-solid fa-chevron-down ml-2 text-[#07847f]"></i>

        {/* dropdown menu start */}
        <ul className="absolute w-56 rounded-2xl px-3 pl-0 z-50 navbar-events-dropdown">
          <li className="transition-all duration-300 hover:pl-4">
            <NavLink
              to="/ngosignup"
              className={({ isActive }) =>
                isActive ? "nav-link border-b-2 pb-1" : "nav-link"
              }
            >
              <span className="text-white">ngo-signup</span>
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:pl-4">
            <NavLink
              to="/campaign"
              className={({ isActive }) =>
                isActive ? "nav-link border-b-2 pb-1" : "nav-link"
              }
            >
              <span className="text-white">Start-Campaign</span>
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:pl-4">
            <NavLink
              to="/our-events"
              className={({ isActive }) =>
                isActive ? "nav-link border-b-2 pb-1" : "nav-link"
              }
            >
              <span className="text-white">Our Events</span>
            </NavLink>
          </li>
          <li className="transition-all duration-300 hover:pl-4">
            <NavLink
              to="/causes"
              className={({ isActive }) =>
                isActive ? "nav-link border-b-2 pb-1" : "nav-link"
              }
            >
              <span className="text-white">Causes</span>
            </NavLink>
          </li>
        </ul>
        {/* dropdown menu end */}
      </li>
      <li className="nav-item">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "nav-link border-b-2 border-[#07847f] pb-1"
              : "nav-link pb-1 hover:border-b-2 hover:border-[#07847f]"
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/videoChat"
          className={({ isActive }) =>
            isActive
              ? "nav-link border-b-2 border-[#07847f] pb-1"
              : "nav-link pb-1"
          }
        >
          Meeting
        </NavLink>
      </li>
      {user?.uid ? (
        <>
          <li className="nav-item">
            <NavLink
              onClick={logOut}
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "nav-link border-b-2 border-[#07847f] pb-1"
                  : "nav-link pb-1 hover:border-b-2 hover:border-[#07847f]"
              }
            >
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li className="nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "nav-link border-b-2 border-[#07847f] pb-1"
                  : "nav-link pb-1 hover:border-b-2 hover:border-[#07847f]"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? "nav-link border-b-2 border-[#07847f] pb-1"
                  : "nav-link pb-1 hover:border-b-2 hover:border-[#07847f]"
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}

      <li className="nav-item flex justify-center items-center ">
        <Link to="/donate" className="nav-link">
          <div className="nav-donate-btn font-semibold">Donate now</div>
        </Link>
      </li>
    </>
  );

  return (
    <div className="relative">
      <div>
        {/* <!-- menu overly --> */}
        <div class="overly-color"></div>
        <div className={`navigation  w-full ${className}`}>
          <div className="navbar relative flex justify-between max-w-[90%] mx-auto ">
            <Link to="/" className="navbar-brand">
              <div className="">
                <img
                  src={logo2}
                  className={`w-[20%] lg:w-[14%]  absolute top-0 left-0 ${logoHidden}`}
                  alt=""
                />
                <img
                  src={logo}
                  className={`w-[20%] lg:w-[14%]  absolute top-0 left-0 ${logoShow}`}
                  alt=""
                />
              </div>
            </Link>

            <div className="md:block hidden">
              <ul className="navbar-nav flex items-center justify-between">
                {navItems}
              </ul>
            </div>

            <div className="md:hidden block">
              <button
                onClick={() => setToggle(!toggle)}
                className="text-white click-menu-btn"
              >
                <span className="">
                  <Bars3Icon className="h-6 w-6" />
                </span>
              </button>
              <ul
                className={`my-class navbar-nav flex items-start justify-between flex-col text-black off-canvas-menu px-7 relative  ${
                  toggle ? "off-canvas-canvas-menu-active" : ""
                }`}
              >
                <i
                  onClick={() => setToggle(!toggle)}
                  className="fa-solid fa-xmark text-white text-lg absolute right-6 top-6"
                ></i>
                <div>
                  <span className=" w-full flex justify-between items-center">
                    <img src={logo} className="max-w-[150px]" alt="" />
                  </span>
                  {/* <!-- menu close --> */}
                  <div className="text-gray-200 grid gap-2">{navItems}</div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
