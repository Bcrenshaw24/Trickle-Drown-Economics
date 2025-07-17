import React from 'react'
import { useState } from 'react'

const Budget = () => {
  const [value, setValue] = useState(50)
  return (
     <div className="flex flex-col items-center p-4">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-64 accent-blue-500"
      />
      <span className="mt-2 text-white">{value}</span>
    </div>
  )
}

export default Budget
