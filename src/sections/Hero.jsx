import { words } from '../components/index';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap/src';
import AnimatedCounter from '../components/HeroModel/AnimatedCounter';
import Button from '../components/Button';

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo('.hero-text .animate-item',
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
        ease: 'power2.out'
      }
    )
  })

  return (
    // Outer wrapper provides the top spacing so it sits below your fixed navbar
    <section id='hero' className='w-full pt-28 pb-10 px-4 md:px-10 max-w-[1400px] mx-auto flex flex-col items-center justify-center'>

      {/* Inset Card Container - The rounded rectangle holding everything */}
      <div className="relative w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden min-h-[60vh] md:min-h-[75vh] flex items-center shadow-sm">

        {/* Background Image */}
        <img
          src="/images/logos/eyes.jpg" // Replace with your eye/clinic image
          alt="Eye examination"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Glassmorphism / Gradient Overlay */}
        {/* This ensures your text is ALWAYS readable, regardless of the image behind it. 
            It creates a soft white fade from the left side. */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/70 to-transparent z-10 w-full md:w-3/4 lg:w-2/3 pointer-events-none"></div>

        {/* Content Wrapper */}
        <div className="relative z-20 w-full md:w-2/3 lg:w-1/2 px-6 py-12 sm:px-10 md:px-16 flex flex-col gap-6 hero-text">

          {/* Headline structured to match the image */}
          <h1 className='animate-item text-[2.5rem] sm:text-5xl md:text-6xl font-extrabold text-[#111827] leading-[1.1] tracking-tight'>
            <span className="block mb-2">Clear focus on</span>

            <div className="flex items-center gap-3 md:gap-4 h-[1.2em] overflow-hidden">
              <span>your</span>

              {/* The Sliding Words Wrapper */}
              <div className="slide relative text-blue-600 h-[48px] md:h-[60px] overflow-hidden inline-flex flex-col justify-start">
                <span className="wrapper">
                  {words.map((word, index) => (
                    <span key={index} className='flex items-center gap-2 md:gap-3 h-[1.2em] pb-1'>
                      {/* Icon inside the slider like the screenshot */}
                      <span className="flex items-center justify-center size-8 md:size-10 bg-gray-900/5 rounded-full p-1.5 backdrop-blur-sm">
                        <img src={word.imgPath} alt={word.text} className='w-full h-full object-contain opacity-80' />
                      </span>
                      <span className="leading-none pb-1 whitespace-nowrap">{word.text}</span>
                    </span>
                  ))}
                </span>
              </div>

            </div>
          </h1>

          {/* Subtext */}
          <p className='animate-item text-base sm:text-lg text-gray-700 font-medium max-w-md leading-relaxed mt-2'>
            Comprehensive optometry clinics equipped with the latest diagnostic technology. Book your appointment easily online or by phone.
          </p>

          <Button id="counter" text="Book Appointment" className="w-auto h-12 md:h-14" />

        </div>
      </div>


    </section>
  )
}

export default Hero