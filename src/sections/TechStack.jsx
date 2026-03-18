import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons, techStackImgs } from '../components'
import Techicons from '../components/Models/TechLogos/Techicons'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TechStack = () => {

    useGSAP(() => {
        gsap.fromTo('.tech-card', {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'power2.inOut',
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                start: 'top center',
                trigger: '#skills'
            }
        })
    })

    return (
        <div id='skills' className='flex-center section-padding'>
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title='My Preferred Tech Stack' sub='The Skills I bring to the table' />
                <div className="tech-grid">{techStackIcons.map((icon) => (
                    <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg" key={icon.name} >
                        <div className="tech-card-animation=bg" />
                        <div className="tech-card-content">
                            <div className="tech-card-wrapper">
                                <Techicons model={icon} />
                            </div>

                            <div className="padding-x w-full">
                                <p> {icon.name}</p>
                            </div>

                        </div>
                    </div>
                ))}

                    {/* {techStackImgs.map((icon) => (
                        <div className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg" key={icon.name} >
                            <div className="tech-card-animated-bg"/>
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <img src={icon.imgPath} alt="" />
                                </div>
                                    <div className="padding-x w-full">
                                        <p>{icon.name}</p>
                                    </div>
                            </div>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default TechStack