import React from 'react'
import TeamCard from './cards/TeamCard'

const Team = () => {
  return (
    <div className='m-3 flex flex-col'>
      <div className='flex-col'>
        <div className='flex flex-col text-2xl border-b-4 w-screen border-white-600'>Public Relations</div>
        <div className='mt-1 gap-2 overflow-y-auto flex w-screen'>
          <TeamCard photo="/people/Carl.jpg" name="Carl" effects={{"Popularity": 8}} req="Free!" />
          <TeamCard photo='/people/Mike.jpg' name="Mike" effects={{"Popularity": 15}} req="You need 5k" />
          <TeamCard photo='/people/Walter.jpg' name="Walter White" effects={{"Popularity": 20}} req="You need 10k" />
        </div>
        <div className='flex mt-3 flex-col text-2xl border-b-4 w-screen border-white-600'>Seceratary</div>
        <div className='mt-1 gap-2 overflow-y-auto flex w-screen'>
         <TeamCard photo='/people/Susan.jpg' name="Susan" effects={{"Money": 2000}} req="You need 50 popularity" />
         <TeamCard photo='/people/Emma.jpg' name="Emma" effects={{"Money": 6000}} req="You need 70 popularity" />
         <TeamCard photo='/people/Susan.jpg' name="Susan" effects={{"Money": 10000}} req="You need 85 popularity" />
        </div> 
        <div className='flex mt-3 flex-col text-2xl border-b-4 w-screen border-white-600'>Vice President</div>
        <div className='mt-1 gap-2 overflow-y-auto flex w-screen'>
        <TeamCard photo='/people/Skeleton.jpg' name="Mr. Skeleton" effects={{"Popularity": 30}} req="You need $20,000" />
        </div>
      </div>
    </div>
  )
}

export default Team
