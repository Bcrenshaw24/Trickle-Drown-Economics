import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useReducer } from "react";
import { useGame } from './GameContext';

const Charts = () => {
  const { state } = useGame()
  const profit = state.money.map((value, index) => ({
  month: index + 1,
  money: value,
}));
  const pop = state.popularity.map((value, index) => ({
  month: index + 1,
  popularity: value,
}));

  return (
    <>
    <h1 className='w-full mt-4 text-2xl flex justify-center'>{state.money.length}</h1>
    <div className="ml-3 mt-2 w-full max-w-2xl h-64 bg-gray-900 p-4 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={profit}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
         <XAxis dataKey="month" stroke="#94a3b8" label={{ value: "Month", position: "insideBottom", offset: -5 }} />
         <YAxis stroke="#94a3b8" label={{ value: "Profit", angle: -90, position: "insideLeft"}} />
          <Tooltip />
          <Line type="monotone" dataKey="money" stroke="#0ea5e9" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <h1 className='w-full mt-4 text-2xl flex justify-center'>Popularity</h1>
    <div className="ml-5 mt-2 w-full max-w-2xl h-64 bg-gray-900 p-4 rounded-xl">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={pop}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
         <XAxis dataKey="month" stroke="#94a3b8" label={{ value: "Month", position: "insideBottom", offset: -5 }} />
         <YAxis stroke="#94a3b8" label={{ value: "Popularity", angle: -90, position: "insideLeft"}} />
          <Tooltip />
          <Line type="monotone" dataKey="popularity" stroke="#0ea5e9" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </>
  );
}

export default Charts
