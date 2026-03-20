import React, { useEffect, useState } from 'react'
import { navLinks } from '.'
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Button from './Button';

const Navbar = () => {


    useGSAP(() => {
        gsap.fromTo('.inner ',
            {
                y: 150,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            })
    })

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
                    Dr. Quan <span className="text-blue-600 font-light">& Associates</span>
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
                <div >
                    <div className="inner">
                        <a onClick={(e) => {
                            let id = 'button'
                            const target = document.getElementById('counter')
                            if (target && id) {
                                const offset = window.innerHeight * 0.15;
                                console.log(offset);

                                const top = (target.getBoundingClientRect().top + window.scrollY + offset) * 7.2
                                console.log(top);
                                window.scrollTo({ top, behavior: 'smooth' })
                            }
                        }} className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-2.5 rounded-full transition shadow-md cursor-pointer">
                            <div className="bg-circle" />
                            <p className='text-sm sm:text-base font-medium whitespace-nowrap'>Book Appointment</p>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar