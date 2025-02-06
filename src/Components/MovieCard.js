import React from 'react'
import { IMG_URL } from '../Utils/Constant'

const MovieCard = ({poster_path}) => {
    
  return (
      <div className="transform transition-all duration-300 hover:scale-110 hover:z-10  overflow-x-scroll">
      <div className="relative w-36 md:w-48 rounded-lg overflow-hidden shadow-lg">
        <img
          src={IMG_URL + poster_path}
          alt="Movie_card"
          className="w-full h-full object-cover rounded-lg hover:brightness-75 transition-all"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-3 text-white">
            <div className="flex space-x-2 mb-2">
              <button className="p-1 bg-white rounded-full hover:bg-gray-200">
                <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6V4z" />
                </svg>
              </button>
              <button className="p-1 border border-gray-300 rounded-full hover:border-white">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard 