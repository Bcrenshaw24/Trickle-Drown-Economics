import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1', value: 0 },
];

const pop = [
  { name: '1', value: 75 },
];

const Charts = () => {
  return (
    <>
    <h1 className='w-full mt-4 text-2xl flex justify-center'>Profits</h1>
    <div className="ml-3 mt-2 w-full max-w-2xl h-64 bg-gray-900 p-4 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
         <XAxis dataKey="name" stroke="#94a3b8" label={{ value: "Month", position: "insideBottom", offset: -5 }} />
         <YAxis stroke="#94a3b8" label={{ value: "Profit", angle: -90, position: "insideLeft"}} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <h1 className='w-full mt-4 text-2xl flex justify-center'>Popularity</h1>
    <div className="ml-5 mt-2 w-full max-w-2xl h-64 bg-gray-900 p-4 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={pop}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
         <XAxis dataKey="name" stroke="#94a3b8" label={{ value: "Month", position: "insideBottom", offset: -5 }} />
         <YAxis stroke="#94a3b8" label={{ value: "Popularity", angle: -90, position: "insideLeft"}} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  );
}

export default Charts
