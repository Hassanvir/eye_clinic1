import React, { useEffect, useState } from 'react'
import { navLinks } from '.'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className="inner">
                <a href="#hero" className="logo">
                    DR QUAN
                </a>
                <nav className='desktop'>
                    <ul>{navLinks.map(({ link, name }) => (
                        <li key={name} className='group'>
                            <a href={link}>
                                <span>{name}</span>
                                <span className="underline" />
                            </a>
                        </li>
                    ))}</ul>
                </nav>
                    <Link to="/appointments">
                        <div className="inner">
                            <span>Book Appointment -</span>
                        </div>
                    </Link>
            </div>
        </header>
    )
}

export default Navbar