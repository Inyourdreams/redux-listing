import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import img from './search.png'

export default function Header() {
  return (
    <div>
      <nav className="flex items-center p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <button>
            <img
              alt="navigation-arrow"
              width="30px"
              height="30px"
              src="https://www.materialui.co/materialIcons/navigation/arrow_back_white_192x192.png"
            />
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow" />
          <SearchBar />
        </div>
        <img width="20px" height="20px" src={img} alt="search-icon" />
      </nav>
    </div>
  )
}
