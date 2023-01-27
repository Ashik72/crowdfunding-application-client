import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo2 from '../../assets/logo/logo.png';
import logo from '../../assets/logo/logo1.png';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Navbar = () => {
    //   window.addEventListener("scroll", () => {
    //     var navigation = document.querySelector(".nav");
    //     navigation.classList.toggle("sticky", window.scrollY > 0);
    //   });
    const {logOut,user } = useContext(AuthContext);
    const [className, setClassName] = useState("");
    const [logoHidden, setLogoHidden] = useState("");
    const [logoShow, setLogoShow] = useState("");

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
                <NavLink to="/" className={({ isActive }) =>
                    isActive
                        ? "nav-link border-b-2 border-[#02A95C] pb-1"
                        : "nav-link pb-1"
                }>
                    Home
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) =>
                    isActive
                        ? "nav-link border-b-2 border-[#02A95C] pb-1"
                        : "nav-link pb-1"
                }>
                    About
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/gallery" className={({ isActive }) =>
                    isActive
                        ? "nav-link border-b-2 border-[#02A95C] pb-1"
                        : "nav-link pb-1"
                }>
                    gallery
                </NavLink>
            </li>

            <li className="nav-item">
                <NavLink to="/blogs" className={({ isActive }) =>
                    isActive
                        ? "nav-link border-b-2 border-[#02A95C] pb-1"
                        : "nav-link pb-1"
                }>
                    Blogs
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/dashboard/user" className={({ isActive }) =>
                    isActive
                        ? "nav-link border-b-2 border-[#02A95C] pb-1"
                        : "nav-link pb-1"
                }>
                    Dashboard
                </NavLink>
            </li>
            {
                user?.uid ?<>
                    <li className="nav-item">
                        <NavLink onClick={logOut} to="/register" className={({ isActive }) =>
                            isActive
                                ? "nav-link border-b-2 border-[#02A95C] pb-1"
                                : "nav-link pb-1"
                        }>
                            Logout
                        </NavLink>
                    </li>
                </> :<><li className="nav-item">
                    <NavLink to="/login" className={({ isActive }) =>
                        isActive
                            ? "nav-link border-b-2 border-[#02A95C] pb-1"
                            : "nav-link pb-1"
                    }>
                        Login
                    </NavLink>
                </li>
                    <li className="nav-item">
                        <NavLink to="/register" className={({ isActive }) =>
                            isActive
                                ? "nav-link border-b-2 border-[#02A95C] pb-1"
                                : "nav-link pb-1"
                        }>
                            Register
                        </NavLink>
                    </li></>
            }

            <li className="nav-item flex justify-center items-center">
                <Link to="/donate" className="nav-link">
                    <div className="nav-donate-btn font-semibold">Donate now</div>
                </Link>
            </li>
        </>
    );

    return (
        <div>
            {/* <!-- menu overly --> */}
            <div class="overly-color"></div>
            <div className={`navigation  w-full ${className}`}>
                <div className="navbar relative flex justify-between max-w-[90%] mx-auto ">
                    <Link to="/" className="navbar-brand">
                        <div className="">
                            <img
                                src={logo2}
                                className={`w-[20%] absolute top-0 left-0 ${logoHidden}`}
                                alt=""
                            />
                            <img
                                src={logo}
                                className={`w-[20%] absolute top-0 left-0 ${logoShow}`}
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
                        <button onClick={toggleClass} className="text-white click-menu-btn">
                            <span className="span"></span>
                            <span className="span"></span>
                            <span className="span"></span>
                        </button>
                        <ul
                            className={`my-class navbar-nav flex items-start justify-between flex-col text-black off-canvas-menu px-7 ${isActive ? "off-canvas-canvas-menu-active" : ""
                                }`}
                        >
                            <div>
                                <span>
                                    <img
                                        src="https://i.ibb.co/SfKRDgh/logo2.png"
                                        className="max-w-[150px]"
                                        alt=""
                                    />
                                </span>
                                {/* <!-- menu close --> */}
                                <div class="menu-close  flex justify-center items-center">
                                    <FaTimes />
                                </div>
                                <div className="off-canvas-menu-item">{navItems}</div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
