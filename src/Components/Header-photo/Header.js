import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
                <video autoPlay loop muted src={process.env.PUBLIC_URL + "images/header-animated.webm"}></video>
        </div>
    );
}

export default Header;
