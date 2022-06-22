import React from 'react'
import './Navbar.css'

export default function Navbar() {
  // const photos = [
  //   {
  //     url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoGames.svg'
  //   },
  //   {
  //     url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoStore.svg'
  //   },
  //   {
  //     url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoNews.svg'
  //   },
  //   {
  //     url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoEpic.svg'
  //   },
  //   {
  //     url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoSupport.svg'
  //   },
  // ]


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
