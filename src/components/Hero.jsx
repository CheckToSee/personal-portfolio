import React from 'react'
import Astronaut from "../assets/astronaut_cartoon.png"
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'
import { CgScrollV } from 'react-icons/cg'
import '../App.css'

/*PERF: 
 * Add animate-bounce for a scroll indicator (bottom middle)
 * Add animated spaceman as image on the right 
 *TODO: Add side icons to the menu on md: screen
 * */

const Hero = () => {
  return (
    <div className="w-full h-screen mt-[-80px] bg-[url('https://wallpapers.com/images/hd/animated-space-1920-x-1229-background-unxl4ghmwz0vk0dh.jpg')] bg-cover flex flex-col">
      <div className='pt-20 w-full h-full flex flex-col md:flex-row'>
        <div className='hidden md:flex flex-[1] flex-col items-start justify-center pl-8'>
          <AiFillLinkedin className='rounded-lg mb-6 cursor-pointer' size={30} />
          <AiFillGithub className='rounded-lg mb-6 cursor-pointer' size={30} />
          <AiFillTwitterSquare className='rounded-lg cursor-pointer' size={30} />
        </div>
        <div className='h-full flex flex-[7] items-center p-10'>
          <div className='w-full'>
            <h1 className='sm:text-7xl text-5xl font-extrabold mb-4'>Hi! I'm Cheikh Dime</h1>
            <p className='font-semibold sm:text-2xl text-lg text-[#9c9c9c] mr-12 mb-8'>A Frontend focused Web Developer with knowledge and experience of Frontend, Backend, Cybersecurity, and more.</p>
            <div className='flex flex-row items-center hover:scale-x-105 hover:ml-5'>
              <button className='text-3xl font-semibold mr-4 pt-3 text-[#0A0D38]'>Let's Connect </button>
              <BsFillArrowRightSquareFill size={28} className='text-[#0A0D38] mt-3' />
            </div>
          </div>
        </div>
        <div className='flex flex-[7] h-full items-center justify-center'>
          <img src={Astronaut} className='aspect-square md:w-[515px] sm:w-[300px] w-[250px] sm:mb-0 mb-10 hero-image' />
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-20 flex items-center justify-center animate-bounce'>
        <CgScrollV size={35} />
      </div>
    </div>
  )
}

export default Hero
