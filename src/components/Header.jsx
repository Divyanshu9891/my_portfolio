import React from 'react'

const Header = () => {
  return (
    <div className='absolute w-full flex items-center justify-between  z-10 p-20'>
        <img className='rounded-full h-25 ' src='../src/assets/logo.png'/>
      <button className='bg-black border-4 text-xl px-6 py-3 rounded-full text-white hover:scale-105'>Hire Me</button>
    </div>
  )
}

export default Header
