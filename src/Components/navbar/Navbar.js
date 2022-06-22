import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (

    <div className='navbar-container'>
      <div className="first-two-container">
        <div className="bandai-brand">
          {/* Bandai Logo here */}
        </div>
        <div className="navigation-bar">
          {/* Navbar goes here */}
        </div>
      </div>
      <div className="search-container">
        <img src={process.env.PUBLIC_URL + "/images/navigation/icons8-search.svg"} alt="" />
        <img src={process.env.PUBLIC_URL + '/images/navigation/user-svgrepo-com.svg'} className='search-container-item' id="user"></img>
      </div>
    </div>
  )
}
