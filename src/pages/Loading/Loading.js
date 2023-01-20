import React from 'react';

const Loading = () => {
    return (
        <div className="flex justify-center items-center text-black">
            <p className='text-2xl font-thin'>L</p>
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-8 border-dashed rounded-full border-green-700"></div>
            <p className='text-2xl font-thin'>ading...</p>
        </div>
    );
};

export default Loading;