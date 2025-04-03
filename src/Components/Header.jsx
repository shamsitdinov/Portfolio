import { Suspense, useRef, useState } from "react";
import { motion, Variants, Transition } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import bannerImg from "../photo/65e8cb452bca7.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaReact, FaTelegram } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { SiTailwindcss } from "react-icons/si";
const Header = ({ dark, handle, trueBox }) => {
  const contact = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
    left: {
      opacity: 0,
      y: 300,
    },
  };

  const [text] = useTypewriter({
    words: ["Frontend Developer", "Beckend Developer"],
    loop: true,
    typeSpeed: 150,
    deleteSpeed: 100,
    delaySpeed: 2000,
  });
  return (
    <>
      <div id="home" className={dark ? " flex items-center justify-between mt-5 h-[90vh] rounded-md m-auto duration-1000 w-[98%] max-sm:h-[150vh] max-md:h-[120vh]" : "flex items-center rounded-md justify-between mt-5  h-[90vh]  m-auto duration-1000 w-[98%]   max-sm:h-[150vh] max-md:h-[120vh] "}>
        <div className="flex max-sm:w-[85%] mx-auto select-none max-sm:pt-[5vh]  mb-20 flex-col w-full">
          <div className=" h-[68vh] flex w-full pt-[45vh] max-md:pt-0 max-md:h-[40vh]   max-sm:pt-0 max-sm:flex-col items-center justify-between max-sm:justify-start  ">
            <div className="w-full mb-20 ">
              <motion.h1 className="text-5xl  font-mono  max-sm:text-3xl max-md:text-4xl  h-4/5" transition={{ duration: 1 }} variants={contact} initial="left" animate="animate">
                Hi, I'm a <br /> <span className=" text-5xl max-md:text-4xl max-sm:text-3xl font-bold ">{text}</span>
                <Cursor />
              </motion.h1>
            </div>
            <div className="w-[45%] max-sm:w-full max-md:w-[80%]">
              <img
                className={dark ? "  h-full rounded-md shadow-md shadow-[#b405d7]" : "  h-full rounded-lg shadow-7xl shadow-[#091732]"}
                src={bannerImg}
                style={{
                  backgroundImage: `url(${bannerImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "left",
                  backgroundRepeat: "no-repeat",
                }}
                alt="bannerImg"
              />
            </div>
          </div>

          <div className="pt-20">
            <p className="text-2xl uppercase font-mono">find me in</p>
            <div className="flex  capitalize gap-10 text-white  ">
              <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-4xl" />
              </a>
              <a className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-4xl" />
              </a>
              <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="text-4xl" />
              </a>
              <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="http://" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-4xl" />
              </a>
            </div>
          </div>
          <div className="pt-10">
            <p className="text-2xl uppercase font-mono">BEST SKILL ON</p>
            <div className="flex  capitalize gap-10 text-white  ">
              <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="" target="_blank" rel="noopener noreferrer">
                <FaReact className="text-4xl" />
              </a>
              <a className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white" href="" target="_blank" rel="noopener noreferrer">
                <FaNode className="text-4xl" />
              </a>
              <a className="bg-[#0c2341] p-3 rounded-md hover:shadow-3xl hover:shadow-white" href="" target="_blank" rel="noopener noreferrer">
                <SiTailwindcss className="text-4xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="w-full relative justify-center flex " to="contact">
        <span className="bg-[#010b1f] w-[50px] flex rounded-full justify-center items-center h-[50px] animate-ping"></span>
        <FaRegArrowAltCircleDown className=" absolute top-2 text-4xl animate-bounce" />
      </ScrollLink>
    </>
  );
};

export default Header;
