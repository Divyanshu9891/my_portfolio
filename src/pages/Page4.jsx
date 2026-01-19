import React from 'react'

const Page4 = () => {
  return (
        <div className="w-full h-screen bg-white p-7">
      <div className="w-full h-full bg-black rounded-[50px] overflow-hidden relative">
        <h1 className="absolute font-[regular] uppercase text-[30vw] text-white tracking-wide left-10 -bottom-32">
          About
        </h1>
        <video
          loop
          muted
          autoPlay
          className="w-full h-full object-cover"
          src={"../src/assets/moon-rotate.mp4"}
        ></video>
      </div>
    </div>
  )
}

export default Page4
