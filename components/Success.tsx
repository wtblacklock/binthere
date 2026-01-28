
import React from 'react';

const Success: React.FC = () => {
  const bullets = [
    "A private timeline of creativity over time.",
    "More physical space and less clutter.",
    "Confidence that memories are preserved intentionally.",
    "Peace of mind when it’s time to recycle the originals."
  ];

  return (
    <section className="py-24 md:py-32 bg-[#11311F] text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-12">
            A <span className="text-[#28A745]">calmer home</span> and a meaningful record of growth.
          </h2>
          <ul className="space-y-8">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-5 group">
                <div className="mt-1 w-6 h-6 bg-[#28A745] flex-shrink-0 flex items-center justify-center rounded-sm group-hover:scale-110 transition-transform">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xl text-[#A0B0A5] font-bold leading-tight">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
               <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop" className="rounded-xl w-full h-[320px] object-cover border-4 border-[#1A432D]" alt="Children's artwork" />
               <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop" className="rounded-xl w-full h-[200px] object-cover border-4 border-[#1A432D]" alt="Kids drawing" />
            </div>
            <div className="space-y-4 pt-12">
               <img src="https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=400&auto=format&fit=crop" className="rounded-xl w-full h-[200px] object-cover border-4 border-[#1A432D]" alt="Child's art" />
               <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop" className="rounded-xl w-full h-[320px] object-cover border-4 border-[#1A432D]" alt="Children's artwork collection" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
