import React from 'react';
import { FaInstagram, FaTwitter, FaLongArrowAltDown } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 px-6 items-center">
      {/* Left side */}
      <div className="flex flex-col items-center md:items-start justify-center space-y-4">
        <p className="-rotate-90 origin-left text-sm whitespace-nowrap md:ml-10">
          Follow us
        </p>
        <div className="flex md:flex-col gap-4 md:gap-2 ml-8">
          <a href="#" className="text-black text-xl hover:text-blue-500 transition"><FaInstagram /></a>
          <a href="#" className="text-black text-xl hover:text-blue-500 transition"><FaTwitter /></a>
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-col items-center md:items-start justify-center space-y-4 text-center md:text-left">
        <div className="flex items-center gap-2 justify-center md:justify-start">
          <div className="w-10 h-px bg-amber-300"></div>
          <p className="text-xs font-bold text-amber-300">A HIKING GUIDE</p>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold">
          Be Prepared for the Mountains and Beyond!
        </h1>

        <a href="#" className="text-sm flex items-center justify-center md:justify-start gap-2 text-blue-600 hover:underline">
          Scroll down <FaLongArrowAltDown />
        </a>
      </div>

      {/* Right side – currently empty */}
      <div className="hidden md:block"></div>
    </div>
  );
};

export default HeroSection;
