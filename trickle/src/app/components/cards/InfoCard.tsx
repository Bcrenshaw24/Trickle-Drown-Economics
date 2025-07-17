import React from 'react'

const InfoCard = ({tabName}: {tabName: string}) => {
    type Card = {  
        title: string,
        description: string, 
        effects: {}
    }
    const card: Card = {
      title: "Raise Taxes",
      description: "You decided to raise the taxes on the state",
      effects: {"Popularity": -5, "Money": 10000}
    }
  return (
    <div className="flex justify-center border-4 border-l-0 border-sky-600 w-1/6 h-1/6">
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
