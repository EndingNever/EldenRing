import React from 'react'
import './Eldenring.css'
import { xbox, ps5, xbone, ps4, pc } from '../consoles-svg/consoles'

export default function Eldenring() {
  const videoTrailer = "https://www.youtube.com/watch?v=qqiC88f9ogU&t=2s"

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
              <div className="awards">
                <img src={process.env.PUBLIC_URL + "/images/Awards.png"} alt="" />
              </div>
              <div className="console-container">
                <div className="date-text">
                  <p>25/02/2022</p>
                </div>
                <div className="consoles">
                  <div className="console-logo xbox-series">
                    {xbox}
                  </div>
                  <div className="console-logo ps5">
                    {ps5}
                  </div>
                  <div className="console-logo xbox-one">
                    {xbone}
                  </div>
                  <div className="console-logo ps4">
                    {ps4}
                  </div>
                  <div className="console-logo pc">
                    {pc}
                  </div>
                </div>
              </div>
              <div className='shop-now-container'>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path d="M15.894 4.079h-1.735a4.116 4.116 0 00-8.232.075v.834c0 .262.213.475.476.475h4.17a.717.717 0 00.767-.667.717.717 0 00-.717-.717H7.362a2.727 2.727 0 012.727-2.661 2.686 2.686 0 012.636 2.677v.934c0 .263.213.476.475.476h1.735l.717 13.052H4.435l.717-13.761a.717.717 0 00-1.435 0L3 19.516a.475.475 0 00.475.484h13.136a.475.475 0 00.476-.475l-.743-14.971a.475.475 0 00-.45-.475z" fill="#FFF" fill-rule="evenodd" /></svg>
                  Shop Now
                </button>
              </div>
            </div>
            <div className="golden-order-video">
              <div className="video-border">
                <img src={process.env.PUBLIC_URL + "/images/border.png"} alt="" />
              </div>
              <video autoPlay loop muted src={process.env.PUBLIC_URL + "/images/launch-trailer.webm"} frameborder="0" allow='autoPlay; loop'></video>
              <div className="video-border bottom-border">
                <img src={process.env.PUBLIC_URL + "/images/border.png"} alt="" />
              </div>
            </div>
          </div>
          <div className="ratings">
            <img src={process.env.PUBLIC_URL + "/images/Ratings.jpg"} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
