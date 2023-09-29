import React from 'react'
import Wordle from '../assets/wordlecard.png'
import Metaversus from '../assets/Metaversus2.png'
import InstantRX from '../assets/instantrxcard.png'
import Portfolio from '../assets/portfoliocard.png'

/*NOTE: Metaversus, Wordle Clone, Healthcare Modern App, personal-portfoio, minigrep, ytDownloader, Ebay Price Tracker, NYT Titles*/

/*#b8328f, #5327c4*/
const Projects = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-black'>
      <div className='w-full max-w-[1400px] h-full mx-16 flex flex-col'>
        <h1 className='w-full text-white font-extrabold text-5xl text-center pt-12 pb-3'>Projects</h1>
        <div className='h-full w-full flex flex-col'>
          <div className='w-full h-16 mt-8 text-center font-bold flex flex-row items-center justify-center'>
            <div>
              <button className='py-2 px-5 text-white border border-gray-500 rounded-l-xl bg-gradient-to-r from-[#b8328f] to-[#5327c4]'>All</button>
              <button className='py-2 px-5 text-white border border-gray-500 bg-[#1A191D]'>React</button>
              <button className='py-2 px-5 text-white border border-gray-500 bg-[#1A191D]'>Python</button>
              <button className='py-2 px-5 text-white border border-gray-500 rounded-r-xl bg-[#1A191D]'>Rust</button>
            </div>
          </div>
          <div className='w-full h-full flex flex-col'>
            <div className='w-full h-full flex items-center justify-center'>

              {/*NOTE: FIRST CARD*/}
              <div className='w-80 h-80 mr-8 bg-white aspect-square border border-gray-700 relative overflow-hidden group'>
                <img src={Metaversus} className='w-full h-full object-cover' />
                <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                  <div className='w-full h-full flex justify-center items-center flex-col'>
                    <h3 className='text-2xl font-bold text-white'>Metaversus</h3>
                    <p className='text-lg text-white'>Frontend using NextJS + React</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='mb-6 py-2 px-5 bg-[#9B37FF] font-extrabold rounded-lg border border-white hover:bg-[#5327c4]'>Visit Github</button>
                  </div>
                </div>
              </div>

              {/*NOTE: SECOND CARD*/}
              <div className='w-80 h-80 mr-8 bg-white aspect-square border border-gray-700 relative overflow-hidden group'>
                <img src={Wordle} className='w-full h-full object-cover' />
                <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                  <div className='w-full h-full flex justify-center items-center flex-col'>
                    <h3 className='text-2xl font-bold text-white'>Wordle Clone</h3>
                    <p className='text-lg text-white'>Frontend using NextJS + React</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='mb-6 py-2 px-5 bg-[#9B37FF] font-extrabold rounded-lg border border-white hover:bg-[#5327c4]'>Visit Github</button>
                  </div>
                </div>
              </div>

              {/*NOTE: THIRD CARD*/}
              <div className='w-80 h-80 bg-white aspect-square border border-gray-700 relative overflow-hidden group'>
                <img src={InstantRX} className='w-full h-full object-cover' />
                <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                  <div className='w-full h-full flex justify-center items-center flex-col'>
                    <h3 className='text-2xl font-bold text-white'>Online Healthcare Clone</h3>
                    <p className='text-lg text-white'>Frontend using NextJS + React</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='mb-6 py-2 px-5 bg-[#9B37FF] font-extrabold rounded-lg border border-white hover:bg-[#5327c4]'>Visit Github</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-full flex items-center justify-center'>

              {/*NOTE: THIRD CARD*/}
              <div className='w-80 h-80 bg-white aspect-square border border-gray-700 relative overflow-hidden group mr-8'>
                <img src={Portfolio} className='w-full h-full' />
                <div className='bg-[#1f3d4738] w-full h-full absolute top-0 right-[-100%] group-hover:right-0 duration-300 backdrop-blur flex flex-col'>
                  <div className='w-full h-full flex justify-center items-center flex-col'>
                    <h3 className='text-2xl font-bold text-white'>My personal website</h3>
                    <p className='text-lg text-white'>ReactJS + Vite</p>
                  </div>
                  <div className='flex items-center justify-center'>
                    <button className='mb-6 py-2 px-5 bg-[#9B37FF] font-extrabold rounded-lg border border-white hover:bg-[#5327c4]'>Visit Github</button>
                  </div>
                </div>
              </div>

              <div className='w-80 h-80 mr-8 bg-white aspect-square'></div>
              <div className='w-80 h-80 bg-white aspect-square'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
