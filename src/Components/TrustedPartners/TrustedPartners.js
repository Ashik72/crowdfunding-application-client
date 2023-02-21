import React from 'react';
import './TrustedPartners.css'

const TrustedPartners = () => {
    return (
        <div className='w-[90%] mx-auto mb-[30px]'>
            <div className="my-10 mx-3">
                <p className='text-[#07847f] text-2xl font-bold'>OUR PARTNERS</p>
                <h1 className='text-4xl font-bold'>Trusted Partners</h1>
            </div>
            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                <div className="py-10 text-center font-bold text-5xl text-[#07847f] bg-[#e5f6ee] cursor-pointer border-2 border-green-500">
                    <p className='transformEffect'>Natural</p>
                </div>
                <div className="py-10 text-center font-bold text-5xl text-[#07847f] bg-[#e5f6ee] cursor-pointer">
                    <p className='transformEffect'>Pure.</p>
                </div>
                <div className="py-10 text-center font-bold text-5xl text-[#07847f] bg-[#e5f6ee] cursor-pointer border-2 border-green-500">
                    <p className='transformEffect'>Vivo</p>
                </div>
                <div className="py-10 text-center font-bold text-5xl text-[#07847f] bg-[#e5f6ee] cursor-pointer">
                    <p className='transformEffect'>Travel</p>
                </div>
                <div className="py-10 text-center font-bold text-5xl text-[#07847f] bg-[#e5f6ee] cursor-pointer">
                    <p className='transformEffect'>Daraz</p>
                </div>
                <div className="py-10 text-center font-bold text-5xl text-[#07847f] bg-[#e5f6ee] cursor-pointer border-2 border-green-500">
                    <p className='transformEffect'>Uber</p>
                </div>
                <div className="py-10 text-center font-bold text-5xl text-[#07847f] bg-[#e5f6ee] cursor-pointer">
                    <p className='transformEffect'>Pathaw</p>
                </div>
                <div className="py-10 text-center font-bold text-5xl text-[#07847f] bg-[#e5f6ee] cursor-pointer border-2 border-green-500">
                    <p className='transformEffect'>Fresh</p>
                </div>
            </div>
        </div>
    );
};

export default TrustedPartners;