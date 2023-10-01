import React from 'react'
import Astronaut from "../assets/astronaut_cartoon.png"
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare } from 'react-icons/ai'
import { CgScrollV } from 'react-icons/cg'
import '../App.css'

/*PERF: 
 * Add animate-bounce for a scroll indicator (bottom middle)
 * Add animated spaceman as image on the right 
 * Add side icons to the menu on md: screen
 * */

const Hero = () => {
  return (
    <div id='home' className="w-full h-screen mt-[-70px] bg-[url('https://wallpapers.com/images/hd/animated-space-1920-x-1229-background-unxl4ghmwz0vk0dh.jpg')] bg-cover flex flex-col">
      <div className='pt-20 w-full h-full flex flex-col md:flex-row'>
        <div className='hidden md:flex flex-[1] flex-col items-start justify-center pl-8'>
          <a href='https://www.linkedin.com/in/cheikh-dime-151ba3286/'>
            <AiFillLinkedin className='rounded-lg my-3 cursor-pointer' size={30} />
          </a>
          <a href='https://github.com/CheckToSee'>
            <AiFillGithub className='rounded-lg my-3 cursor-pointer' size={35} />
          </a>
          <a href='https://twitter.com/dime_dv'>
            <AiFillTwitterSquare className='rounded-lg my-3 cursor-pointer' size={35} />
          </a>
        </div>
        <div className='h-full flex flex-[7] items-center p-10'>
          <div className='w-full'>
            <h1 className='lg:text-7xl md:text-6xl text-5xl font-extrabold mb-4'>Hi! I'm Cheikh Dime</h1>
            <p className='font-semibold lg:text-2xl md:text-xl text-lg text-gray-500 mr-12 mb-8'>A Frontend focused Web Developer with knowledge and experience of Frontend, Backend, Cybersecurity, and more.</p>
            <div className='flex flex-row items-center'>
              <a href='#contact'>
                <button className="relative group text-xl border-4 rounded-xl flex flex-row font-extrabold bg-transparent border-black px-4 py-3 text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-0">
                  Let's Connect
                  <BsFillArrowRightSquareFill size={28} className='text-[#0A0D38] ml-4 group-hover:text-white duration-300' />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className='flex flex-[7] h-full items-center justify-center'>
          <img src={Astronaut} className='aspect-square md:w-[415px] sm:w-[300px] w-[250px] sm:mb-0 mb-10 hero-image' />
        </div>
      </div>
      <div className='absolute bottom-0 w-full h-20 flex items-center justify-center animate-bounce'>
        <CgScrollV size={35} />
      </div>
    </div>
  )
}

export default Hero
