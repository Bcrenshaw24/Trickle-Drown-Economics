import { url } from 'inspector'
import React from 'react'
import { Person } from './people'
import { useGame } from '../GameContext'

const TeamCard = ({member}: {member: Person}) => {
  const { state, dispatch } = useGame()
    type Card = { 
        photo: string, 
        name: string,
        effects: {[key: string]: number},
        req: {[key: string]: number}
    }
    const card: Card = {
      photo: member.photo,
      name: member.name,
      effects: member.effects,
      req: member.requirements
    }

    const handleHire = () => { 
     
      dispatch({type: "ADD_TEAM", payload: {member}})
    } 
    const handleFire = () => { 
      dispatch({type: "REMOVE_TEAM", payload: {member}})
    }
  return (
    <div className="flex flex-col w-1/5 h-1/4">
        <div className='flex border-3 border-sky-600 '>
            {/* Image */}
            <img src={card.photo} alt="Person" className="w-1/2"/>
            {/* Info */}
            <div className='flex-col w-full'>
                <div className='text-center flex justify-center'>Name: {card.name}</div>
                { "Money" in card.effects &&
                <div className='text-center'>Money: +{card.effects["Money"]}</div> 
                }
                { "Popularity" in card.effects &&
                <div className='text-center'>Popularity: +{card.effects["Popularity"]}</div> 
                }
                { "Money" in card.req &&
                <div className='text-center mt-3'>Requirements: you need {card.req["Money"]}k </div> 
                }
                { "Popularity" in card.req &&
                <div className='text-center mt-3'>Requirements: you need {card.req["Popularity"]} popularity</div> 
                }
            </div>
            
         </div>
          {/* Options */}
            <div className="flex border-3 border-sky-600 border-t-0 rounded-l"> 
                <button onClick={handleHire} className="w-1/2  bg-green-600 hover:bg-green-800 hover:cursor-pointer">Hire</button>
                <button onClick={handleFire} className="w-1/2 bg-red-600 hover:bg-red-800 hover:cursor-pointer">Fire</button>
            </div>
    </div>
  )
}

export default TeamCard
