import React from 'react'
import Image from 'next/image'

const HomeBanner = ()=> {
  return (
    <div className='relative  bg-gradient-to-r from-sky-500 to-sky-700 mb-8'>
        <div className='mx-auto px-8 py-12 flex -flex-col gaap-2 md:flex-row items-center justify-center'>
           <div>
                <div className='text-4xl md:text-6xl font-bold text-white'>Promotion d'été</div>
                <div className='text-2xl  md:text-3xl font-bold text-white'>Profité d'une réduction</div>
                <div className='text-2xl  md:text-5xl font-bold text-yellow-300 font-bold'>moins 50%</div>
           </div>
           <div className='w-1/3 relative aspect-video'>
               <Image 
                src="/banner-image.png" fill  alt="banner image" className="h-8 object-icon" />
           </div>
        </div>
    </div>
  )
}

export default HomeBanner;