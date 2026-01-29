
import React from 'react';

const Guide: React.FC = () => {
  return (
    <section className="py-32 md:py-48 overflow-hidden bg-[#FEFBF7]">
      <div className="max-w-7xl mx-auto px-8 flex flex-col items-center text-center">
        <div className="max-w-5xl mb-20">
          <span className="text-[#A8A8A8] font-medium uppercase tracking-wider text-xs mb-6 block">Our Solution</span>
          <h2 className="text-5xl md:text-7xl font-serif-title font-semibold tracking-tight mb-10 text-[#4A4A4A] leading-[1.15]">
            You don't need more storage. <br />
            You need <span className="text-[#87A96B]">peace of mind</span>.
          </h2>
          <p className="text-xl md:text-2xl text-[#6B6B6B] font-normal" style={{ lineHeight: '1.7' }}>
            Binthere captures what matters, organizes it automatically, and gently guides you through the decision so you feel confident letting the paper go.
          </p>
        </div>
        
        <div className="w-full relative flex justify-center py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">
            {[
              "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=400&auto=format&fit=crop"
            ].map((url, i) => (
              <div key={i} className="group relative">
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                  <img src={url} className="w-full aspect-[3/4] object-cover" alt={`Gallery ${i}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
