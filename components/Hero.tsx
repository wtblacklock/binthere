
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-24 md:pt-56 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-[#11311F]">
            Save the memory. <br />
            <span className="text-[#28A745]">Let go</span> of the guilt.
          </h1>
          <p className="text-xl md:text-2xl text-[#4A5D4E] font-medium leading-tight mb-4">
            Binthere helps parents preserve what matters and release the rest with confidence.
          </p>
          <p className="text-[#6B7C6E] font-normal mb-10 text-lg">
            Capture it once. You're good to let the paper go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#28A745] text-white px-10 py-5 rounded-md text-lg font-extrabold hover:bg-[#1E7E34] transition-all shadow-xl shadow-[#28A745]/20">
              Try it free
            </button>
            <button className="bg-white border-2 border-[#E8EEE9] text-[#11311F] px-10 py-5 rounded-md text-lg font-bold hover:bg-[#F8F9F8] transition-all">
              See how it works
            </button>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D4E7D0] rounded-full filter blur-3xl opacity-30 -z-10"></div>
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#28A745] to-transparent rounded-2xl -z-10 opacity-20 transform rotate-1"></div>
            <img 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop" 
              alt="Child's artwork" 
              className="w-full aspect-[4/3] object-cover rounded-xl shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-2xl border border-[#E8EEE9] max-w-[280px] hidden md:block">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-[#28A745] rounded-full"></div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B7C6E]">IN THE VAULT! You may recycle now.</span>
              </div>
              <div className="h-2 w-full bg-[#F8F9F8] rounded-full mb-2"></div>
              <div className="h-2 w-2/3 bg-[#F8F9F8] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
