
import React from 'react';

const Guide: React.FC = () => {
  return (
    <section className="py-24 md:py-40 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="max-w-3xl mb-16">
          <span className="text-[#28A745] font-extrabold uppercase tracking-widest text-sm mb-4 block">Our Solution</span>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 text-[#11311F] leading-none">
            You don’t need more storage. <br />
            You need <span className="text-[#28A745]">peace of mind</span>.
          </h2>
          <p className="text-xl md:text-2xl text-[#4A5D4E] font-medium leading-relaxed">
            Binthere captures what matters, organizes it automatically, and gently guides you through the decision so you feel confident letting the paper go.
          </p>
        </div>
        
        <div className="w-full relative flex justify-center py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {[
              "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?q=80&w=400&auto=format&fit=crop"
            ].map((url, i) => (
              <div key={i} className="group relative">
                <div className="absolute -inset-1 bg-[#28A745] rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border-4 border-white">
                  <img src={url} className="w-full aspect-[3/4] object-cover" alt={`Gallery ${i}`} />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#11311F] to-transparent">
                    <div className="h-1 w-12 bg-[#28A745] rounded-full"></div>
                  </div>
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
