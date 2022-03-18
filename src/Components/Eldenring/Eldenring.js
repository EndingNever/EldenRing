import React from 'react'
import './Eldenring.css'

export default function Eldenring() {
  return (
    <div className='elden-container'>
      <div className="eldenring-text"></div> {/*ELDEN RING Banner text */}
      <div className="elden-ring-body-container">
        <div className="elden-ring-body-text">
          <div className="elden-ring-body-banner">
            <h1>ELDEN RING</h1>
            <p>
              <span className="gold-text">Release Date:</span> 25/02/2022 <span className="gold-text">Genres:</span> RPG <span className="gold-text">Developer:</span> FromSoftware, Inc
            </p>
            <p><u>Press kit</u></p>
          </div>
          <div className="golden-order-container">
            <div className='golden-order-text'>
              <h1>The Golden Order has been broken.</h1>
              <br />
              <p className='go-text'>Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</p>
              <p className='go-text'>In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.</p>
              <p className='go-text'>Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.</p>
              <p className='go-text'>And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.</p>
              <p className='go-text' id='elden-lord-bold'>And become the Elden Lord.</p>
            </div>
            <div className="golden-order-video">
              video
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
