import React, { useEffect, useState } from 'react'
import './Navigation.css'
import logo from '../../assets/logo.png'

const Navigation = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => [
            window.scrollY > 50 ? setSticky(true) : setSticky(false)
        ])
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-navigation' : ''}`}>
            <img src={logo} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>Program</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact us</button></li>
            </ul>
        </nav>
    )
}

export default Navigation