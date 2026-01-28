
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
    <section id="how-it-works" className="py-24 md:py-32 bg-[#F8F9F8] px-6 border-y border-[#E8EEE9]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-24 text-[#11311F]">Five simple steps.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-black text-[#28A745] tracking-tighter">{step.number}</span>
                <div className="h-px flex-grow bg-[#E8EEE9] group-hover:bg-[#28A745] transition-colors duration-500"></div>
              </div>
              <div>
                <h3 className="text-3xl font-extrabold mb-4 text-[#11311F]">{step.title}</h3>
                <p className="text-lg text-[#4A5D4E] font-medium leading-relaxed mb-3">
                  {step.body}
                </p>
                <p className="text-base text-[#6B7C6E] font-medium italic leading-relaxed">
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
