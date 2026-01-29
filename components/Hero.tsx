
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-48 pb-32 md:pt-64 md:pb-40">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-serif-title font-semibold tracking-tight leading-[1.15] mb-8 text-[#4A4A4A]">
            Save the memory. <br />
            <span className="text-[#87A96B]">Let go</span> of the paper.
          </h1>
          <p className="text-xl md:text-2xl text-[#6B6B6B] font-normal leading-relaxed mb-6" style={{ lineHeight: '1.7' }}>
            Binthere helps parents preserve what matters and release the rest with confidence.
          </p>
          <p className="text-lg md:text-xl text-[#8B8B8B] font-normal mb-12 leading-relaxed" style={{ lineHeight: '1.7' }}>
            Capture it once. You're good to let the paper go.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <button className="bg-gradient-to-r from-[#87A96B] to-[#6B8E5A] text-white px-10 py-5 rounded-full text-base font-medium hover:shadow-lg transition-all duration-300 shadow-md">
              Try it free
            </button>
            <button className="bg-[#FEFBF7] border-2 border-[#E8E0D5] text-[#5A5A5A] px-10 py-5 rounded-full text-base font-medium hover:bg-[#FAF7F2] transition-all duration-300 shadow-sm">
              See how it works
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop" 
              alt="Child's artwork" 
              className="w-full aspect-[4/3] object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-[#FEFBF7] p-5 md:p-7 rounded-2xl shadow-xl border border-[#E8E0D5] max-w-[260px] md:max-w-[300px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-gradient-to-br from-[#87A96B] to-[#6B8E5A] rounded-full"></div>
                <span className="text-[11px] font-medium uppercase tracking-wider text-[#8B8B8B]">IN THE VAULT! You may recycle now.</span>
              </div>
              <div className="h-2 w-full bg-[#F0EDE5] rounded-full mb-2"></div>
              <div className="h-2 w-2/3 bg-[#F0EDE5] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
