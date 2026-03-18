import React from 'react'
import { Link } from 'react-router-dom';


const Button = ({ text, className, id }) => {
    return (
            <Link to='/appointments' onClick={(e) => {
                const target = document.getElementById('counter')
                // if (target && id) {
                //     const offset = window.innerHeight * 0.15;
                //     const top = target.getBoundingClientRect().top + window.scrollY - offset
                //     window.scrollTo({ top, behavior: 'smooth' })
                // }
            }} className={`${className ?? ''} cta-wrapper`}>

                <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className='text'>{text}</p>
                    <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                </div>
            </Link>
    )
}

export default Button