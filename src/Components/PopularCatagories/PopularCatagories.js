import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './PopularCatagories.css'

// const book = <i class="fa-solid fa-user"></i>
const PopularCatagories = () => {
    return (
        <div className="md:max-w-[85%] mx-auto mb-28">
            <h1 className='text-5xl font-semibold py-14'>Popular Categories</h1>
            <div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-2'>
                <Link className="custm-icon w-full" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="500">
                    <span className='span flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-around bg-white p-7 text-center lg:text-start md:text-start'>
                        <i className="fa-solid cursor-pointer fa-book-open text-6xl text-[#07847f]"></i>
                        <div className="font-semibold">
                            <h1>Education</h1>
                            <p>School, Collage & University</p>
                        </div>
                    </span>
                </Link>
                <Link className="custm-icon w-full" data-aos="zoom-in-down" data-aos-easing="linear" data-aos-duration="500">
                    <span className='span flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-around bg-white p-7 text-center lg:text-start md:text-start'>
                        <i className="text-6xl text-[#07847f] cursor-pointer fa-solid fa-stethoscope"></i>
                        <div className="font-semibold">
                            <h1>Medical & Health</h1>
                            <p>School, Collage & University</p>
                        </div>
                    </span>
                </Link>
                <Link className="custm-icon w-full" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="500">
                    <span className='span flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-around bg-white p-7 text-center lg:text-start md:text-start'>
                        <i className="text-6xl text-[#07847f] cursor-pointer fa-solid fa-shirt"></i>
                        <div className="font-semibold">
                            <h1>Clothes</h1>
                            <p>School, Collage & University</p>
                        </div>
                    </span>
                </Link>
                <Link className="custm-icon w-full" data-aos="zoom-in-right" data-aos-easing="linear" data-aos-duration="500">
                    <span className='span flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-around bg-white p-7 text-center lg:text-start md:text-start'>
                        <i className="text-6xl text-[#07847f] cursor-pointer fa-solid fa-video"></i>
                        <div className="font-semibold">
                            <h1>Video & Films</h1>
                            <p>School, Collage & University</p>
                        </div>
                    </span>
                </Link>
                <Link className="custm-icon w-full" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="500">
                    <span className='span flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-around bg-white p-7 text-center lg:text-start md:text-start'>
                        <i className="text-6xl text-[#07847f] cursor-pointer fa-solid fa-head-side-virus"></i>
                        <div className="font-semibold">
                            <h1>Technology</h1>
                            <p>School, Collage & University</p>
                        </div>
                    </span>
                </Link>
                <Link className="custm-icon w-full" data-aos="zoom-in-left" data-aos-easing="linear" data-aos-duration="500">
                    <span className='span flex flex-col sm:flex-row md:flex-row lg:flex-row items-center justify-around bg-white p-7 text-center lg:text-start md:text-start'>
                        <i className="text-6xl text-[#07847f] cursor-pointer fa-solid fa-bowl-food"></i>
                        <div className="font-semibold">
                            <h1>Organic Foods</h1>
                            <p>School, Collage & University</p>
                        </div>
                    </span>
                </Link>
            </div>
        </div>

    );
};

export default PopularCatagories;