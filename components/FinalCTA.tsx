
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-32 md:py-64 px-6 text-center bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4E7D0]/20 rounded-full blur-[120px] -z-10"></div>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] mb-16 text-[#11311F]">
          Save the memory. <br />
          <span className="text-[#28A745]">Let go</span> of the paper.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-[#28A745] text-white px-14 py-6 rounded-md text-xl font-black hover:bg-[#1E7E34] transition-all shadow-2xl shadow-[#28A745]/30 uppercase tracking-widest">
            Try it free
          </button>
          <button className="bg-white border-2 border-[#E8EEE9] text-[#11311F] px-14 py-6 rounded-md text-xl font-black hover:bg-[#F8F9F8] transition-all uppercase tracking-widest">
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
