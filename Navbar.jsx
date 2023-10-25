import React, { useState } from 'react'
import logo from '../assets/logo.jfif'
import {RxHamburgerMenu} from 'react-icons/rx'
import Hamnav from '../misc/Hamnav'
const Header = () => {
    const [hamClick, setHamClick] = useState(false)
  return (
    <div className='container' id='navbar'>
        <div className='logo'>
            <img className='logo-img' src={logo}/>
            <span className='logo-name'>Aakash Chaudhary</span>
        </div>
        <div className='nav-lists'>
            <ul className='nav-list'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Projects</a></li>
                <li><a href='#'>Skills</a></li>
                <li><a href='#'>Contact</a></li>
            </ul>
        </div>
        <div className='ham' onClick={() => setHamClick(!hamClick)}>
            <RxHamburgerMenu />
        </div>

        {
            hamClick && <Hamnav/>
        }
    </div>
  )
}

export default Header
