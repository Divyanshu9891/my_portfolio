import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Page2 = () => {
     gsap.registerPlugin(ScrollTrigger);

    useGSAP(function(){
    gsap.from(".rotateText",{
        transform: 'rotateX(-80deg)',
        opacity: 0,
        ease: "power3.out",
        duration: 3,
        stagger: 1,
        scrollTrigger: {
          trigger: "#section2",
         // markers: true,
        start: "top 80%",
        end: "bottom 80%",
        scrub: 2,}
    })
    })
   

  return (
    <>
    <div id='section2' className='bg-white text-center min-h-screen p-20 text-black mt-20'>
      <h3 className='text-gray-500 text-2xl font-[thin] relative'> © DIVYANSHU | Full Stack Web & App Developer</h3>

      <div  className='rotateText mt-80'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>DONT't</h1>
      </div>
     < div className='rotateText'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>COMMENT</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>BAD</h1>
      </div>
     <div className='rotateText'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>CODE</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>REWRITE</h1>
      </div>
      <div className='rotateText'>
        <h1 className='text-[40vw] text-black font-[regular] uppercase leading-[35vw]'>IT !</h1>
      </div>

      <div className='flex items-center justify-center gap-15'>
          <div>
            <img src={'../src/assets/react-logo.webp'}
            className='w-15'/>
          </div>
           <div>
            <img src={'../src/assets/nodejs-logo.webp'} className='w-33'/>
          </div>
           <div>
            <img src={'../src/assets/expressjs-logo.png'}
            className='w-33'/>
          </div>
           <div>
            <img src={'../src/assets/mongodb-logo.png'} className='w-33'/>
          </div>
           <div>
            <img src={'../src/assets/mysql-logo.jpg'} className='w-28'/>
          </div>
      </div>
              <div className='h-1 w-1/2 relative left-1/2 -translate-x-1/2 mt-20 bg-black '></div>
    </div>
  </>)
}

export default Page2
