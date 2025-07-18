import React from 'react'
import Screen from '../components/Screen'
import { GameProvider } from '../components/GameContext'

const page = () => {
  return (
    <div className="flex bg-[url('/background.jpg')] bg-cover bg-center h-screen w-screen items-center justify-center">
      <GameProvider>
        <Screen /> 
      </GameProvider>
        

    </div>
  )
}

export default page
