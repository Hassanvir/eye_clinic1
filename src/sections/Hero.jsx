import { words } from '../components/index';
import Button from '../components/Button';
import HeroExperience from '../components/HeroModel/HeroExperience';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/src';
import AnimatedCounter from '../components/HeroModel/AnimatedCounter';
import { Model } from '../components/HeroModel/Human_eye_v2';
import { Link } from 'react-router-dom';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text h1',
      {
        y: 50,
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
  return (
    <section id='hero ' className='relative overflow-hidden'>
      <div className='absolute top-0 left-0 z-10'>

        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>Shaping
                <span className='slide'>
                  <span className="wrapper">
                    {words.map((word) => (
                      <span className='flex items-center md:gap-3 gap-1 pb-2' >
                        <img src={word.imgPath} alt={word.text} className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' />
                        <span>{word.text}</span>
                      </span>))}
                  </span>
                </span>
              </h1>


              <h1>into Real Project</h1>
              <h1>that delivers results</h1>
            </div>
            <p className=' md:text-xl realtive z-10 pointer-events-none'> Welcome to our optometry clinics (located inside Costco)
              <br />
              Providing excellent eye care with a clear focus on your vision and eye health</p>
            {/* <Link to='/appointments' '> */}
              <Button className='md:w-80 md:h-16 w-60 h-12 ' id='button' text='Book Appointment' />
            {/* </Link> */}
          </div>
        </header>

        <figure>
          <div className="hero-3d-layout  border-red-200 ">
            {/* for adding some 3d models */}
            
            
            {/* <HeroExperience /> */}
            
            {/* <Model/> */}
          
          
          
          
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  )
}

export default Hero