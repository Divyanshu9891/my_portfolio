import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React from 'react'
import androidLogo from '../assets/android-logo.png'
import iosLogo from '../assets/ios-logo.png'

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
            <img id='banner' src={androidLogo} className='h-18 ' alt="Android"/>
            <img id='banner' src={iosLogo} className='h-15 rounded-full' alt="iOS"/>
        </div>
    </div>
  )
}

export default Page1Bottom
