import React from 'react'

const InfoCard = ({title, description, effects}: {title: string, description: string, effects: {}}) => {
    type Card = {  
        title: string,
        description: string, 
        effects: {}
    }
    const card: Card = {
      title: title,
      description: description,
      effects: effects
    }
  return (
    <div className="flex bg-blue-900 justify-center border-4 border-l-0 border-sky-600 w-1/6 h-1/6">
      <div> 
        <div className='flex justify-center border-b-4 border-sky-600'>
          {card.title}
        </div>
        <div className='flex justify-center mt-2 text-xs text-center'>
          {card.description}
        </div>

      </div>

      
    </div>
  )
}

export default InfoCard
