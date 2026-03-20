import CountUp from 'react-countup'
import { counterItems } from '../index.js'

const AnimatedCounter = () => {
    return (
        // Added max-w-[1400px] and mx-auto so it perfectly aligns with your Hero section limits
        <div id='counter' className='w-full max-w-[1400px] mx-auto px-4 md:px-10 mt-12 mb-20 relative z-20'>
            
            {/* Standard responsive grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                
                {counterItems.map((item, index) => (
                    // 1. Moved the key here!
                    // 2. Swapped bg-zinc-900 for a clean white card with a soft shadow to match the floating hero
                    <div 
                        key={index} 
                        className="bg-white rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                    >
                        {/* Numbers are now your primary blue color to pop against the white */}
                        <div className="text-blue-600 text-4xl sm:text-5xl font-extrabold mb-2 tracking-tight">
                            <CountUp suffix={item.suffix} end={item.value} duration={2.5} />
                        </div>
                        
                        {/* Labels are a clean, readable dark gray */}
                        <div className='text-gray-600 text-sm sm:text-base font-medium tracking-wide uppercase'>
                            {item.label}
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default AnimatedCounter