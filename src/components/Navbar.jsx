import React from 'react'
import { useState, useEffect } from 'react'
import Dime from "../assets/dime.jpg" 
import { AiFillLinkedin, AiFillGithub, AiFillTwitterSquare, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  })

  return (
    <div className={scrolled ? `text-white w-full h-[70px] flex items-center justify-between bg-[#111111] sticky top-0 duration-300 z-10` : `text-white w-full h-[70px] flex items-center justify-between bg-transparent sticky top-0 duration-300 z-10`}>
      <a href='#home'>
        <div className='LOGO ml-12 flex flex-row items-center cursor-pointer'>
          <img className='rounded-full h-12 w-12 mr-2' src={Dime} />
          <h1 className='text-2xl font-bold'>CHEIKH DIME</h1>
        </div>
      </a>
      <div className='hidden lg:flex flex-row font-semibold items-center'>
        <a href='#home'>
          <button className='p-5 cursor-pointer hover:text-[#a6a6a6]'>HOME</button>
        </a>
        <a href='#about'>
          <button className='p-5 cursor-pointer hover:text-[#a6a6a6]'>ABOUT</button>
        </a>
        {/*<ul className='p-5 cursor-pointer hover:text-[#a6a6a6]'>SKILLS</ul>*/}
        <a href='#projects'>
          <button className='p-5 cursor-pointer hover:text-[#a6a6a6]'>PROJECTS</button>
        </a>
        <a href='#contact'>
          <button className="relative border bg-transparent border-white px-4 py-3 mr-12 ml-4 text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-x-100 z-0">Let's Connect</button>
        </a>
      </div>
      <div onClick={handleMenu}className='block lg:hidden'>
        {!menu ? (
          <AiOutlineMenu size={30} className='mr-8 cursor-pointer' />
        ) : (
          <AiOutlineClose size={1} className='mr-8 z-[-1] cursor-pointer' />
        )}
      </div>
      <div className={menu ? "absolute w-72 top-0 right-0 bg-[#ededed] ease-in-out duration-500 rounded-xl h-screen flex flex-col justify-between" : "fixed top-0 right-[-100%] duration-500 h-screen"}>
        <div>
          <div className='w-full flex justify-end items-center'>
            <AiOutlineClose onClick={handleMenu} className='text-black mt-8 mb-4 mr-8 cursor-pointer' size={30} />
          </div>
          <a href='#home'>
            <ul className='p-5 cursor-pointer text-black border-b border-gray-500 mx-4 hover:bg-[#d1d1d1]' onClick={handleMenu}>HOME</ul>
          </a>
          <a href='#about'>
            <ul className='p-5 cursor-pointer text-black border-b border-gray-500 mx-4 hover:bg-[#d1d1d1]' onClick={handleMenu}>ABOUT</ul>
          </a>
          {/*<ul className='p-5 cursor-pointer text-black border-b border-gray-500 mx-4 hover:bg-[#d1d1d1]'>SKILLS</ul>*/}
          <a href='#projects'>
            <ul className='p-5 cursor-pointer text-black mx-4 hover:bg-[#d1d1d1]' onClick={handleMenu}>PROJECTS</ul>
          </a>
        </div>
        <div className='flex flex-col justify-between'>
          <div className='md:hidden flex flex-row mb-8 text-black justify-between mx-8'>
            <a href='https://www.linkedin.com/in/cheikh-dime-151ba3286/'>
              <AiFillLinkedin className='rounded-lg cursor-pointer m-4' size={30} />
            </a>
            <a href='https://github.com/CheckToSee'>
              <AiFillGithub className='rounded-lg cursor-pointer m-4' size={30} />
            </a>
            <a href='https://twitter.com/cdimedotdev'>
              <AiFillTwitterSquare className='rounded-lg cursor-pointer m-4' size={30} />
            </a>
          </div>
          <a href='#contact' className='flex justify-center'>
            <button className="relative border w-[80%] bg-transparent border-black px-4 py-3 mb-8 text-black transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 z-0" onClick={handleMenu}>Let's Connect</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
