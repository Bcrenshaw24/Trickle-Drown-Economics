import React from 'react'
import { useState } from 'react'

const Budget = () => {
  const [house, setHouse] = useState(2500)
  const [infa, setInfa] = useState(2500)
  const [edu, setEdu] = useState(2500)
  const [mil, setMil] = useState(2500)
  return (
     <div className="flex flex-col items-center p-4">
      <h1 className='text-2xl'>Housing</h1>
      <input type="range" min="0" max="5000" value={house} onChange={(e) => setHouse(Number(e.target.value))} className="w-64 accent-blue-500" />
      <span className="mt-2 text-white">${house}</span>
      <h1 className='text-2xl mt-4'>Infrastructure</h1>
      <input type="range" min="0" max="5000" value={infa} onChange={(e) => setInfa(Number(e.target.value))} className="w-64 accent-blue-500" />
      <span className="mt-2 text-white">${infa}</span>
      <h1 className='text-2xl mt-4'>Education</h1>
      <input type="range" min="0" max="5000" value={edu} onChange={(e) => setEdu(Number(e.target.value))} className="w-64 accent-blue-500" />
      <span className="mt-2 text-white">${edu}</span>
      <h1 className='text-2xl mt-4'>Millitary</h1>
      <input type="range" min="0" max="5000" value={mil} onChange={(e) => setMil(Number(e.target.value))} className="w-64 accent-blue-500" />
      <span className="mt-2 text-white">${mil}</span>
    </div>
  )
}

export default Budget
