import React from 'react';

const Leveltwo = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-6 items-center max-w-7xl mx-auto">
      {/* Left side */}
      <div className="flex justify-center md:justify-start">
        <img
          src="level2.jpg"
          alt="Hiking Gear"
          className="w-72 md:w-80 h-auto rounded-2xl object-cover"
          loading="lazy"
        />
      </div>

      {/* Right side */}
      <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <div className="w-10 h-px bg-amber-300"></div>
          <p className="text-xs font-bold text-amber-300">HIKING ESSENTIALS</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          Picking the right Hiking Gear!
        </h2>

        <p className="text-white">
          Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by websites like AllTrails and Modern Hiker. What type of hiker are you — novice, moderate, advanced moderate, expert, or expert backpacker?
        </p>

        <a href="#" className="text-sm text-amber-500 hover:underline hover:text-amber-600 transition">
          Read more
        </a>
      </div>
    </div>
  );
};

export default Leveltwo;
