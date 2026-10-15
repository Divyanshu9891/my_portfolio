import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page6 = () => {
     gsap.registerPlugin(ScrollTrigger);

    useGSAP(function(){
    gsap.from(".rotateText2",{
        transform: 'rotateX(-80deg)',
        opacity: 0,
        ease: "power3.out",
        duration: 3,
        stagger: 1,
        scrollTrigger: {
          trigger: "#section6",
         // markers: true,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 2,}
    })
    })
   

  return (
    <div>
    <div id='section6' className='bg-white text-center min-h-screen p-20 text-black mt-20'>

      <div  className='rotateText2 mt-80'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>CHESS</h1>
      </div>
     < div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>GAME</h1>
      </div>
      <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>DOCTOR'S</h1>
      </div>
     <div className='rotateText2'>
        <h1 className='text-[30vw] text-black font-[regular] uppercase leading-[35vw]'>APPOINTMENTS</h1>
      </div>
      <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>KNOW YOUR ROAD</h1>
      </div>
      <div className='rotateText2'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>PORTFOLIO!</h1>
      </div>
          <div className='h-1 w-1/2 relative left-1/2 -translate-x-1/2 mt-20 bg-black '></div>
    </div>
  </div>)
}

export default Page6

