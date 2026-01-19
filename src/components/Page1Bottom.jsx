import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'

const Page1Bottom = () => {

  useGSAP(function(){
    gsap.to('#banner',{
      rotate: 360,
      duration: 3,
      repeat: -1,
      ease: "linear",
    })
    }
    )
  return (
    <div className='flex items-center justify-between  absolute bottom-0 w-[97%]  '>
        <div className='text-2xl text-white px-9 m-10'>
          <h2>WEB | ANDROID | IOS
              
         </h2>
         <h2 className='text-neutral-400'>DEVELOPER</h2>
        </div>
        <div  className='flex flex-col  gap-7 mb-4 '>
            <img id='banner' src={'../src/assets/android-logo.png'} className='h-18 '/>
            <img id='banner' src={'../src/assets/ios-logo.png'} className='h-15 rounded-full'/>
        </div>
    </div>
  )
}

export default Page1Bottom
