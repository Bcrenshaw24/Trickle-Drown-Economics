import React from 'react'
import InfoCard from './cards/InfoCard'
import { useGame } from './GameContext'

const News = () => {
  const { state } = useGame()
  return (
    <div className='flex w-screen h-screen'>
      {state.news.map(article => ( 
        <InfoCard title={article.title} description={article.description} effects={article.effects}/>
      ) )}
      
    </div>
  )
}

export default News
