import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Projekt from "./Components/Projekt";
import Texnalog from "./Components/Texnalog";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

const App = () => {
  const [trueBox, setTrueBox] = useState(false);
  const [dark, setDark] = useState(true);
  const [burger, setBurger] = useState(false);

  const handle = () => {
    setBurger(false);
    setTrueBox(true);
  };
  const darkk = () => {
    setDark(!dark); 
  };
 
  return ( 
    <div className={dark ? "bg-[#091732] font-mono box-border min-h-[100vh] py-1   text-white duration-500 " : " bg-slate-400 font-mono text-[#091732]  duration-500  p-2"}>
      <div className={dark ? "w-[95%] mx-auto" : "w-[96%]  mx-auto"}>
        <Navbar dark={dark} trueBox={trueBox} setTrueBox={setTrueBox} burger={burger} setBurger={setBurger} handle={handle} darkk={darkk} setDark={setDark} />
        <Header dark={dark} handle={handle} trueBox={trueBox} />
        <Projekt dark={dark} />
        <Texnalog dark={dark} />
        <Contact dark={dark} />
        <Footer dark={dark} />
      </div>
    </div>
  );
};

export default App;
