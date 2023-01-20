import React from 'react';

const ContactUs = () => {
  return (
    <div className='bg-[#d2f3ec] w-[450px] mx-auto p-10 my-20'>
      <form>
        <div className='flex gap-4 mb-4'>
          <input type="text" className='w-full shadow px-3 py-1 outline-[#15C8A0]' placeholder='First name' />
          <input type="text" className='w-full  shadow px-3 py-1 outline-[#15C8A0]' placeholder='Last name' />
        </div>
        <input className='w-full mb-4  shadow px-3 py-1 outline-[#15C8A0]' type="text" placeholder='Email' />
        <input type="text" className='w-full mb-4  shadow px-3 py-1 outline-[#15C8A0]' placeholder='Phone number' />
        <textarea name="" className='w-full h-24 px-3 pt-2 shadow outline-[#15C8A0]' placeholder='Message'></textarea>
        <input className='bg-[#15C8A0] py-2 px-4 text-[17px] font-semibold text-gray-200 mt-4' type="submit" value="Send message" />
      </form>
    </div>
  );
};

export default ContactUs;