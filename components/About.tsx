
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#2a1b12] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
        <img src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6986bf3c47965621f47f7b05/bb0b12bc5_logo.png" className="w-full h-auto filter grayscale" alt="" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2 relative">
          <div className="absolute -inset-4 border border-[#d4af37]/30 z-0 transform rotate-3" />
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
            alt="Consultant Workspace" 
            className="relative z-10 grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl"
          />
          <div className="absolute bottom-8 -right-8 bg-[#d4af37] p-8 text-[#1a1410] z-20 hidden md:block shadow-2xl">
            <span className="text-4xl font-serif font-bold block">25+</span>
            <span className="text-xs font-bold tracking-widest uppercase">Years of Service</span>
          </div>
        </div>
        
        <div className="lg:w-1/2">
          <span className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase">Legacy of Trust</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-8">Professional Excellence, Personal Integrity</h2>
          <p className="text-[#d4c4b5] text-lg font-light leading-relaxed mb-6">
            Verdicta Legal Consultants was founded on the principle that legal advice should be accessible, clear, and unyielding in its quality. We represent the gold standard in consultancy, bridging the gap between complex legal code and practical business reality.
          </p>
          <p className="text-[#d4c4b5] text-lg font-light leading-relaxed mb-10 italic border-l-2 border-[#d4af37] pl-6">
            "We don't just solve problems; we build the frameworks that prevent them. Your success is the verdict we strive for every day."
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col">
              <span className="text-[#d4af37] font-serif text-2xl">1,200+</span>
              <span className="text-xs text-[#d4c4b5]/60 uppercase tracking-widest">Successful Cases</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[#d4af37] font-serif text-2xl">98%</span>
              <span className="text-xs text-[#d4c4b5]/60 uppercase tracking-widest">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
