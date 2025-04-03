import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import img from "../photo/nikita-kachanovsky-OVbeSXRk_9E-unsplash.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { FaGithub, FaInstagram, FaLinkedin, FaPhoneAlt, FaTelegram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import img1 from "../photo/photo_2025-03-29_19-28-45-removebg-preview.png";

const Contact = ({ dark }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_93s0h3b", "template_c9uacpi", form.current, {
        publicKey: "f7_qewyU8VRyC8rSK",
      })
      .then(
        () => {
          sendEmailjs();
        },
        (error) => {
          sendEmailjs();
        }
      );
  };

  const sendEmailjs = () => {
    toast.info("Xabar jonatildi!", {
      autoClose: 3000,
      position: "top-center",
      type: "success",
      theme: "black",
    });
  };

  const text = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div id="contact" className={dark ? "mt-2 rounded-md mx-auto w-[98%]" : " mt-2  rounded-md w-[98%] mx-auto "}>
      <div className="pt-10 w-[80%] mx-auto">
        <h1 className="text-center text-5xl capitalize font-mono  ">contact me</h1>
      </div>
      <div className="flex max-sm:flex-wrap max-md:flex-wrap">
        <div className="min-h-[80vh] m-auto mt-10  flex flex-col xl:flex-wrap w-full justify-around ">
          <ToastContainer className=" backdrop-blur-md rounded-lg" />
          <fieldset className="border-2 py-3 rounded-md w-[90%] border-gray-500 px-5">
            <legend className="text-3xl capitalize font-mono">contact me</legend>
            <form ref={form} className="xl:w-2/3 flex justify-center w-[60%] flex-col  gap-y-2" onSubmit={sendEmail} value="Send">
              <div className="relative items-center flex mb-10">
                <input placeholder="" type="email" className="border-2 w-full px-3 border-gray-500 py-1 focus:border-white rounded-md focus:border-2 transition-colors focus:outline-none peer bg-transparent" />
                <label for="username" className="absolute tracking-[5px]   duration-300 -top-4 text-xs left-3 peer-focus:left-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">
                  @Email
                </label>
              </div>
              <div className="relative items-center flex mb-10">
                <input placeholder="" type="email" className="border-2 w-full px-3 border-gray-500 py-1 focus:border-white rounded-md focus:border-2 transition-colors focus:outline-none peer bg-transparent" />
                <label for="username" className="absolute tracking-[5px]   duration-300 -top-4 text-xs left-3 peer-focus:left-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">
                  Fullname
                </label>
              </div>
              <div className="relative items-center flex">
                <textarea placeholder="" type="email" className="border-2 resize-none p-3 w-full  border-gray-500 py-1 focus:border-white rounded-md focus:border-2 transition-colors focus:outline-none peer h-[100px] bg-transparent" />
                <label for="username" className="absolute tracking-[5px]   duration-300 -top-4 text-xs left-3 peer-focus:left-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-placeholder-shown:top-1 peer-placeholder-shown:text-sm">
                  Message
                </label>
              </div>

              <button onClick={sendEmail} className=" active:bg-[#0e2551] w-[50%] hover:brightness-110 uppercase hover:animate-pulse font-bold text-white py-3 px-6 rounded-md bg-[#091732] shadow-3xl shadow-white">
                send
              </button>
            </form>
          </fieldset>
        </div>

        <div className="w-full text-white flex items-end  ">
          <div className="w-full border-2 border-gray-500 h-[53vh] rounded-md mb-10 " style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className=" backdrop-blur-sm h-full p-3">
              <div className=" flex items-center  ">
                <img className="w-[100px] " src={img1} alt="" />
                <h3>Fullstack developer</h3>
              </div>

              <p className="text-2xl uppercase font-mono">find me in</p>

              <div className="flex gap-y-3 flex-col">
                <div className="flex gap-x-5 items-center ">
                  <span className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white w-10">
                    <FaPhoneAlt />
                  </span>
                  <span className=" capitalize underline">+998 77 411 10 96</span> <span className=" capitalize"> my phone number</span>
                </div>
                <div className="flex gap-x-5 items-center ">
                  <span className=" bg-[#0c2341] p-3 rounded-md hover:shadow-3xl  hover:shadow-white w-10">
                    <MdOutlineAlternateEmail />
                  </span>
                  <a href="https://mail.google.com/mail/u/0/#inbox" className=" underline">
                    nodirdev1@gmail.com
                  </a>{" "}
                  <span className=" capitalize"> my email</span>
                </div>
              </div>
              <div className="pt-10 ">
                <div className="flex items-end capitalize gap-10 text-white  ">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
