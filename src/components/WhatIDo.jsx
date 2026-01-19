import React from 'react'

const WhatIDo = () => {
  return (
    <div>
      <div className="w-full h-screen bg-white p-7">
      <div className="w-full h-full bg-black rounded-[50px] overflow-hidden relative">
        <div>
        <h1 className="text-neutral-400  mt-10 ml-30 absolute font-[regular] uppercase text-[21vw] tracking-wide">
         WHAT 
        </h1>
         <h1 className="text-white  ml-30 mt-95 absolute font-[regular] uppercase text-[21vw] tracking-wide">
           I DO
        </h1></div>
        <video
          loop
          muted
          autoPlay
          className="w-full h-full object-cover"
          src={"../src/assets/code-rain.mp4"}
        ></video>
      </div>
    </div>
    </div>
  )
}

export default WhatIDo
