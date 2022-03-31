import React from 'react'
import './Navbar.css'

export default function Navbar() {
  const photos = [
    {
      url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoGames.svg'
    },
    {
      url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoStore.svg'
    },
    {
      url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoNews.svg'
    },
    {
      url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoEpic.svg'
    },
    {
      url: 'https://en.bandainamcoent.eu/themes/custom/bne_main/dist/images/logoSupport.svg'
    },
  ]


  return (

    <div className='navbar-container'>
      <div className="first-two-container">
        <div className="brand-logo">
          {/* Bandai */}
        </div>
        <div className="navigation-bar">
          <img src={photos[0].url} id='games' className='navigation-item'></img>
          <img src={photos[1].url} id='store' className='navigation-item'></img>
          <img src={photos[2].url} id='news' className='navigation-item'></img>
          <img src={photos[3].url} id='ep!c' className='navigation-item'></img>
          <img src={photos[4].url} id='support' className='navigation-item'></img>
        </div>
      </div>
      <div className="search-container">
        <input className='search-container-item' type="text" placeholder='Search' />
        <img src='/images/navigation/email-svgrepo-com.svg' className='search-container-item' id='mail'></img>
        <span id="hr"></span>
        <img src='/images/navigation/user-svgrepo-com.svg' className='search-container-item' id="user"></img>
      </div>
    </div>
  )
}
