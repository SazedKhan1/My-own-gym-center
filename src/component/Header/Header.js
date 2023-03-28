import React from 'react';
import logo from '../../favicon.png'
import './Header.css'
const Header = () => {
    return (
        <div className='Header'>
            <img src={logo} alt="" srcset="" />
            <h2>Wel<span>co</span>me To My <span>GYM Cen</span>ter</h2>
        </div>
    );
};

export default Header;