import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'January',
    uv: 4000,
    donate: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 3000,
    donate: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 2000,
    donate: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 2780,
    donate: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    donate: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    uv: 2390,
    donate: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    donate: 4300,
    amt: 2100,
  },
  {
    name: 'August',
    uv: 3490,
    donate: 4300,
    amt: 2100,
  },
  {
    name: 'September',
    uv: 3490,
    donate: 4300,
    amt: 2100,
  },
  {
    name: 'Octobar',
    uv: 3490,
    donate: 4300,
    amt: 2100,
  },
  {
    name: 'November',
    uv: 3490,
    donate: 4300,
    amt: 2100,
  },
  {
    name: 'December',
    uv: 3490,
    donate: 4300,
    amt: 2100,
  },
];
const DashboardOverview = () => {
  return (
    <div className='bg-gray-200 w-full p-6 overflow-y-scroll'>
      <div className='w-[90%] mx-auto mb-5'>
        <h1 className='text-xl text-gray-700 font-bold mb-6'>Dashboard</h1>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
          <div>
            <p className='text-gray-700 text-[17px] font-semibold font-serif'>Totall Donations</p>
            <p className='bg-white px-2 py-2 rounded-md shadow font-semibold text-gray-700 w-32'>$9600</p>
          </div>
          <div>
            <p className='text-gray-700 text-[17px] font-semibold font-serif'>Totall Donors</p>
            <p className='bg-white px-2 py-2 rounded-md shadow font-semibold text-gray-700 w-32'>200</p>
          </div>
          <div>
            <p className='text-gray-700 text-[17px] font-semibold font-serif'>Average Donation</p>
            <p className='bg-white px-2 py-2 rounded-md shadow font-semibold text-gray-700 w-32'>$300</p>
          </div>
        </div>
      </div>
      <span className='w-[90%] mx-auto ml-32 z-0'>
        <ResponsiveContainer width="90%" height="60%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="donate" fill="#8884d8" background={{ fill: '#fff' }} />
          </BarChart>
        </ResponsiveContainer>
      </span>
    </div>
  );
};

export default DashboardOverview;