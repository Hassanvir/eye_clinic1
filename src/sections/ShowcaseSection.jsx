import React, { useRef } from 'react'
import gsap from 'gsap';
import _ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(_ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]
        
        // Staggered slide up for the equipment cards
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.1 * index, // Sped up the delay slightly so it feels more responsive
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card, 
                        start: 'top bottom-=100',
                    }
                }
            )
        });
        
        // Fade in the whole section
        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        )
    }, [])

    return (
        // Added max-w-[1400px] and mx-auto for consistent alignment with the Hero
        <section id='equipments' ref={sectionRef} className='w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 py-20'>
            
            <div className="text-center md:text-left mb-12">
                <h2 className="text-sm font-bold text-white tracking-widest uppercase mb-2">s</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Equipped for excellence.</h3>
            </div>

            <div className="w-full">
                <div className="showcaselayout flex flex-col lg:flex-row gap-10">
                    
                    {/* LEFT: Featured Large Instrument */}
                    <div className="first-project-wrapper flex-1 lg:w-3/5" ref={project1Ref}>
                        <div className="image-wrapper relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-[#F4F8FB]">
                            {/* Replace src with your actual Optos image */}
                            <img src="/images/optomap.jpg" alt="Optos OPTOMAP Instrument" className="h-full w-full" />
                            
                            {/* Optional: A subtle gradient overlay if your image needs it */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-content mt-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Optos OPTOMAP</h2>
                            <p className='text-gray-600 md:text-lg mt-2 leading-relaxed'>
                                Ultra-widefield retinal imaging allowing our doctors to see 200° of your retina in a single, high-resolution 3D capture, often without the need for dilation.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Stacked Instruments */}
                    <div className="project-list-wrapper flex-1 lg:w-2/5 flex flex-col gap-8">
                        
                        {/* Machine 2 */}
                        <div className="project group " ref={project2Ref}>
                            <div className="image-wrapper relative h-64 md:h-72 rounded-3xl overflow-hidden bg-[#E2EAF6] transition-transform duration-300 group-hover:-translate-y-2">
                                {/* Replace src with actual OCT image */}
                                <img src="/images/oct.jpg" alt="Retinal Fundus OCT" className="w-full h-full object-contain p-6 mix-blend-multiply" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mt-4 group-hover:text-blue-600 transition-colors">Retinal Fundus O.C.T.</h2>
                            <p className="text-gray-500 text-sm mt-1">High-definition cross-sectional imaging for early disease detection.</p>
                        </div>

                        {/* Machine 3 */}
                        <div className="project group " ref={project3Ref}>
                            <div className="image-wrapper relative h-64 md:h-72 rounded-3xl overflow-hidden bg-[#E6FAFA] transition-transform duration-300 group-hover:-translate-y-2">
                                {/* Replace src with actual Retinal Camera image */}
                                <img src="/images/3d-camera.png" alt="3D Retinal Camera" className="w-full h-full object-contain p-6 mix-blend-multiply" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 mt-4 group-hover:text-blue-600 transition-colors">3-D Retinal Camera</h2>
                            <p className="text-gray-500 text-sm mt-1">Precision imaging for comprehensive ocular health assessments.</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection