import React from 'react'
import { logoIconsList } from '.'

const LogoIcon = ({ icon }) => {
    return (
        <div className=" marquee-item">
            <img className='h-52 w-96' src={icon.imgPath} alt="" />
            <p>{icon.name}</p>
        </div>

    )
}

const LogoSection = () => {

    return (
        <div className='md:my-20 my-10 relative'>
            <div className=""/>
                <div className=""/>

                    <div className="marquee h-100">
                        <div className="marquee-box md:gap-12 gap-5">
                            {logoIconsList.map((icon) => (
                                <LogoIcon key={icon.name} icon={icon} />
                            ))}
                            {/* {logoIconsList.map((icon) => (
                                <LogoIcon key={icon.name} icon={icon} />
                            ))} */}

                        </div>
                    </div>
                </div>

        
    )
}

export default LogoSection