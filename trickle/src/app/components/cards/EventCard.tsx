import React from 'react'

const EventCard = ({title, description, handleSubmit, handleDecline}: {title: string, description: string, handleSubmit: void, handleDecline: void}) => {
    type Event = {  
        title: string,
        description: string, 
    }
    const event: Event = {
      title: title,
      description: description
    }
  return (
    <div className="flex justify-center border-4 border-l-0 border-sky-600 w-1/6 h-1/6">
      <div> 
        <div className='flex justify-center border-b-4 border-sky-600'>
          {event.title}
        </div>
        <div className='flex justify-center mt-2 text-xs text-center'>
          {event.description}
        </div>
        <div className='flex justify-center w-full mt-2'>
          <button onClick={() => handleSubmit} className='bg-green-500 rounded-2xl px-2 cursor-pointer hover:bg-green-800'>Select</button>
          <button onClick={() => handleDecline} className='bg-red-600 rounded-2xl ml-2 px-2 cursor-pointer hover:bg-red-800'>Decline</button>
        </div>
      </div>

      
    </div>
  )
}

export default EventCard
