
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-gradient-to-br from-[#F5F1EA] to-[#F0EDE5]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div>
            <div className="flex items-center gap-3 text-2xl font-semibold tracking-tight mb-6">
              <div className="w-7 h-7 bg-gradient-to-br from-[#87A96B] to-[#6B8E5A] rounded-lg shadow-sm"></div>
              <span className="font-serif-title text-[#4A4A4A]">Binthere</span>
            </div>
            <p className="text-[#6B6B6B] max-w-xs font-normal text-base" style={{ lineHeight: '1.7' }}>Making space for what matters most by digitizing the past with guilt-free confidence.</p>
          </div>
          <div className="flex gap-12 text-sm font-medium text-[#6B6B6B]">
            <div className="flex flex-col gap-5">
              <a href="#" className="hover:text-[#87A96B] transition-colors duration-300">Privacy</a>
              <a href="#" className="hover:text-[#87A96B] transition-colors duration-300">Terms</a>
            </div>
            <div className="flex flex-col gap-5">
              <a href="#" className="hover:text-[#87A96B] transition-colors duration-300">Instagram</a>
              <a href="#" className="hover:text-[#87A96B] transition-colors duration-300">Contact</a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-[#E8E0D5] flex justify-between items-center text-xs font-normal text-[#8B8B8B]">
        <div>&copy; {new Date().getFullYear()} Binthere.</div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
