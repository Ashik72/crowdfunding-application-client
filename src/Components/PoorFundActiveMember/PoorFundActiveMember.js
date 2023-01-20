import React from 'react';
import './PoorFundActiveMember.css'
const PoorFundActiveMember = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mt-28 text-white'>
            <div className="p-14 text-center flex justify-center bg-[#02a95c] border custom border-r">
                <i class="fa-solid fa-handshake-angle text-6xl p-[18px] custom-transform"></i>
                <div className="">
                    <h2 className='text-5xl font-bold pb-[20px] custom-transform'>598K</h2>
                    <p className='text-lg font-semibold custom-transform'>// POOR PEOPLE</p>
                </div>
            </div>
            <div className="p-14 text-center flex justify-center bg-[#02a95c] border border-r">
                <i class="fa-solid fa-hands-bound text-6xl p-[18px] custom-transform"></i>
                <div className="">
                    <h2 className='text-5xl font-bold pb-[20px] custom-transform'>879M</h2>
                    <p className='text-lg font-semibold custom-transform'>// FUND RAISED</p>
                </div>
            </div>
            <div className="p-14 text-center flex justify-center bg-[#02a95c] border border-r">
                <i class="fa-solid fa-people-roof text-6xl p-[18px] custom-transform"></i>
                <div className="">
                    <h2 className='text-5xl font-bold pb-[20px] custom-transform'>998+</h2>
                    <p className='text-lg font-semibold custom-transform'>// ACTIVE MEMBER</p>
                </div>
            </div>
        </div>
    );
};

export default PoorFundActiveMember;