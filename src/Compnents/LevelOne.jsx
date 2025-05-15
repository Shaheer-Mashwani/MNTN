import React from 'react';

const LevelOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-24 px-6 items-center">
      {/* Left side */}
      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2">
          <div className="w-10 h-px bg-amber-300"></div>
          <p className="text-xs font-bold text-amber-300">GET STARTED</p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold">
          What level of hiker are you?
        </h2>

        <p className="text-white">
          The nice thing about beginning hiking is that you don't need any special gear—you can probably get away with things you already have. Let's start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which get heavy and chafe if they get sweaty or wet.
        </p>

        <a href="#" className="text-sm text-amber-500 hover:underline">
          Read more
        </a>
      </div>

      {/* Right side */}
      <div className="flex justify-center md:justify-end">
        <img
          src="level1.png"
          alt="Hiking Level"
          className="w-72 md:w-80 h-auto rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default LevelOne;
