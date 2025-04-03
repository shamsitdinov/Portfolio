import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { FaCss3Alt, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaReact, FaNode, FaSass, FaBootstrap } from "react-icons/fa6";
import { DiJavascript, DiMongodb } from "react-icons/di";
import { TbBrandNextjs, TbApi } from "react-icons/tb";
import { SiTailwindcss, SiPostman, SiExpress, SiVite, SiFramer, SiTelegram, SiHandlebarsdotjs, SiMongoose, SiNodemon, SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
const Texnalog = ({ dark }) => {
  return (
    <motion.div id="texnalogy" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }} className={dark ? " mt-2 rounded-md mx-auto w-[98%]" : " mt-2 rounded-md  mx-auto w-[98%] "}>
   <h3 className="text-5xl font-mono capitalize text-center pb-10">my skills</h3>

      <Marquee speed={50} direction="left" autoFill delay={2} pauseOnHover>
        <div className="flex min-w-full gap-[90px]  max-sm:text-3xl max-sm:gap-10 max-md:text-3xl max-md:gap-12 text-7xl">
          <DiJavascript />
          <SiTypescript />
          <SiTailwindcss />
          <TbBrandNextjs />
          <FaCss3Alt />
          <FaFigma />
          <FaGitAlt />
          <FaGithub />
          <FaHtml5 />
          <FaReact />
          <FaNode />
          <TbApi />
          <DiMongodb />
          <SiExpress />
          <FaSass />
          <FaBootstrap />
          <SiVite />
          <IoLogoFirebase />
          <SiFramer />
          <SiTelegram />
          <SiHandlebarsdotjs />
          <SiMongoose />
          <SiNodemon />
          <SiPostman className="mr-[90px] max-sm:mr-10"  />
        </div>
      </Marquee>

   {/* <div className="w-full lg:w-full">
        <div className="py-12 font-titleFont pt-10 w-[80%] mx-auto text-center justify-center flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Texnalogia</h2>
        </div>
        <div className="mt-14 w-full  grid xl:grid-cols-[1fr,1fr] gap-10">
          <div className="gap-5 flex flex-col">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                {" "}
                <TbBrandNextjs className=" text-2xl " /> next js
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                <FaFigma className=" text-2xl " /> Figma
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[90%] h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">90%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                {" "}
                <SiTypescript className=" text-2xl " /> type script
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[60%] h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">60%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                {" "}
                <SiTailwindcss className="text-2xl" /> tailwind
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">70%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                {" "}
                <FaGitAlt className=" text-2xl " />
                git <FaGithub className=" text-2xl " /> git hup
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
          </div>

          <div className="gap-5 flex flex-col">
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase flex gap-3 font-medium">
                {" "}
                <FaReact className=" text-2xl " /> React
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">100%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                {" "}
                <FaHtml5 className=" text-2xl " />
                HTML 5
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[95%] h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">95%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                {" "}
                <FaCss3Alt className=" text-2xl " /> CSS3
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[80%] h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">80%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                <DiJavascript className=" text-2xl " /> JAVASCRIPT
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
            <div className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium flex gap-3">
                <DiJavascript className=" text-2xl " /> Vite
              </p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[75%] h-full bg-gradient-to-r from-[#444] via-gray-500 to-white rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">75%</span>
                </motion.span>
              </span>
            </div>
          </div>
        </div>
      </div> */}

      <Marquee speed={50} className="mt-[200px]" direction="right" autoFill delay={2} pauseOnHover>
        <div className="flex min-w-full gap-[90px]  max-sm:text-3xl max-sm:gap-10  max-md:text-3xl max-md:gap-12 text-7xl">
          <DiJavascript />
          <TbBrandNextjs />
          <SiTailwindcss />
          <FaSass />
          <FaCss3Alt />
          <FaFigma />
          <FaGithub />
          <SiTypescript />
          <FaReact />
          <FaHtml5 />
          <FaNode />
          <FaGitAlt />
          <SiVite />
          <TbApi />
          <DiMongodb />
          <SiTelegram />
          <SiExpress />
          <SiNodemon />
          <FaBootstrap />
          <SiHandlebarsdotjs />
          <IoLogoFirebase />
          <SiFramer />
          <SiMongoose />
          <SiPostman className="mr-[90px] max-sm:mr-10" />
        </div>
      </Marquee>
    </motion.div>
  );
};

export default Texnalog;
