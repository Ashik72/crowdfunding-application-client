import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo2 from '../../assets/logo/logo.png';
import logo from '../../assets/logo/logo1.png';

const Navbar = () => {
    //   window.addEventListener("scroll", () => {
    //     var navigation = document.querySelector(".nav");
    //     navigation.classList.toggle("sticky", window.scrollY > 0);
    //   });

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

    // toggle class
    const [isActive, setIsActive] = useState(false);

    const toggleClass = () => {
        setIsActive(!isActive);
    };

    const navItems = (
        <>
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/about" className="nav-link">
                    About
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/gallery" className="nav-link">
                    gallery
                </Link>
            </li>

            <li className="nav-item">
                <Link to="/blogs" className="nav-link">
                    Blogs
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/dashboard/user" className="nav-link">
                    Dashboard
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/signup" className="nav-link">
                    Register
                </Link>
            </li>

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
                            <span></span>
                            <span></span>
                            <span></span>
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
