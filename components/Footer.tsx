
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-[#11311F] text-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <div className="text-3xl font-black tracking-tighter mb-4">
            BIN<span className="text-[#28A745]">THERE</span>
          </div>
          <p className="text-[#A0B0A5] max-w-xs font-medium">Making space for what matters most by digitizing the past with guilt-free confidence.</p>
        </div>
        <div className="flex gap-12 text-sm font-bold uppercase tracking-widest">
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-[#28A745] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#28A745] transition-colors">Terms</a>
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="hover:text-[#28A745] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#28A745] transition-colors">Contact</a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-white/40">
        <div>&copy; {new Date().getFullYear()} Binthere.</div>
        <div>All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
