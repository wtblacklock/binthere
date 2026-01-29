
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-32 md:py-48 px-8 text-center">
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#87A96B] to-[#6B8E5A] text-white rounded-3xl p-16 md:p-24 overflow-hidden relative shadow-xl">
        <h2 className="text-5xl md:text-7xl font-serif-title font-semibold tracking-tight leading-[1.15] mb-12 relative z-10">
          Clear the space. Keep the moments.
        </h2>
        <div className="relative z-10 flex flex-col items-center">
          <button className="bg-white text-[#87A96B] px-12 py-5 rounded-full text-base font-medium hover:shadow-lg transition-all duration-300 mb-8 shadow-md">
            Try it free
          </button>
          <p className="text-white/90 font-normal tracking-wide text-base">No credit card. Takes less than a minute.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
