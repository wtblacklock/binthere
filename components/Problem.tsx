
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#11311F] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute inset-0 border-2 border-[#28A745] rounded-2xl transform translate-x-4 translate-y-4 -z-0"></div>
            <img 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=800&auto=format&fit=crop" 
              alt="Tired parent with artwork" 
              className="relative z-10 rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-8">
              The artwork piles up. <br />
              The <span className="text-[#28A745]">guilt</span> comes with it.
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-[#A0B0A5] font-medium leading-relaxed">
              <p>
                Every week brings home more drawings and school projects. Storage becomes stress. Decisions become exhausting. 
              </p>
              <p>
                Throwing things away never feels right, even when you know you can't keep it all. The problem isn't the paper. It's the lack of closure. There's no simple system to help you save the memory, make the decision, and move on confidently.
              </p>
              <p>
                Binthere steps in at that moment and helps you close the loop.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
