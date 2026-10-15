import React from 'react'

const TiltText = ({ titleREF }) => {
  return (
    <div id='tiltDiv' ref={titleREF}  className='relative'>
      <h1  className='pt-[19vw] px-20 text-[4.2vw] uppercase font-[semibold] text-white leading-none relative'>
        I AM <span className='text-neutral-400 relative'>YOUR NEXT </span>
      </h1>
      <h1 className='px-20 text-[8vw] leading-none uppercase font-[bold] text-neutral-400'> SUCCESSFUL</h1>
      <h1 className='px-20 text-[4.2vw] leading-none uppercase font-[semibold] text-white'>DEVELOPER</h1>
    </div>
  )
}

export default TiltText
