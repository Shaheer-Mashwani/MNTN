import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-24 py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Left side */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-bold">MNTN</h3>
        <p>Get out there &amp; discover your next slope, mountain &amp; destination!</p>
      </div>
      

      {/* Middle section */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl text-amber-500 font-semibold">More on The Blog</h3>
        <a href="#" className="text-sm hover:text-amber-600 transition">About MNTN</a>
        <a href="#" className="text-sm hover:text-amber-600 transition">Contributors & Writers</a>
        <a href="#" className="text-sm hover:text-amber-600 transition">Write For Us</a>
        <a href="#" className="text-sm hover:text-amber-600 transition">Contact Us</a>
        <a href="#" className="text-sm hover:text-amber-600 transition">Privacy Policy</a>
      </div>

      {/* Right section */}
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl text-amber-500 font-semibold">More on MNTN</h3>
        <a href="#" className="text-sm hover:text-amber-600 transition">The team</a>
        <a href="#" className="text-sm hover:text-amber-600 transition">Jobs</a>
        <a href="#" className="text-sm hover:text-amber-600 transition">Press</a>
      </div>
      <p className="mt-8 text-white">Made by Muhammad Shaheer</p>
    </footer>
  );
};

export default Footer;
