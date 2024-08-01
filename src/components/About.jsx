import React from 'react';
import { motion } from 'framer-motion';
import { AiFillHtml5 } from 'react-icons/ai';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoPython, BiLogoJava, BiLogoGit, BiLogoTailwindCss, BiSolidTerminal, BiLogoDocker } from 'react-icons/bi';
import { FaRust, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import Badge from '../assets/securitypluslogo.png';
import { slideIn } from '../../utils/motion';

const About = () => {
  return (
    <div id='about' className="w-full min-h-screen bg-[#1A191D] flex items-center justify-center">
      <div className="w-full max-w-[1400px] h-full mx-16 my-8 flex flex-col mt-16">
        <div className="flex flex-col justify-center mb-6 items-center">
          <h1 
            className="w-full md:text-5xl text-3xl text-white text-center font-extrabold py-3">
            About Me
          </h1>
          <div className="w-10 h-1 rounded-xl mb-4 mt-2 bg-[#9B37FF]"></div>
          <motion.h2 
            variants={slideIn("spring", 0.2, 0.75)} 
            initial="hidden"
            whileInView="show"
            className="lg:text-2xl md:text-xl md:w-1/2 text-[#bababa] text-center">
            In this section, you can find out more about me, my goals, and my
            current skills
          </motion.h2>
        </div>
        <div className="w-full h-full flex flex-col lg:flex-row">
          <div className="w-full h-full flex flex-col mr-4">
            <motion.h2 
              variants={slideIn("spring", 0.1, 1)} 
              initial="hidden"
              whileInView="show"
              className="text-white md:text-3xl text-2xl font-bold py-3">Who am I?</motion.h2>
            <motion.p 
              variants={slideIn("spring", 0.1, 1)} 
              initial="hidden"
              whileInView="show"
              className="md:text-lg pr-4 my-2 text-[#bababa]">
              I'm a
              <span className="font-semibold text-white">
                {" "}
                Frontend Web Developer{" "}
              </span>
              from the state of Maryland and I am thrilled to create stunning
              websites and webapps. I began learning programming as soon as
              middle and high school through a STEM program and since then, I
              developed a passion for it. Motivated from my studies, I picked up
              frontend web development which I fell in love with immediately.
            </motion.p>
            <motion.p 
              variants={slideIn("spring", 0.1, 1)} 
              initial="hidden"
              whileInView="show"
              className="md:text-lg pr-4 my-2 text-[#bababa]">
              I aim to add to my current back-end knowledge and incorporate it
              into my front-end skills in order to become a
              <span className="font-semibold text-white">
                {" "}
                Fullstack Developer.{" "}
              </span>
              I am constantly learning and logging my progress. Check out some
              of my work in the
              <span className="font-semibold text-white"> Projects </span>
              section.
            </motion.p>
            <motion.p 
              variants={slideIn("spring", 0.1, 1)} 
              initial="hidden"
              whileInView="show"
              className="md:text-lg pr-4 my-2 text-[#bababa]">
              In addition to the experience I have in Web Development, I also
              have experience in 
              <span className="font-semibold text-white">
                {" "}
              Cyber Security
              </span>
              . I am
              <span className="font-semibold text-white">
                {" "}
                CompTIA certified{" "}
              </span>
              with the
              <span className="font-semibold text-white">
                {" "}
                SY0-601 Security+ certification.{" "}
              </span>
              With my knowledge and experience in Cyber Security, I can bring an
              invaluable point of view to any team I join.
            </motion.p>
            <motion.p 
              variants={slideIn("spring", 0.1, 1)} 
              initial="hidden"
              whileInView="show"
              className="md:text-lg pr-4 mt-2 text-[#bababa]">
              Fun Facts: I live in the terminal, Vim is the only way
            </motion.p>
            <div className="mt-4">
              <a href='#contact'>
                <button className="px-14 py-4 bg-[#9B37FF] rounded-lg text-lg font-bold hover:bg-[#7529c2]">
                  Contact
                </button>
              </a>
            </div>
          </div>
          <div className="w-full h-full lg:ml-20 flex flex-col lg:mt-0 mt-6 lg:pl-20">
            <h2 className="text-white md:text-3xl text-2xl font-bold py-3">Skills</h2>
            <div className="w-full flex flex-col">
              <div className='flex flex-row mb-4'>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-[#E5532D] mr-4">
                  <AiFillHtml5 size={55} />
                  <h3 className="font-bold">HTML</h3>
                </div>
                <div className="w-16 h-24 sm:w-24 sm:h-32 flex flex-col items-center justify-center rounded-xl bg-[#2D51E4] mr-4">
                  <BiLogoCss3 size={58} />
                  <h3 className="font-bold">CSS</h3>
                </div>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-[#DBBB34] mr-4">
                  <BiLogoJavascript size={55} />
                  <h3 className="font-bold sm:text-sm text-xs">JavaScript</h3>
                </div>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-white">
                  <BiLogoReact size={55} className="text-[#56C1DE]" />
                  <h3 className="font-bold text-[#56C1DE]">React</h3>
                </div>
              </div>
              <div className='flex flex-row mb-4'>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-[#3C79AE] mr-4">
                  <BiLogoPython size={55} />
                  <h3 className="font-bold sm:text-base text-sm">Python</h3>
                </div>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-[#F75108] mr-4">
                  <FaRust className='text-black' size={48} />
                  <h3 className="font-bold text-black">Rust</h3>
                </div>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-white mr-4">
                  <BiLogoJava className='text-[#547C99]' size={55} />
                  <h3 className="font-bold text-[#547C99]">Java</h3>
                </div>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-[#3B3B3B]">
                  <BiLogoGit className='text-[#F1563A]' size={55} />
                  <h3 className="font-bold text-white">Git</h3>
                </div>
              </div>
              <div className='flex flex-row'>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-gray-600 mr-4">
                  <BiLogoTailwindCss className='text-[#3EBFF8]' size={55} />
                  <h3 className="font-bold sm:text-base text-sm">Tailwind</h3>
                </div>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-[#8218FA] mr-4">
                  <FaBootstrap size={55} />
                  <h3 className="font-bold sm:text-base text-xs">Bootstrap</h3>
                </div>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-[#084032] mr-4">
                  <SiDjango size={50} />
                  <h3 className="font-bold">Django</h3>
                </div>
                <div className="sm:w-24 sm:h-32 w-16 h-24 flex flex-col items-center justify-center rounded-xl bg-[#1072D8]">
                  <BiLogoDocker size={55} />
                  <h3 className="font-bold text-white sm:text-sm text-xs">Docker</h3>
                </div>
              </div>
            </div>
            <h2 className="text-white md:text-3xl text-2xl font-bold py-3 lg:mt-0 mt-6">Certification</h2>
            <img src={Badge} className='sm:w-[114px] w-[90px]' />
            <div id='projects' className='h-1'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
