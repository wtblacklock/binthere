
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#E8EEE9]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-extrabold tracking-tighter text-[#11311F]">
          BIN<span className="text-[#28A745]">THERE</span>
        </div>
        <div className="hidden md:flex items-center space-x-10 text-sm font-bold uppercase tracking-wider text-[#4A5D4E]">
          <a href="#how-it-works" className="hover:text-[#28A745] transition-colors">How it works</a>
          <a href="#about" className="hover:text-[#28A745] transition-colors">About</a>
          <button className="bg-[#28A745] text-white px-6 py-3 rounded-md hover:bg-[#1E7E34] transition-all font-bold shadow-sm">
            Try it free
          </button>
        </div>
        <div className="md:hidden">
            <button className="p-2 text-[#11311F]">
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
