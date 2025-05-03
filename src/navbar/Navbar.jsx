import React from 'react'
import './Navbar.scss'
import hoberton from '../assets/hoberton.png'

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
        </header>
        </>
    )
}

export default Navbar