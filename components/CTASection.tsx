
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 text-center">
      <div className="max-w-5xl mx-auto bg-[#28A745] text-white rounded-3xl p-12 md:p-24 overflow-hidden relative shadow-2xl">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#11311F]/10 rounded-full blur-2xl"></div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10 relative z-10">
          Clear the space. Keep the moments.
        </h2>
        <div className="relative z-10 flex flex-col items-center">
          <button className="bg-white text-[#28A745] px-12 py-5 rounded-md text-xl font-black hover:bg-[#F8F9F8] transition-all mb-6 shadow-lg uppercase tracking-wider">
            Try it free
          </button>
          <p className="text-white/80 font-bold uppercase tracking-widest text-xs">No credit card. Takes less than a minute.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
