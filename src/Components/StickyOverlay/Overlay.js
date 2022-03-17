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
          <div className="helper-icons"></div>
          <div className="helper-icons"></div>
          <div className="helper-icons last-helper-icon"></div>
        </div>
    </div>
  )
}
