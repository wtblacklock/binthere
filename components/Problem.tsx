
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section className="py-32 md:py-40 bg-gradient-to-br from-[#F5F1EA] to-[#F0EDE5] px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=800&auto=format&fit=crop" 
              alt="Tired parent with artwork" 
              className="rounded-3xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-5xl md:text-6xl font-serif-title font-semibold tracking-tight leading-[1.15] mb-10 text-[#4A4A4A]">
              The artwork piles up. <br />
              The <span className="text-[#87A96B]">guilt</span> comes with it.
            </h2>
            <div className="space-y-7 text-lg md:text-xl text-[#6B6B6B] font-normal" style={{ lineHeight: '1.8' }}>
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
