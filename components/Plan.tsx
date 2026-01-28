
import React from 'react';

const Plan: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Capture",
      body: "Capture the artwork with your phone or upload a photo."
    },
    {
      number: "02",
      title: "Preserve",
      body: "Binthere cleans and saves it into a private timeline."
    },
    {
      number: "03",
      title: "Recycle",
      body: "You get confirmation that the memory is safe and the paper can go."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#F8F9F8] px-6 border-y border-[#E8EEE9]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-24 text-[#11311F]">Three simple steps.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-black text-[#28A745] tracking-tighter">{step.number}</span>
                <div className="h-px flex-grow bg-[#E8EEE9] group-hover:bg-[#28A745] transition-colors duration-500"></div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold mb-4 text-[#11311F]">{step.title}</h3>
                <p className="text-lg text-[#4A5D4E] font-medium leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plan;
