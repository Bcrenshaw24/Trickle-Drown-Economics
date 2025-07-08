import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'
const myFont = localFont({ src: '../fonts/Pixel-Game.otf', weight: "400" })

const Menu = () => {
  return (
    <div className='flex flex-col justify-start items-center w-screen h-screen'> 
        <div className={`text-shadow-white text-2xl ${myFont.className} text-5xl`}>Trickle-Drown Economics</div>
        <div className={`text-shadow-white mt-8 ${myFont.className} text-3xl block`}>Press Start To Play</div>
        <Link href={"/game"} className={` flex text-amber-900 items-center justify-center mt-8 text-5xl ${myFont.className} rounded-4xl w-1/8 h-1/9 bg-yellow-400 hover:bg-yellow-500`}>Start</Link>
    </div>
  )
}

export default Menu
