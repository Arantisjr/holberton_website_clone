import React from 'react'
import './Navbar.scss'
import hoberton from '../assets/hoberton.png'
import menu_button from '../assets/menu.png'

const Navbar = () => {
 
    return (
        <>
        <header>
            <div className="header_content">
                <h1><a href="#"><img src={hoberton} alt="logo" /></a></h1>
                <div className="link_div">
                    <ul>
                        <li className='nav_links'><a href="#">Programs</a></li>
                        <li className='nav_links'><a href="#">Methodologies</a></li>
                        <li className='nav_links'><a href="#">Campuses</a></li>
                    </ul>
                </div>
                <button className='apply_button'><a href="">Apply</a></button>
            </div>
            {/* <button className='menu_button'>
                <img src={menu_button} alt="menu" />
            </button> */}
        </header>
        </>
    )
}

export default Navbar