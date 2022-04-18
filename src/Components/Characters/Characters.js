import React from 'react'
import './Characters.css'

export default function Characters() {
  return (
    <div className='characters-container'>
      <div className="characters-title">
        <h1>Characters</h1>
      </div>
      <div className="character warrior">
        <img src={process.env.PUBLIC_URL + "/images/char-images/warrior.png"} alt="" />
      </div>
      <div className="character hero">
        <img src={process.env.PUBLIC_URL + "/images/char-images/hero.png"} alt="" />
      </div>
      <div className="character samurai">
        <img src={process.env.PUBLIC_URL + "/images/char-images/samurai.png"} alt="" />
        <div className="samurai-text">
          <h1>Samurai</h1>
          <p>A capable fighter from the distant Land of Reeds.</p>
          <p>Handy with katana and longbows.</p>
        </div>
      </div>
      <div className="character wretch">
        <img src={process.env.PUBLIC_URL + "/images/char-images/wretch.png"} alt="" />
      </div>
      <div className="character prophet">
        <img src={process.env.PUBLIC_URL + "/images/char-images/prophet.png"} alt="" />
      </div>
    </div>
  )
}
