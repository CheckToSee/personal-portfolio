import React from 'react'
import { useState } from 'react'
import Wordle from '../assets/wordlecard.png'
import Metaversus from '../assets/Metaversus2.png'
import InstantRX from '../assets/instantrxcard.png'
import Portfolio from '../assets/portfoliocard.png'
import Ebay from '../assets/ebaycard.jpg'
import Nyt from '../assets/nytcard.jpg'
import { IoIosArrowForward } from 'react-icons/io'

/*NOTE: Metaversus, Wordle Clone, Healthcare Modern App, personal-portfoio, minigrep, ytDownloader, Ebay Price Tracker, NYT Titles*/
/*PERF: Make taskbar work and actually filter cards */

/*#b8328f, #5327c4*/
const Projects = () => {
  const [toggle, setToggle] = useState(1);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-black'>
      <div className='w-full max-w-[1400px] h-full min-h-screen mx-16 flex flex-col'>
        <h1 className='w-full text-white font-extrabold text-5xl text-center pt-12 pb-3'>Projects</h1>
        <div className='h-full w-full flex flex-col'>
          <div className='w-full h-16 mt-8 text-center font-bold flex flex-row items-center justify-center'>
            <div>
              <button className={ toggle == 1 
                ? 'py-2 px-5 text-white border border-gray-500 rounded-l-xl bg-gradient-to-r from-[#b8328f] to-[#5327c4]' 
                : 'py-2 px-5 text-white border border-gray-500 rounded-l-xl bg-[#1A191D]'} 
                onClick={() => {setToggle(1)}}>All</button>
              <button className={ toggle == 2 
                ? 'py-2 px-5 text-white border border-gray-500 bg-gradient-to-r from-[#b8328f] to-[#5327c4]' 
                : 'py-2 px-5 text-white border border-gray-500 bg-[#1A191D]'} 
                onClick={() => {setToggle(2)}}>React</button>
              <button className={ toggle == 3 
                ? 'py-2 px-5 text-white border border-gray-500 rounded-r-xl bg-gradient-to-r from-[#b8328f] to-[#5327c4]' 
                : 'py-2 px-5 text-white border border-gray-500 rounded-r-xl bg-[#1A191D]'} 
                onClick={() => {setToggle(3)}}>Python</button>
              {/*<button className='py-2 px-5 text-white border border-gray-500 rounded-r-xl bg-[#1A191D]'>Rust</button>*/}
            </div>
          </div>
          <div className='w-full h-full flex flex-col mt-6'>
            <div className='w-full h-full flex items-center justify-center mb-8'>
              <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center'>

                {/*NOTE: FIRST CARD*/}
                <div className={ toggle == 1 || toggle == 2 
                ? 'xl:w-80 xl:h-80 md:h-72 md:w-72 h-64 w-64 bg-white aspect-square border border-gray-700 relative overflow-hidden group m-4'
                : 'hidden'}>
                  <img src={Metaversus} className='w-full h-full object-cover' />
                  <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                    <div className='w-full h-full flex justify-center items-center flex-col'>
                      <h3 className='text-2xl font-bold text-white'>Metaversus</h3>
                      <p className='text-white px-5 text-center py-2'>A responsive website with animations. Tools used: ReactJS, NextJS, TailwindCSS.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href='https://github.com/CheckToSee/metaversus'>
                        <button className='mb-6 py-2 px-5 bg-transparent hover:bg-[#9B37FF] font-extrabold rounded-lg border-2 border-[#9B37FF] flex flex-row duration-300 items-center justify-center'>
                          Visit Github
                          <IoIosArrowForward size={18} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/*NOTE: SECOND CARD*/}
                <div className={ toggle == 1 || toggle == 2 
                ? 'xl:w-80 xl:h-80 md:h-72 md:w-72 h-64 w-64 bg-white aspect-square border border-gray-700 relative overflow-hidden group m-4'
                : 'hidden'}>
                  <img src={Wordle} className='w-full h-full object-cover' />
                  <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                    <div className='w-full h-full flex justify-center items-center flex-col'>
                      <h3 className='text-2xl font-bold text-white'>Wordle Clone</h3>
                      <p className='text-white px-5 text-center py-2'>Responsive clone. Tools used: ReactJS, TailwindCSS, NextJS, ToastAPI.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href='https://github.com/CheckToSee/wordle-clone'>
                        <button className='mb-6 py-2 px-5 bg-transparent hover:bg-[#9B37FF] font-extrabold rounded-lg border-2 border-[#9B37FF] flex flex-row duration-300 items-center justify-center'>
                          Visit Github
                          <IoIosArrowForward size={18} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/*NOTE: THIRD CARD*/}
                <div className={ toggle == 1 || toggle == 2 
                ? 'xl:w-80 xl:h-80 md:h-72 md:w-72 h-64 w-64 bg-white aspect-square border border-gray-700 relative overflow-hidden group m-4'
                : 'hidden'}>
                  <img src={InstantRX} className='w-full h-full object-cover' />
                  <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                    <div className='w-full h-full flex justify-center items-center flex-col'>
                      <h3 className='text-2xl font-bold text-white'>Online Healthcare Clone</h3>
                      <p className='text-white px-5 text-center py-2'>Online healthcare website. Tools used: ReactJS, TailwindCSS, NextJS, Figma.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href='https://github.com/CheckToSee/Healthcare_Modern_App'>
                        <button className='mb-6 py-2 px-5 bg-transparent hover:bg-[#9B37FF] font-extrabold rounded-lg border-2 border-[#9B37FF] flex flex-row duration-300 items-center justify-center'>
                          Visit Github
                          <IoIosArrowForward size={18} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/*NOTE: FOURTH CARD*/}
                <div className={ toggle == 1 || toggle == 2 
                ? 'xl:w-80 xl:h-80 md:h-72 md:w-72 h-64 w-64 bg-white aspect-square border border-gray-700 relative overflow-hidden group m-4'
                : 'hidden'}>
                  <img src={Portfolio} className='w-full h-full' />
                  <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                    <div className='w-full h-full flex justify-center items-center flex-col'>
                      <h3 className='text-2xl font-bold text-white'>My Personal Website</h3>
                      <p className='text-white px-5 text-center py-2'>This website! Tools used: ReactJS, TailwindCSS</p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href='https://github.com/CheckToSee/personal-portfolio'>
                        <button className='mb-6 py-2 px-5 bg-transparent hover:bg-[#9B37FF] font-extrabold rounded-lg border-2 border-[#9B37FF] flex flex-row duration-300 items-center justify-center'>
                          Visit Github
                          <IoIosArrowForward size={18} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/*NOTE: FIFTH CARD*/}
                <div className={ toggle == 1 || toggle == 3 
                ? 'xl:w-80 xl:h-80 md:h-72 md:w-72 h-64 w-64 bg-white aspect-square border border-gray-700 relative overflow-hidden group m-4'
                : 'hidden'}>
                  <img src={Ebay} className='w-full h-full object-cover' />
                  <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                    <div className='w-full h-full flex justify-center items-center flex-col'>
                      <h3 className='text-2xl font-bold text-white'>Ebay Price Tracker</h3>
                      <p className='text-lg text-white'>Python Scripting with BS4</p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href='https://github.com/CheckToSee/ebay_tracker'>
                        <button className='mb-6 py-2 px-5 bg-transparent hover:bg-[#9B37FF] font-extrabold rounded-lg border-2 border-[#9B37FF] flex flex-row duration-300 items-center justify-center'>
                          Visit Github
                          <IoIosArrowForward size={18} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                {/*NOTE: SIXTH CARD*/}
                <div className={ toggle == 1 || toggle == 3 
                ? 'xl:w-80 xl:h-80 md:h-72 md:w-72 h-64 w-64 bg-white aspect-square border border-gray-700 relative overflow-hidden group m-4'
                : 'hidden'}>
                  <img src={Nyt} className='w-full h-full object-cover' />
                  <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                    <div className='w-full h-full flex justify-center items-center flex-col'>
                      <h3 className='text-2xl font-bold text-white'>NYT Daily Article Tracker</h3>
                      <p className='text-lg text-white'>Python Scripting with BS4</p>
                    </div>
                    <div className='flex items-center justify-center'>
                      <a href='https://github.com/CheckToSee/nyt_titles'>
                        <button className='mb-6 py-2 px-5 bg-transparent hover:bg-[#9B37FF] font-extrabold rounded-lg border-2 border-[#9B37FF] flex flex-row duration-300 items-center justify-center'>
                          Visit Github
                          <IoIosArrowForward size={18} />
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
