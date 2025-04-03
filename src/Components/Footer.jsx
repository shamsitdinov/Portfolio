import React from "react";
const Footer = ({ dark }) => {
  return (
    <div className={dark ? " mt-2 rounded-full mx-auto w-[98%] bg-[#0c2341] h-20" : "bg-[#091732] h-20 mt-2 rounded-full w-[98%] mx-auto "}>
      <div className="flex justify-center items-center h-full">
        <p>({new Date().toLocaleDateString()})</p>
      </div>

   
    </div>
  );
};

export default Footer;
