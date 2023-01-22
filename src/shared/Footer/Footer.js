import React from 'react';
import logo2 from '../../assets/logo/logo1.png';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#001d23] text-base-content">
            <div>
                <img className='w-[75%]' src={logo2} alt="" />
                <p className='text-lg font-semibold text-slate-100'>"Your help will save
                    <br />thousands of families"</p>
            </div>
            <div>
                <span className="text-2xl text-slate-100 font-semibold">Our Projects</span>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Medical & Health</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Educations</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Technology</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Web Devlopment</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Food & Clothes</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Video & Movies</a>
            </div>
            <div>
                <span className="text-2xl text-slate-100 font-semibold">Support</span>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Privacy Policy</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Conditions</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Company</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Faq & Terms</a>
                <a className="link link-hover text-lg text-slate-500 font-semibold">Contact Us</a>
            </div>
            <div>
                <span className="text-2xl text-slate-100 font-semibold">Contafct Us</span>
                <div className="">
                    <div className="flex items-center text-4xl mb-5">
                        <i class="fa-solid fa-phone custom-radius text-white"></i>
                        <div className="text-lg text-slate-500 font-semibold">
                            <p className='text-'>Phone Number</p>
                            <p className='text-white cursor-pointer'>+00801777-777777</p>
                        </div>
                    </div>
                    <div className="flex items-center text-4xl mb-5">
                    <i class="fa-regular fa-envelope custom-radius text-white"></i>
                        <div className="text-lg text-slate-500 font-semibold">
                            <p className='text-'>Email Address</p>
                            <p className='text-white cursor-pointer'>rkrocky2018@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center text-4xl">
                    <i class="fa-regular fa-envelope custom-radius text-white"></i>
                        <div className="text-lg text-slate-500 font-semibold">
                            <p className='text-'>Location</p>
                            <p className='text-white cursor-pointer'>78 Panchagarh Debiganj, <br /> Bangladesh</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;