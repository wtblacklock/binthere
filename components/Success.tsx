
import React from 'react';

const Success: React.FC = () => {
  const bullets = [
    "A private timeline that shows your child's creativity unfolding over time.",
    "More physical space and less visual noise.",
    "Confidence that memories are preserved with intention, not accident.",
    "Peace of mind when it's time to let the originals go."
  ];

  return (
    <section className="py-32 md:py-40 bg-gradient-to-br from-[#F0EDE5] to-[#E8E0D5] px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-serif-title font-semibold tracking-tight leading-[1.15] mb-14 text-[#4A4A4A]">
            A calmer home and a meaningful record of growth.
          </h2>
          <ul className="space-y-7">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-5 group">
                <div className="mt-1 w-6 h-6 bg-gradient-to-br from-[#87A96B] to-[#6B8E5A] flex-shrink-0 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-lg md:text-xl text-[#6B6B6B] font-normal" style={{ lineHeight: '1.7' }}>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-5">
               <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop" className="rounded-3xl w-full h-[320px] object-cover shadow-xl" alt="Children's artwork" />
               <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop" className="rounded-3xl w-full h-[200px] object-cover shadow-xl" alt="Kids drawing" />
            </div>
            <div className="space-y-5 pt-12">
               <img src="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=400&auto=format&fit=crop" className="rounded-3xl w-full h-[200px] object-cover shadow-xl" alt="Child's art" />
               <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop" className="rounded-3xl w-full h-[320px] object-cover shadow-xl" alt="Children's artwork collection" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
