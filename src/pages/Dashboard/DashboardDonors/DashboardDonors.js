import React from 'react';
import murad from "../../../assets/images/1.jpg"
const DashboardDonors = () => {
  return (
    <div className='w-full p-6 bg-gray-200 '>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl font-serif font-semibold text-gray-800'>Donors</h2>
        <p><span className='font-semibold text-gray-800 font-serif'>Totall donors:</span> 2</p>
      </div>
      <div className="">
        <table className="w-full">
          <thead className='bg-gradient-to-t from-[#040e77] to-[#5252f8] border border-gray-400 rounded-full'>
            <tr className='text-gray-200'>
              <th className='text-left'></th>
              <th className='text-left'>Donor</th>
              <th className='text-left'>Lifetime Donations</th>
              <th className='text-left'>Last Donation</th>
              <th className='text-left'>Last Donation Date</th>
              <th className='text-left'>Donor Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-[#1521a54d] border-b-2 border-gray-500'>
              <td className='text-sm font-semibold text-gray-700'><img className='ml-2 w-10 h-10 rounded-full object-cover' src={murad} alt="" /></td>
              <td className='text-gray-700 font-semibold py-3'>Murad Wahid</td>
              <td className='text-sm text-gray-700'>$300</td>
              <td className='text-sm text-gray-700'>$300</td>
              <td className='text-sm text-gray-700'>14 january 2023</td>
              <td className='text-sm text-gray-700'>Regular</td>
            </tr>
            <tr className='bg-[#1521a54d] border-b-2 border-gray-500'>
              <td className='text-sm font-semibold text-gray-700'><img className='ml-2 w-10 h-10 rounded-full object-cover' src={murad} alt="" /></td>
              <td className='text-gray-700 font-semibold py-3'>Murad Wahid</td>
              <td className='text-sm text-gray-700'>$300</td>
              <td className='text-sm text-gray-700'>$300</td>
              <td className='text-sm text-gray-700'>14 january 2023</td>
              <td className='text-sm text-gray-700'>Regular</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardDonors;