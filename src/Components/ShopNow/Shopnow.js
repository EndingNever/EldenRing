import React from 'react'
import './Shopnow.css'

export default function Shopnow() {
    return (
        <div className='shopnow-container'>
            <div className="top-row">
                <div className="shopnow">
                    <svg xmlns="http://www.w3.org/2000/svg" fillOpacity={0.4} width="100" height="100" viewBox="0 0 20 20"><path d="M15.894 4.079h-1.735a4.116 4.116 0 00-8.232.075v.834c0 .262.213.475.476.475h4.17a.717.717 0 00.767-.667.717.717 0 00-.717-.717H7.362a2.727 2.727 0 012.727-2.661 2.686 2.686 0 012.636 2.677v.934c0 .263.213.476.475.476h1.735l.717 13.052H4.435l.717-13.761a.717.717 0 00-1.435 0L3 19.516a.475.475 0 00.475.484h13.136a.475.475 0 00.476-.475l-.743-14.971a.475.475 0 00-.45-.475z" fill="#FFF" fill-rule="evenodd" /></svg>
                    <h1>Shop Now</h1>
                </div>
                <div className="country">
                    Select your country: <span className='select-country'>United States</span>
                </div>
            </div>
            <div className="platform-row">
                <p>select your platform</p>
            </div>
        </div> 
    )
}
