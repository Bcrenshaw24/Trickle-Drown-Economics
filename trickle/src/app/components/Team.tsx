import React from 'react'
import TeamCard from './cards/TeamCard'

const Team = () => {
  return (
    <div className='m-3 flex flex-col'>
      <div className='flex-col'>
        <div className='flex flex-col text-2xl border-b-4 w-screen border-white-600'>Public Relations</div>
        <div className='mt-1 gap-2 overflow-y-auto flex w-screen'>
          <TeamCard />
          <TeamCard />
        </div>
        <div className='flex mt-3 flex-col text-2xl border-b-4 w-screen border-white-600'>Seceratary</div>
        <div className='mt-1 gap-2 overflow-y-auto flex w-screen'>
          <TeamCard />
          <TeamCard />
        </div> 
        <div className='flex mt-3 flex-col text-2xl border-b-4 w-screen border-white-600'>Vice President</div>
        <div className='mt-1 gap-2 overflow-y-auto flex w-screen'>
          <TeamCard />
          <TeamCard />
        </div>
      </div>
    </div>
  )
}

export default Team
