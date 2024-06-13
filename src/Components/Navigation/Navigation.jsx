import React from 'react'
import './Navigation.css'
import logo from '../../assets/logo.png'

const Navigation = () => {
    return (
        <nav>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li>Contact us</li>
            </ul>
        </nav>
    )
}

export default Navigation