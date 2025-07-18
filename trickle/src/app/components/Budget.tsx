import React from 'react'
import { useState } from 'react'
import { useGame } from './GameContext'


const Budget = () => {
  const { state, dispatch } = useGame()

  
  return (
     <div className="flex flex-col items-center p-4">
      <h1 className='text-2xl'>Taxes</h1>
      <input type="range" min="0" max="5000" value={state.budget.Taxes} onChange={(e) => dispatch({type:"EDIT_BUDGET", payload:{category: "Taxes", amount: (Number(e.target.value))} })} className="w-64 accent-blue-500" />
      <span className="mt-2 text-white">${state.budget.Taxes}</span>
      <h1 className='text-2xl mt-4'>Infrastructure</h1>
      <input type="range" min="0" max="5000" value={state.budget.Infra} onChange={(e) => dispatch({type:"EDIT_BUDGET", payload:{category: "Infra", amount: Number(e.target.value)} })} className="w-64 accent-blue-500" />
      <span className="mt-2 text-white">${state.budget.Infra}</span>
      <h1 className='text-2xl mt-4'>Education</h1>
      <input type="range" min="0" max="5000" value={state.budget.Edu} onChange={(e) => dispatch({type:"EDIT_BUDGET", payload:{category: "Edu", amount: Number(e.target.value)} })} className="w-64 accent-blue-500" />
      <span className="mt-2 text-white">${state.budget.Edu}</span>
      <h1 className='text-2xl mt-4'>Millitary</h1>
      <input type="range" min="0" max="5000" value={state.budget.Mil} onChange={(e) => dispatch({type:"EDIT_BUDGET", payload:{category: "Mil", amount: Number(e.target.value)} })} className="w-64 accent-blue-500" />
      <span className="mt-2 text-white">${state.budget.Mil}</span>
    </div>
  )
}

export default Budget
