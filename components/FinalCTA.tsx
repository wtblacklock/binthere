
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-40 md:py-64 px-8 text-center bg-[#FEFBF7] relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl md:text-9xl font-serif-title font-semibold tracking-tight leading-[1.15] mb-20 text-[#4A4A4A]">
          Save the memory. <br />
          <span className="text-[#87A96B]">Let go</span> with confidence.
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-gradient-to-r from-[#87A96B] to-[#6B8E5A] text-white px-12 py-5 rounded-full text-base font-medium hover:shadow-lg transition-all duration-300 shadow-md">
            Try it free
          </button>
          <button className="bg-[#FEFBF7] border-2 border-[#E8E0D5] text-[#5A5A5A] px-12 py-5 rounded-full text-base font-medium hover:bg-[#FAF7F2] transition-all duration-300 shadow-sm">
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
