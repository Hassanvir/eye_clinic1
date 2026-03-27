import React from 'react'
import { abilities } from '../components' 

const FeatureCard = () => {
    return (
        <section id="eye-exams" className='w-full py-20 px-4 md:px-10 max-w-[1400px] mx-auto'>
            <div className="text-center mb-12">
                <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-2">Patient Care</h2>
                <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">Eye exams for every stage of life.</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {abilities.map(({ imgPath, title, desc }) => (
                    <div 
                        key={title} 
                        className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 rounded-3xl p-8 flex flex-col gap-4 group"
                    >
                        <div className="size-16 flex items-center justify-center rounded-2xl bg-gray-900 transition-transform duration-300 group-hover:scale-105 p-3 shrink-0">
                            <img src={imgPath} alt={title} className="w-full h-full object-contain invert brightness-0" />
                        </div>
                        <h3 className='text-gray-900 text-xl font-bold mt-2 leading-snug group-hover:text-blue-600 transition-colors'>
                            {title}
                        </h3>
                        
                        <p className='text-gray-600 text-base leading-relaxed'>
                            {desc}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default FeatureCard