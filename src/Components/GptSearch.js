import React from 'react'
import GptMoviesSuggestions from './GptMoviesSuggestions'
import GptSearchbar from './GptSearchbar'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute inset-0 -z-10">
        <img className="w-full h-full object-cover" src="/Netbg.jpg" alt="Netflix Background" />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
        <GptMoviesSuggestions/>
        <GptSearchbar/>
    </div>
  )
}

export default GptSearch