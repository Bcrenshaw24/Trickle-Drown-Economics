import { url } from 'inspector'
import React from 'react'

const TeamCard = () => {
    type Card = { 
        photo: string, 
        name: string,
        title: string, 
        effects: {[key: string]: string}
    }
    const card: Card = {
      photo: '/people/Carl.jpg',
      name: "Carl",
      title: "Public Reception",
      effects: {"Blank": "Blank"}
    }
  return (
    <div className="flex flex-col w-1/5 h-1/4">
        <div className='flex border-3 border-sky-600 '>
            {/* Image */}
            <img src={card.photo} alt="Person" className="w-1/2"/>
            {/* Info */}
            <div className='flex-col w-full'>
                <div className='text-center flex justify-center'>Name: {card.name}</div>
                <div className='text-center'>{card.effects["Blank"]}</div>
            </div>
            
         </div>
          {/* Options */}
            <div className="flex border-3 border-sky-600 border-t-0 rounded-l"> 
                <button className="w-1/2  bg-green-600 hover:bg-green-800 hover:cursor-pointer">Hire</button>
                <button className="w-1/2 bg-red-600 hover:bg-red-800 hover:cursor-pointer">Fire</button>
            </div>
    </div>
  )
}

export default TeamCard
