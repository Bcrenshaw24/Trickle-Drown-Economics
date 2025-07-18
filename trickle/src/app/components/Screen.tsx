"use client"
import localFont from 'next/font/local'
import { RxHamburgerMenu } from "react-icons/rx";
import News from './News';
import Budget from './Budget';
import Charts from './Charts'
import Events from './Events' 
import Team from './Team'
import { FaArrowRight } from "react-icons/fa";
import React, { useState } from 'react';
import { useGame } from './GameContext';



const myFont = localFont({ src: '../fonts/Pop.ttf', weight: "400" })
const Screen = () => {
   const { state, dispatch } = useGame()

    const tabs = {"News": <News/>, "Budget": <Budget/>, "Charts": <Charts/>, "Events": <Events/>, "Team": <Team/>}
    const[isOpen, setIsOpen] = useState(false) 
    const[activeView, setActiveView] = useState<keyof typeof tabs>("News")


  return (
    <>
    {/* Game Screen */}
    <div className={`flex flex-col w-[1200px] h-[600px] bg-sky-950 border-4 border-sky-700 rounded-2xl ${myFont.className} `}> 
        {/* Stats */}
        <div className='text-4xl h-1/8 flex w-auto border-b-2 border-b-gray-900 px-3 py-3'> 
         <button onClick={() => setIsOpen(!isOpen)} className='hover:cursor-pointer text-blue-300'>
             <RxHamburgerMenu />
            </button>
            <div className='gap-8 justify-center w-full flex'>
            <p className='px-3'>Month: {state.month}</p>
             <div>Popularity: {state.popularity.at(-1)}</div>
            <div>Money: ${state.money.at(-1)}</div>
             </div>
        </div> 
        {/* Menu */}
        <div className='flex overflow-auto'>
        <div className={`${isOpen ? "flex-col overflow-auto flex-grow flex-1/2 justify-start bg-sky-950 border-r-4 border-sky-600 text-2xl w-1/3 rounded" : "hidden"}`}>
            {Object.keys(tabs).map(item => (
              <button key={item} onClick={() => setActiveView(item as keyof typeof tabs)} className={`${item === activeView ? "text-red-600 " : "text-sky-400 hover:text-sky-600"} flex py-2 justify-start ml-3 hover:cursor-pointer border-b-4 border-sky-600`}>{item}</button> 
              )
              ) 
              }
          </div> 
          {/* Active Tab */}
          <div className='flex-grow overflow-auto w-full'> 
          {tabs[activeView]}
          </div>
        </div>
      <div className='flex flex-grow justify-end items-center px-3 h-1/8 text-2xl bg-blue-900 rounded-l'>
      <button onClick={() => dispatch({type: "ADVANCE_MONTH"})}  className='bg-blue-950 size-8 flex justify-center items-center hover:cursor-pointer rounded-xl'><FaArrowRight /></button>
      </div>
    </div>
    </>
  )
}

export default Screen
