import React from 'react'
import EventCard from './cards/EventCard'
import { events } from './articles'
import { useState, useEffect } from 'react'
import { useGame } from './GameContext'

type Article = { 
    title: string, 
    description: string, 
    effects: {[key: string]: number}
} 


const Events = () => {
  const { state, dispatch } = useGame();


  const handleSubmit = (index: number) => {
    const event = state.events[index];
    dispatch({
      type: "APPLY_EVENT",
      payload: {
        moneyChange: event.effects.Money ?? 0,
        popularityChange: event.effects.Popularity ?? 0
      }
    })
    dispatch({
      type: "REMOVE_EVENT",
      payload: { index }
    })
  }

  const handleDecline = (index: number) => {
    dispatch({
      type: "REMOVE_EVENT",
      payload: { index }
    })
  }

  return (
    <div className='flex w-full h-screen'>
       {state.events.map((article, index) => (
        <EventCard
          key={index}
          title={article.title}
          description={article.description}
          handleSubmit={() => handleSubmit(index)}
          handleDecline={() => handleDecline(index)}
        />
      ))}
    </div>
  )
}

export default Events
