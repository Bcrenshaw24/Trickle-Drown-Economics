"use client"
import React from 'react'
import { useState } from 'react'
import localFont from 'next/font/local'
import { RxHamburgerMenu } from "react-icons/rx";
import News from './News';
import Budget from './Budget';
import Charts from './Charts'
import Events from './Events' 
import Team from './Team'


const myFont = localFont({ src: '../fonts/Pop.ttf', weight: "400" })

const Screen = () => {
    const[month, setMonth] = useState(1)
    const[money, setMoney] = useState(20000)

    const tabs = {"News": <News/>, "Budget": <Budget/>, "Charts": <Charts/>, "Events": <Events/>, "Team": <Team/>}
    const[isOpen, setIsOpen] = useState(false) 
    const[activeView, setActiveView] = useState<keyof typeof tabs>("News")


  return (
    <div className={`flex flex-col justify-start w-3/4 h-4/5 bg-sky-950 border-4 border-sky-700 rounded-2xl ${myFont.className} `}> 
        <div className='flex w-auto border-b-2 border-b-gray-900 px-3 py-3'> 
            <div className=' text-4xl flex flex-1/3'>
            <button onClick={() => setIsOpen(!isOpen)} className='hover:cursor-pointer text-blue-300'>
             <RxHamburgerMenu />
            </button>
            <p className='px-3'>Month: {month}</p>
            </div>
            <div className='text-4xl'>${money}</div>
        </div> 
        { isOpen &&
        <div className="flex flex-col justify-start bg-sky-950 border-r-4 border-sky-600 text-2xl w-1/3 h-full rounded">
            {Object.keys(tabs).map(item => (

              <button key={item} onClick={() => setActiveView(item as keyof typeof tabs)} className={`${item === activeView ? "text-red-600 " : "text-sky-400 hover:text-sky-600"} flex justify-start ml-3 hover:cursor-pointer border-b-4 border-sky-600`}>{item}</button> 
            )
        ) 
    }
        

        </div> 
        }
        <div> 
        {tabs[activeView]}
        </div>
    </div>
  )
}

export default Screen
