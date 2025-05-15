import React from 'react';

const LevelThree = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-6 items-center max-w-7xl mx-auto">
      {/* Left side */}
      <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <div className="w-10 h-px bg-amber-300"></div>
          <p className="text-xs font-bold text-amber-300">WHERE YOU GO IS THE KEY</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          Understand Your Map & Timing
        </h2>

        <p className="text-white">
          To start, print out the hiking guide and map. If it's raining, put them in a Zip-lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I'll read the guide and know that, say, in a mile, I make a right turn at the junction.
        </p>

        <a href="#" className="text-sm text-amber-500 hover:underline hover:text-amber-600 transition">
          Read more
        </a>
      </div>

      {/* Right side */}
      <div className="flex justify-center md:justify-end">
        <img
          src="level3.png"
          alt="Map and Timing"
          loading="lazy"
          className="w-72 md:w-80 h-auto rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default LevelThree;
