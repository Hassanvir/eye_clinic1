import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const AppointmentNavbar = () => {

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
                <Link to="/" className="logo">
                    DR QUAN
                </Link>
                
                    <Link to="/appointments">
                        <div className="inner">
                            <span>Book Appointment -</span>
                        </div>
                    </Link>
            </div>
        </header>
    )
}

export default AppointmentNavbar