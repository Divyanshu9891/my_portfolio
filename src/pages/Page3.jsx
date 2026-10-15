import React from 'react'

const Page3 = () => {
  return (
    <>
    <h2 className='flex items-center justify-center text-3xl text-gray-500 font-[thin] relative mt-20'>@Education :-</h2>
     <div className="w-full h-screen relative flex items-center justify-center bg-white">
        <img className="h-[75vh] w-[67%] absolute" src={"../src/assets/laptop-img.avif"} alt="" />
        <video autoPlay loop muted className=" w-1/2 h-[75vh] object-cover border-red-500 border-solid border-[2px]" src={"../src/assets/education.mp4"}></video>
        {/* <div className='h-0.5 w-2/3 top-[30%] absolute z-0 bg-black'></div>
        <div className='h-0.5 w-3/5 top-[60%] absolute z-0 bg-black'></div>
        <div className='h-0.5 w-4/5 top-[75%] absolute z-0 bg-black'></div> */}
    </div>
    </>
  )
}

export default Page3
