import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='absolute w-full flex items-center justify-between  z-10 p-20'>
        <img className='rounded-full h-25 ' src={logo} alt="Divyanshu logo"/>
      <button className='bg-black border-4 text-xl px-6 py-3 rounded-full text-white hover:scale-105'>Hire Me</button>
    </div>
  )
}

export default Header
