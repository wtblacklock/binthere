
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFBF7]/95 backdrop-blur-sm border-b border-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        <div className="flex items-center gap-3 text-xl font-semibold tracking-tight text-[#5A5A5A]">
          <div className="w-7 h-7 bg-gradient-to-br from-[#87A96B] to-[#6B8E5A] rounded-lg shadow-sm"></div>
          <span className="font-serif-title text-[#4A4A4A]">Binthere</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#6B6B6B]">
          <a href="#how-it-works" className="hover:text-[#87A96B] transition-colors duration-300">How it works</a>
          <a href="#about" className="hover:text-[#87A96B] transition-colors duration-300">About</a>
          <button className="bg-gradient-to-r from-[#87A96B] to-[#6B8E5A] text-white px-6 py-3 rounded-full hover:shadow-md transition-all duration-300 font-medium shadow-sm">
            Try it free
          </button>
        </div>
        <div className="md:hidden">
            <button className="p-2 text-[#5A5A5A]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
