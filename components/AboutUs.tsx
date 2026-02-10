import React from 'react';
import { DetailItem } from '../types';

interface AboutUsProps {
  isStandalone?: boolean;
  onShowDetail?: (item: DetailItem) => void;
  onNavigate?: (view: 'landing' | 'practice-areas' | 'services' | 'about' | 'contact', sectionId?: string) => void;
}

const VerdictaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="gold-gradient-about" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5a2b" />
        <stop offset="30%" stopColor="#d4af37" />
        <stop offset="50%" stopColor="#f7ef8a" />
        <stop offset="70%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8b5a2b" />
      </linearGradient>
    </defs>
    <path d="M15 25 L50 90 L85 25" stroke="url(#gold-gradient-about)" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
    <rect x="46" y="35" width="8" height="45" fill="url(#gold-gradient-about)" />
    <rect x="42" y="32" width="16" height="4" fill="url(#gold-gradient-about)" />
    <rect x="42" y="78" width="16" height="4" fill="url(#gold-gradient-about)" />
    <path d="M28 35 L72 35" stroke="url(#gold-gradient-about)" strokeWidth="2.5" />
    <path d="M28 35 L20 60 Q28 65 36 60 Z" fill="url(#gold-gradient-about)" opacity="0.9" />
    <path d="M72 35 L64 60 Q72 65 80 60 Z" fill="url(#gold-gradient-about)" opacity="0.9" />
  </svg>
);

const AboutUs: React.FC<AboutUsProps> = ({ isStandalone = false, onShowDetail, onNavigate }) => {
  const coreValues = [
    {
      title: "Integrity",
      subtitle: "Unwavering Ethics",
      desc: "Operating with the highest standard of moral and professional conduct.",
      content: "Integrity is our cornerstone. We ensure that every action and advisory is rooted in deep ethical standards and legal precision."
    },
    {
      title: "Excellence",
      subtitle: "Superior Advocacy",
      desc: "Dedicated to achieving the best possible results through rigorous analysis.",
      content: "We strive for excellence in every brief. Our team utilizes advanced legal research and strategic foresight to protect your interests."
    },
    {
      title: "Discretion",
      subtitle: "Absolute Privacy",
      desc: "Your mandates are handled with the utmost confidentiality and privilege.",
      content: "Privacy is paramount. Our firm's protocols ensure that sensitive institutional data remains strictly confidential at all times."
    },
    {
      title: "Innovation",
      subtitle: "Strategic Foresight",
      desc: "Adapting traditional law to modern business and technological challenges.",
      content: "The legal landscape is evolving. We combine traditional legal wisdom with modern strategic tools to solve the challenges of tomorrow."
    }
  ];

  return (
    <section id="about" className={`py-20 md:py-32 ${isStandalone ? 'bg-transparent' : 'bg-[#0a0806]'} relative overflow-hidden transition-colors duration-1000`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center mb-24 lg:mb-32">
          
          <div className="w-full lg:w-1/2 relative">
            {/* Desktop Overlapping Grid */}
            <div className="hidden md:grid grid-cols-12 grid-rows-12 gap-8 h-[600px] lg:h-[750px]">
              <div 
                className={`col-start-1 col-end-11 row-start-1 row-end-9 overflow-hidden group shadow-4xl border-4 cursor-pointer ${isStandalone ? 'border-white' : 'border-[#0c0907]'}`}
                onClick={() => onShowDetail?.({
                  title: "Founded on Excellence",
                  subtitle: "Our Heritage",
                  content: "Verdicta was established to provide clear, actionable legal advice for a complex global market. Our history is one of consistent success and client trust.",
                  image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=800"
                })}
              >
                <img 
                  src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=800&auto=format&fit=crop" 
                  alt="Lady Justice" 
                  className="w-full h-full object-cover brightness-[0.5] group-hover:brightness-100 transition-all duration-1000"
                />
              </div>
              <div 
                className={`col-start-3 col-end-13 row-start-6 row-end-13 overflow-hidden border-[12px] group z-20 shadow-4xl cursor-pointer ${isStandalone ? 'border-white' : 'border-[#0c0907]'}`}
                onClick={() => onShowDetail?.({
                  title: "Modern Advocacy",
                  subtitle: "Future Ready",
                  content: "We provide the strategic positioning necessary for modern enterprises to thrive in highly regulated environments.",
                  image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800"
                })}
              >
                <img 
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop" 
                  alt="Modern Advocacy" 
                  className="w-full h-full object-cover brightness-[0.5] group-hover:brightness-100 transition-all duration-1000 filter grayscale group-hover:grayscale-0"
                />
              </div>
            </div>

            {/* Mobile Simplified Grid */}
            <div className="md:hidden space-y-4">
               <div className="relative h-72 overflow-hidden shadow-2xl border border-white/10">
                  <img 
                    src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=800&auto=format&fit=crop" 
                    alt="Lady Justice" 
                    className="w-full h-full object-cover brightness-75"
                  />
               </div>
               <div className="relative h-48 overflow-hidden shadow-2xl border border-white/10 ml-8 -mt-12 z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop" 
                    alt="Modern Advocacy" 
                    className="w-full h-full object-cover brightness-75"
                  />
               </div>
            </div>

            <div className={`absolute -bottom-6 -left-4 md:-bottom-12 md:-left-12 p-8 md:p-16 z-30 shadow-4xl border-2 border-[#d4af37]/40 ${isStandalone ? 'bg-[#1a1410] text-white' : 'bg-[#d4af37] text-[#1a1410]'}`}>
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] md:tracking-[0.5em] uppercase block mb-2 md:mb-4 opacity-70">Heritage Since</span>
              <span className="text-5xl md:text-8xl font-serif font-bold block tracking-tighter leading-none">1999</span>
              <div className={`w-12 md:w-20 h-[2px] mt-4 md:mt-8 ${isStandalone ? 'bg-[#d4af37]' : 'bg-[#1a1410]'}`} />
            </div>
          </div>

          <div className="w-full lg:w-1/2 pt-12 md:pt-0">
            <span className={`font-bold tracking-[0.6em] md:tracking-[0.8em] text-[10px] md:text-[11px] uppercase mb-6 md:mb-8 block ${isStandalone ? 'text-[#8b4513]' : 'text-[#d4af37]'}`}>Our Professional Identity</span>
            <h2 className={`text-5xl md:text-8xl font-serif mt-4 mb-8 md:mb-12 uppercase tracking-tight leading-[0.9] md:leading-[0.85] ${isStandalone ? 'text-[#1a1410]' : 'text-white'}`}>
              Advocacy <br />Through <span className={`${isStandalone ? 'text-[#8b4513]' : 'text-[#d4af37]'}`}>Integrity</span>
            </h2>
            
            <div className="space-y-8 md:space-y-12 pl-6 md:pl-12 border-l-2 border-[#d4af37]/20">
              <p className={`text-lg md:text-2xl font-light leading-relaxed italic ${isStandalone ? 'text-[#5c4a3a]' : 'text-[#d4c4b5]/90'}`}>
                "Justice is not just an outcome, but a process built on absolute clarity and trust."
              </p>
              
              <p className={`text-base md:text-lg font-light leading-relaxed ${isStandalone ? 'text-[#5c4a3a]/80' : 'text-[#d4c4b5]/60'}`}>
                Verdicta Legal Consultants represents the gold standard in modern legal advisory. Our firm is dedicated to providing strategic advocacy that preserves your interests and fortifies your legacy.
              </p>

              <div className="flex flex-wrap gap-8 md:gap-12 pt-8 md:pt-12 border-t border-[#d4af37]/10">
                <div className="group cursor-pointer" onClick={() => onNavigate?.('landing', 'contact')}>
                  <h4 className={`font-serif text-base md:text-lg uppercase tracking-widest mb-3 md:mb-4 ${isStandalone ? 'text-[#1a1410]' : 'text-white'}`}>Consultation</h4>
                  <div className="h-px w-8 bg-[#d4af37] mb-3 md:mb-4 group-hover:w-full transition-all duration-700" />
                  <p className={`text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity ${isStandalone ? 'text-[#1a1410]' : 'text-[#d4c4b5]'}`}>Inquire Now</p>
                </div>
                <div className="group cursor-pointer" onClick={() => onNavigate?.('practice-areas')}>
                   <h4 className={`font-serif text-base md:text-lg uppercase tracking-widest mb-3 md:mb-4 ${isStandalone ? 'text-[#1a1410]' : 'text-white'}`}>Expertise</h4>
                   <div className="h-px w-8 bg-[#d4af37] mb-3 md:mb-4 group-hover:w-full transition-all duration-700" />
                   <p className={`text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase opacity-40 group-hover:opacity-100 transition-opacity ${isStandalone ? 'text-[#1a1410]' : 'text-[#d4c4b5]'}`}>View Specialisms</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-40">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 md:mb-20">
             <div className="hidden md:block h-px flex-grow bg-gradient-to-r from-transparent to-[#d4af37]/30" />
             <h3 className={`text-3xl md:text-6xl font-serif uppercase tracking-[0.2em] md:tracking-[0.3em] px-0 md:px-12 mb-6 md:mb-0 ${isStandalone ? 'text-[#1a1410]' : 'text-white'}`}>
               Our <span className="text-[#d4af37]">Core Values</span>
             </h3>
             <div className="hidden md:block h-px flex-grow bg-gradient-to-l from-transparent to-[#d4af37]/30" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {coreValues.map((value, i) => (
              <div 
                key={i}
                className={`group p-8 md:p-12 transition-all duration-1000 cursor-pointer flex flex-col items-center text-center rounded-sm ${
                  isStandalone 
                  ? 'hover:bg-white border border-black/5 shadow-xl' 
                  : 'hover:bg-[#d4af37]/5 border border-[#d4af37]/10 shadow-2xl'
                }`}
                onClick={() => onShowDetail?.({
                  title: value.title,
                  subtitle: value.subtitle,
                  content: value.content
                })}
              >
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-6 md:mb-10 transition-all duration-700 border-2 ${
                  isStandalone 
                  ? 'border-[#1a1410]/20 group-hover:bg-[#1a1410] group-hover:text-white' 
                  : 'border-[#d4af37]/20 group-hover:bg-[#d4af37] group-hover:text-[#1a1410]'
                }`}>
                  <span className="text-xl md:text-2xl font-serif">{value.title.charAt(0)}</span>
                </div>
                <h4 className={`text-2xl md:text-3xl font-serif uppercase tracking-widest mb-4 md:mb-6 ${isStandalone ? 'text-[#1a1410]' : 'text-white'}`}>
                  {value.title}
                </h4>
                <p className={`text-[10px] md:text-[11px] font-bold tracking-[0.2em] leading-relaxed uppercase opacity-40 group-hover:opacity-100 transition-all duration-700 ${isStandalone ? 'text-[#1a1410]' : 'text-[#d4c4b5]'}`}>
                  {value.subtitle}
                </p>
                <div className="mt-8 md:mt-10 h-[1px] w-8 md:w-12 bg-[#d4af37] opacity-0 group-hover:opacity-100 group-hover:w-24 transition-all duration-1000" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;