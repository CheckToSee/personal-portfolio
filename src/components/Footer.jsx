import React from 'react'
import Dime from "../assets/dime.jpg" 
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='h-[300px] mt-[-100px] w-full'>
      <div className='w-full h-1/3 bg-gradient-to-b from-transparent to-black flex items-center justify-center'>
      </div>
      <div className='w-full h-2/3 bg-black flex items-center justify-end flex-col'>
        <div className='flex flex-row mb-4'>
          <a href='https://www.linkedin.com/in/cheikh-dime-151ba3286/'>
            <AiFillLinkedin className='mx-4 rounded-full' size={35} />
          </a>
          <a href='https://github.com/CheckToSee'>
            <AiFillGithub className='mx-4' size={35} />
          </a>
          <a href='https://twitter.com/dime_dv'>
            <AiFillTwitterSquare className='mx-4 rounded-full' size={35} />
          </a>
        </div>
        <div className='w-[80%] h-1/2 flex items-center border-t border-gray-400 justify-between'>
          <div className='flex flex-row items-center justify-center'>
            <img className='rounded-full h-12 w-12 mr-2' src={Dime} />
            <h1 className='text-white text-base sm:text-2xl font-bold'>CHEIKH DIME</h1>
          </div>
          <p className='text-gray-400 sm:text-base text-sm'>© 2023 Cheikh Dime</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
