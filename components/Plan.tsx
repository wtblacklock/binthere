
import React from 'react';

const Plan: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Acknowledge the moment",
      body: "Take a photo or upload the artwork as it comes home.",
      note: "You're saying this mattered."
    },
    {
      number: "02",
      title: "Give it context",
      body: "Optionally add your child's name or a short note.",
      note: "This turns a picture into a memory."
    },
    {
      number: "03",
      title: "Receive confirmation",
      body: "Binthere saves and organizes the artwork automatically, then gives you a calm confirmation that the memory is safe and handled.",
      note: "This closes the mental loop."
    },
    {
      number: "04",
      title: "Let go with confidence",
      body: "Once it's saved, you're free to recycle the original without guilt or second guessing.",
      note: "The decision is complete."
    },
    {
      number: "05",
      title: "Revisit or celebrate later",
      body: "Browse your timeline anytime or turn moments into prints and keepsakes when you want to celebrate them.",
      note: "No pressure. No urgency."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 md:py-40 bg-gradient-to-b from-[#FEFBF7] to-[#FAF7F2] px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-serif-title font-semibold tracking-tight mb-28 text-[#4A4A4A] text-center">Five simple steps.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-10">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl font-bold text-[#87A96B] tracking-tight">{step.number}</span>
                <div className="h-px flex-grow bg-[#E8E0D5] group-hover:bg-[#87A96B] transition-colors duration-500"></div>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-serif-title font-semibold mb-5 text-[#4A4A4A]">{step.title}</h3>
                <p className="text-base md:text-lg text-[#6B6B6B] font-normal mb-4" style={{ lineHeight: '1.7' }}>
                  {step.body}
                </p>
                <p className="text-sm md:text-base text-[#8B8B8B] font-normal italic" style={{ lineHeight: '1.7' }}>
                  {step.note}
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
