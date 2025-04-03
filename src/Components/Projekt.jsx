import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import sky from "../photo/home.0a921aafc521befcbb21.png";
const Projekt = ({ dark }) => {
  return (
    <div id="projek" className={dark ? "  h-[90vh] rounded-md mt-2 mx-auto w-[98%] max-sm:h-[150vh] max-md:h-[120vh] " : " h-[90vh] rounded-md mt-2 mx-auto w-[98%] max-sm:h-[150vh] max-md:h-[120vh]"}>
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center font-mono w-[80%] mx-auto mb-20">
            <h1 class="max-sm:text-3xl text-5xl capitalize mb-4 ">my projekts</h1>
          </div>
          <div class="flex text-white flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute rounded-lg inset-0 w-full h-full object-cover object-center" src={sky} />
                <div class="px-8 duration-500 rounded-lg  py-10  backdrop-blur-sm relative z-10 w-full border-4 border-white bg-transparent  opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest capitalize text-sm title-font font-medium text-purple-400 mb-1">my project</h2>
                  <h1 class="title-font text-lg uppercase font-medium text-white mb-3">sky high</h1>
                  <p class="leading-relaxed">Modern, comfortable and safe skyscrapers in Uzbekistan</p>
                  <a href="https://sky-high1.netlify.app/" className=" text-right text-2xl pt-5" target="_blank" rel="noopener noreferrer">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute rounded-lg inset-0 w-full h-full object-cover object-center" src={sky} />
                <div class="px-8 duration-500 rounded-lg  py-10  backdrop-blur-sm relative z-10 w-full border-4 border-white bg-transparent  opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest capitalize text-sm title-font font-medium text-purple-400 mb-1">my project</h2>
                  <h1 class="title-font text-lg uppercase font-medium text-white mb-3">sky high</h1>
                  <p class="leading-relaxed">Modern, comfortable and safe skyscrapers in Uzbekistan</p>
                  <a href="https://sky-high1.netlify.app/" className=" text-right text-2xl pt-5" target="_blank" rel="noopener noreferrer">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <img alt="gallery" class="absolute rounded-lg inset-0 w-full h-full object-cover object-center" src={sky} />
                <div class="px-8 duration-500 rounded-lg  py-10  backdrop-blur-sm relative z-10 w-full border-4 border-white bg-transparent  opacity-0 hover:opacity-100">
                  <h2 class="tracking-widest capitalize text-sm title-font font-medium text-purple-400 mb-1">my project</h2>
                  <h1 class="title-font text-lg uppercase font-medium text-white mb-3">sky high</h1>
                  <p class="leading-relaxed">Modern, comfortable and safe skyscrapers in Uzbekistan</p>
                  <a href="https://sky-high1.netlify.app/" className=" text-right text-2xl pt-5" target="_blank" rel="noopener noreferrer">
                    <IoIosLink />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Projekt;
