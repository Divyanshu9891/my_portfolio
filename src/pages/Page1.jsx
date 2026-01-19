import React, { useRef,useState } from 'react'
import Page1Bottom from '../components/Page1Bottom'
import TiltText from '../components/TiltText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Page1 = () => {
 const tiltREF = useRef(null);
 const [xVal, setXVal] = useState(0);
 const [yVal, setYVal] = useState(0);

 const mouseMoving = (e) => {
 // console.log(e);
 setXVal((e.clientX - tiltREF.current.getBoundingClientRect().x - tiltREF.current.getBoundingClientRect().width/2)/20);
 setYVal(-(e.clientY - tiltREF.current.getBoundingClientRect().y - tiltREF.current.getBoundingClientRect().height/2)/20);
 //
 tiltREF.current.style.transform = `rotateX(${yVal}deg) rotateY(${xVal}deg)`;
 }

 useGSAP(function(){
   gsap.to(tiltREF.current,{
     transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
     ease: "power3.out",
     duration: 0.5
   })
 },[xVal,yVal])

  return (
    <div id='main' onMouseMove={(e)=> {
      mouseMoving(e);
    }} className='h-screen p-7 relative bg-white'>
      <div className='shadow-xl shadow-gray-700 h-full w-full  bg-[url("./assets/divyanshu_Img.png")] rounded-[50px] bg-cover relative'>
      <TiltText titleREF={tiltREF}/>
      <Page1Bottom/>

      </div>
    </div>
  )
}

export default Page1
