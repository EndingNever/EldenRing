import React from 'react'
import './Overlay.css'

export default function Overlay() {
  return (
    <div className='overlay-container'>
      <div className='navigation-dots'>
        <span className="dot selected"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="helper-icons-container">
        <div className="helper-icons mail-icon"><img src={process.env.PUBLIC_URL + "/images/navigation/email-gold.svg"} alt="" /></div>
        <div className="helper-icons video-icon"><img src={process.env.PUBLIC_URL + "/images/video-icon.svg"} alt="" /></div>
        <div className="helper-icons shopping-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M15.894 4.079h-1.735a4.116 4.116 0 00-8.232.075v.834c0 .262.213.475.476.475h4.17a.717.717 0 00.767-.667.717.717 0 00-.717-.717H7.362a2.727 2.727 0 012.727-2.661 2.686 2.686 0 012.636 2.677v.934c0 .263.213.476.475.476h1.735l.717 13.052H4.435l.717-13.761a.717.717 0 00-1.435 0L3 19.516a.475.475 0 00.475.484h13.136a.475.475 0 00.476-.475l-.743-14.971a.475.475 0 00-.45-.475z" fill="#FFF" fillRule="evenodd" /></svg>
        </div>
      </div>
    </div>
  )
}
