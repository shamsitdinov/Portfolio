import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import logo from "../photo/photo_2025-03-29_19-28-45-removebg-preview.png";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { LiaCloudDownloadAltSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { div } from "three/src/nodes/TSL.js";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
const Navbar = ({ dark, trueBox, handle, darkk, burger, setBurger }) => {
  const [wit, setWit] = useState(false);

  const text = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    left: {
      opacity: 0,
      y: 100,
    },
  };
  const text1 = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
      },
    },
    left: {
      opacity: 0,
      y: 100,
    },
  };
  const text2 = {
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
      },
    },
    left: {
      opacity: 0,
      y: 100,
    },
  };

  const text4 = {
    animate: {
      opacity: 1,
      transition: {
        duration: 1.9,
      },
    },
    left: {
      opacity: 0,
    },
  };
  const trueFalse = () => {
    setBurger(!burger);
  };

  return (
    <nav className={dark ? (burger ? "  fixed  z-50 top-1   rounded-full mx-auto backdrop-brightness-50  w-[95%] px-5 flex min-h-[10vh] items-center backdrop-blur-lg   max-sm:flex-col max-sm:right-0 max-sm:h-[40vh] max-sm:w-full max-sm:rounded-sm         max-md:flex-col max-md:right-0 max-md:h-[40vh] max-md:w-full max-md:rounded-sm " : "  fixed  z-50 top-1   rounded-full mx-auto backdrop-brightness-50  w-[95%] px-5 flex  min-h-[10vh] items-center backdrop-blur-lg   max-sm:flex-col max-sm:right-0 max-sm:h-[10vh] max-sm:w-full max-sm:rounded-sm         max-md:flex-col max-md:right-0 max-md:h-[10vh] max-md:w-full max-md:rounded-sm ") : ""}>
      <motion.div initial="left" animate="animate" variants={text4} className=" max-sm:flex max-md:flex hidden  text-center w-full justify-center items-center         max-sm:flex-col max-sm:w-full    max-md:flex-col max-md:w-full">
        <ScrollLink className="flex  w-full" onClick={handle} duration={1000} smooth={trueBox} to="home">
          <img to="home" className=" w-[50px] cursor-pointer rounded-xl" src={logo} alt="" />
        </ScrollLink>
        {burger ? (
          <div className=" w-full">
            <IoMdClose className=" text-3xl absolute top-4 right-5" onClick={trueFalse} />
            <ul className="flex flex-col capitalize gap-3">
              <motion.li onClick={trueFalse} animate="animate" initial="left" variants={text}>
                <ScrollLink className=" bg-[#112449] flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" onClick={handle} duration={1000} smooth={trueBox} to="home">
                  home
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text1}>
                <ScrollLink className=" bg-[#112449] flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" onClick={handle} duration={1000} smooth={trueBox} to="projek">
                  project
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text1}>
                <ScrollLink className=" bg-[#112449] flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" onClick={handle} duration={1000} smooth={trueBox} to="texnalogy">
                  texnalogy
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text2}>
                <ScrollLink className=" bg-[#112449] flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" onClick={handle} duration={1000} smooth={trueBox} to="contact">
                  contact
                </ScrollLink>
              </motion.li>
            </ul>
            <motion.div animate="animate" initial="left" variants={text2} className=" w-full    max-sm:w-full bg-[#112449] max-sm:mt-2 max-sm:rounded-full      max-md:w-full max-md:mt-2 max-md:rounded-full">
              <ul className="flex gap-5  w-[300px] items-center      max-sm:w-full max-sm:justify-between      max-md:w-full max-md:justify-between">
                <button className="flex relative bg-[#0a0c358a] px-3 py-1 rounded-full justify-between gap-3 items-center">
                  Resume <div className=" absolute -top-3 opacity-0 duration-700 hover:opacity-100  w-[150px] h-[10vh] text-end -right-4 text-[10px] text-[#b405d7] ">10Mb</div> <LiaCloudDownloadAltSolid className="text-3xl text-[#b405d7]" />
                </button>
                <div className=" duration-1000 text-3xl">
                  {dark ? (
                    <button className="bg-[#0a0c358a] duration-500  rounded-full p-1" onClick={darkk}>
                      <CiLight />
                    </button>
                  ) : (
                    <button className="bg-[#0a0c358a] duration-500 rounded-full p-1" onClick={darkk}>
                      <CiDark />
                    </button>
                  )}
                </div>
              </ul>
            </motion.div>
          </div>
        ) : (
          <RxHamburgerMenu aria-hidden="true" className="text-3xl absolute top-5 right-5 " onClick={trueFalse} />
        )}
      </motion.div>

      <div className=" flex ">
        <motion.div initial="left" animate="animate" variants={text4} className=" max-md:hidden  flex text-center w-full justify-center items-center         max-sm:flex-col max-sm:w-full    max-md:flex-col max-md:w-full">
          <ScrollLink className="flex w-full" onClick={handle} duration={1000} smooth={trueBox} to="home">
            <img to="home" className=" w-[50px] cursor-pointer rounded-xl" src={logo} alt="" />
          </ScrollLink>

          <ul className="flex capitalize gap-10       max-sm:flex-col max-sm:w-full max-sm:gap-2            max-md:flex-col max-md:w-full max-md:gap-2">
            <motion.li animate="animate" initial="left" variants={text}>
              <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" to="home">
                home
              </ScrollLink>
            </motion.li>
            <motion.li animate="animate" initial="left" variants={text1}>
              <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full    max-md:w-full" duration={1000} smooth={trueBox} to="projek">
                project
              </ScrollLink>
            </motion.li>
            <motion.li animate="animate" initial="left" variants={text1}>
              <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full   max-md:w-full" duration={1000} smooth={trueBox} to="texnalogy">
                texnalogy
              </ScrollLink>
            </motion.li>
            <motion.li animate="animate" initial="left" variants={text2}>
              <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full cursor-pointer  items-center gap-5  max-sm:w-full    max-md:w-full" to="contact">
                contact
              </ScrollLink>
            </motion.li>
          </ul>
          <motion.div animate="animate" initial="left" variants={text2} className=" w-full    max-sm:w-full max-sm:bg-[#091732] max-sm:mt-2 max-sm:rounded-full      max-md:w-full max-md:bg-[#0a0c358a] max-md:mt-2 max-md:rounded-full">
            <ul className="flex gap-5  w-[300px] items-center      max-sm:w-full max-sm:justify-between      max-md:w-full max-md:justify-between">
              <button className="flex relative bg-[#0a0c358a] px-3 py-1 rounded-full justify-between gap-3 items-center">
                Resume <div className=" absolute -top-3 opacity-0 duration-700 hover:opacity-100  w-[150px] h-[10vh] text-end -right-4 text-[10px] text-[#b405d7] ">10Mb</div> <LiaCloudDownloadAltSolid className="text-3xl text-[#b405d7]" />
              </button>
              <div className=" duration-1000 text-3xl">
                {dark ? (
                  <button className="bg-[#0a0c358a] duration-500  rounded-full p-1" onClick={darkk}>
                    <CiLight />
                  </button>
                ) : (
                  <button className="bg-[#0a0c358a] duration-500 rounded-full p-1" onClick={darkk}>
                    <CiDark />
                  </button> 
                )}
              </div>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;

// <motion.div initial="left" animate="animate" variants={text4} className=" flex text-center w-full justify-center items-center         max-sm:flex-col max-sm:w-full    max-md:flex-col max-md:w-full">
// <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   {burger ? (
//     <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//       <RxHamburgerMenu aria-hidden="true" className="text-3xl" onClick={trueFalse} />
//     </button>
//   ) : (

//     <div className=" w-full md:block md:w-auto" id="navbar-default">
//       <IoMdClose className="z-10 text-3xl" onClick={trueFalse} />
//       <ul className="flex capitalize gap-10       max-sm:flex-col max-sm:w-full max-sm:gap-2            max-md:flex-col max-md:w-full max-md:gap-2">
//         <motion.li animate="animate" initial="left" variants={text}>
//           <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" to="home">
//             home
//           </ScrollLink>
//         </motion.li>
//         <motion.li animate="animate" initial="left" variants={text1}>
//           <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full    max-md:w-full" duration={1000} smooth={trueBox} to="projek">
//             projek
//           </ScrollLink>
//         </motion.li>
//         <motion.li animate="animate" initial="left" variants={text1}>
//           <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full   max-md:w-full" duration={1000} smooth={trueBox} to="texnalogy">
//             texnalogy
//           </ScrollLink>
//         </motion.li>
//         <motion.li animate="animate" initial="left" variants={text2}>
//           <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full cursor-pointer  items-center gap-5  max-sm:w-full    max-md:w-full" to="contact">
//             contact
//           </ScrollLink>
//         </motion.li>
//       </ul>
//     </div>
//   )}

{
  /* <div className="w-full">
        {/* {burger ? (
          <motion.div initial="left" animate="animate" variants={text4} className=" flex text-center w-full justify-center items-center         max-sm:flex-col max-sm:w-full    max-md:flex-col max-md:w-full">
            <ul className="flex capitalize gap-10       max-sm:flex-col max-sm:w-full max-sm:gap-2            max-md:flex-col max-md:w-full max-md:gap-2">
              <motion.li animate="animate" initial="left" variants={text}>
                <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" to="home">
                  home
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text1}>
                <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full    max-md:w-full" duration={1000} smooth={trueBox} to="projek">
                  project
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text1}>
                <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full   max-md:w-full" duration={1000} smooth={trueBox} to="texnalogy">
                  texnalogy
                </ScrollLink>
              </motion.li>
              <motion.li animate="animate" initial="left" variants={text2}>
                <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full cursor-pointer  items-center gap-5  max-sm:w-full    max-md:w-full" to="contact">
                  contact
                </ScrollLink>
              </motion.li>
            </ul>
          </motion.div>
        ) : ( */
}
{
  /* <div>
        {!burger ? (
          <RxHamburgerMenu className="text-3xl" onClick={trueFalse} />
        ) : (
          <div>
            <IoMdClose className="z-10 text-3xl" onClick={trueFalse} />
            <motion.div initial="left" animate="animate" variants={text4} className="flex text-center w-full justify-center items-center         max-sm:flex-col max-sm:w-full    max-md:flex-col max-md:w-full">
              <ul className="flex capitalize gap-10       max-sm:flex-col max-sm:w-full max-sm:gap-2            max-md:flex-col max-md:w-full max-md:gap-2">
                <motion.li animate="animate" initial="left" variants={text}>
                  <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" to="home">
                    home
                  </ScrollLink>
                </motion.li>
                <motion.li animate="animate" initial="left" variants={text1}>
                  <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full    max-md:w-full" duration={1000} smooth={trueBox} to="projek">
                    projek
                  </ScrollLink>
                </motion.li>
                <motion.li animate="animate" initial="left" variants={text1}>
                  <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full   max-md:w-full" duration={1000} smooth={trueBox} to="texnalogy">
                    texnalogy
                  </ScrollLink>
                </motion.li>
                <motion.li animate="animate" initial="left" variants={text2}>
                  <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full cursor-pointer  items-center gap-5  max-sm:w-full    max-md:w-full" to="contact">
                    contact
                  </ScrollLink>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        )}
      </div> */
}
{
  /* )} */
}
{
  /* </div> */
}

{
  /* <div class="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex capitalize gap-10       max-sm:flex-col max-sm:w-full max-sm:gap-2            max-md:flex-col max-md:w-full max-md:gap-2">
                <motion.li animate="animate" initial="left" variants={text}>
                  <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex px-3 py-1 rounded-full items-center gap-5 cursor-pointer max-sm:w-full max-md:w-full" to="home">
                    home
                  </ScrollLink>
                </motion.li>
                <motion.li animate="animate" initial="left" variants={text1}>
                  <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full    max-md:w-full" duration={1000} smooth={trueBox} to="projek">
                    projek
                  </ScrollLink>
                </motion.li>
                <motion.li animate="animate" initial="left" variants={text1}>
                  <ScrollLink onClick={handle} className="flex  px-3 py-1 rounded-full  items-center gap-5 cursor-pointer max-sm:w-full   max-md:w-full" duration={1000} smooth={trueBox} to="texnalogy">
                    texnalogy
                  </ScrollLink>
                </motion.li>
                <motion.li animate="animate" initial="left" variants={text2}>
                  <ScrollLink onClick={handle} duration={1000} smooth={trueBox} className="flex  px-3 py-1 rounded-full cursor-pointer  items-center gap-5  max-sm:w-full    max-md:w-full" to="contact">
                    contact
                  </ScrollLink>
                </motion.li>
              </ul>
            </div> */
}
// </div>
// </motion.div>
{
  /* <motion.div animate="animate" initial="left" variants={text2} className=" w-[15%]    max-sm:w-full max-sm:bg-[#0a0c358a] max-sm:mt-2 max-sm:rounded-full      max-md:w-full max-md:bg-[#0a0c358a] max-md:mt-2 max-md:rounded-full">
              <ul className="flex gap-5  w-[300px] items-center      max-sm:w-full max-sm:justify-between      max-md:w-full max-md:justify-between">
                <button className="flex relative bg-[#0a0c358a] px-3 py-1 rounded-full justify-between gap-3 items-center">
                  Resume <div className=" absolute -top-3 opacity-0 duration-700 hover:opacity-100  w-[150px] h-[10vh] text-end -right-4 text-[10px] text-[#b405d7] ">10Mb</div> <LiaCloudDownloadAltSolid className="text-3xl text-[#b405d7]" />
                </button>
                <div className=" duration-1000 text-3xl">
                  {dark ? (
                    <button className="bg-[#0a0c358a] duration-500  rounded-full p-1" onClick={darkk}>
                      <CiLight />
                    </button>
                  ) : (
                    <button className="bg-[#0a0c358a] duration-500 rounded-full p-1" onClick={darkk}>
                      <CiDark />
                    </button>
                  )}
                </div>
              </ul>
            </motion.div> */
}
