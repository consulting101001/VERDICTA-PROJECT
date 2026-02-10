import React from 'react';
import { DetailItem } from '../types';

interface WhoWeAreProps {
  onShowDetail?: (item: DetailItem) => void;
}

const WhoWeAre: React.FC<WhoWeAreProps> = ({ onShowDetail }) => {
  const vows = [
    { title: "Precision", desc: "Absolute jurisdictional accuracy in every mandate.", content: "Our precision is built on decades of regulatory analysis and a deep understanding of evolving international laws. We leave nothing to chance." },
    { title: "Architecture", desc: "Strategic conflict resolution by design.", content: "We design legal solutions that look ahead, ensuring that current resolutions don't create future liabilities." },
    { title: "Discretion", desc: "Privileged institutional relations at the highest level.", content: "Privacy is our bedrock. Our internal protocols exceed standard attorney-client privilege to protect your institutional integrity." },
    { title: "Governance", desc: "Tailored models for long-term legacy protection.", content: "Inheritance and corporate governance require a steady hand. We build frameworks that survive generations." }
  ];

  return (
    <section id="introduction" className="py-40 bg-[#0c0907] relative overflow-hidden transition-all duration-1000">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-32 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-[#d4af37] font-bold tracking-[0.6em] text-[11px] uppercase block mb-6">Foundational Excellence</span>
            <h2 className="text-4xl md:text-7xl font-serif text-white leading-tight mb-12 uppercase tracking-tighter">
              Strategic counsel <br />to <span className="text-[#d4af37]">fortify</span> your legacy.
            </h2>
            <div 
              className="relative mb-16 group overflow-hidden shadow-4xl rounded-sm cursor-pointer"
              onClick={() => onShowDetail?.({
                title: "Cinematic Advocacy",
                subtitle: "Firm Vision",
                content: "At Verdicta, we believe the presentation of justice is as important as the outcome. Our legacy is built on the pillars of authority and stability.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200",
                stats: [{ label: "Established", value: "1999" }, { label: "Lead Partners", value: "12" }]
              })}
            >
              <div className="absolute -inset-4 border border-[#d4af37]/10 transform rotate-1 group-hover:rotate-0 transition-all duration-1000" />
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop" 
                alt="Justice Pillars Detail" 
                className="brightness-[0.7] group-hover:brightness-100 transition-all duration-1500 w-full object-cover h-[550px] scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div className="w-24 h-px bg-[#d4af37]" />
                  <span className="text-[10px] text-[#d4af37] font-bold tracking-[0.4em] uppercase opacity-90 drop-shadow-lg">Click to Explore Vision</span>
              </div>
            </div>
            <p className="text-2xl text-[#d4c4b5]/80 font-light leading-relaxed italic border-l-4 border-[#d4af37] pl-12 py-4 font-playfair">
              "We provide the jurisdictional precision necessary to navigate complexity with absolute institutional confidence."
            </p>
          </div>

          <div className="lg:w-1/2 space-y-16">
            <div className="glass-bronze p-16 border border-[#d4af37]/10 relative group shadow-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-[120px] group-hover:bg-[#d4af37]/10 transition-colors" />
              <h3 className="text-white font-serif text-3xl mb-10 uppercase tracking-widest leading-none">A Legacy of <br />Advocacy</h3>
              <p className="text-[#d4c4b5]/60 leading-relaxed font-light mb-12 text-lg">
                Verdicta is more than a consultancy; it is a repository of collective legal wisdom. We support high-net-worth individuals and global enterprises with authoritative frameworks that stand the test of time and shifting jurisdictions.
              </p>
              <div className="grid grid-cols-2 gap-10">
                <div 
                  className="relative h-56 overflow-hidden border border-[#d4af37]/10 shadow-xl group/img cursor-pointer"
                  onClick={() => onShowDetail?.({
                    title: "Legal Authority",
                    subtitle: "Institutional Core",
                    content: "Our authority is recognized across multiple jurisdictions, providing our clients with a powerful shield in complex negotiations.",
                    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500"
                  })}
                >
                  <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=500&auto=format&fit=crop" className="h-full w-full object-cover brightness-75 group-hover/img:brightness-100 transition-all duration-1000 group-hover/img:scale-110" alt="Authority" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] to-transparent opacity-50" />
                  <div className="absolute bottom-0 left-0 bg-[#d4af37] text-[#1a1410] text-[9px] px-4 py-2 font-bold uppercase tracking-widest">Authority</div>
                </div>
                <div 
                  className="relative h-56 overflow-hidden border border-[#d4af37]/10 shadow-xl group/img cursor-pointer"
                  onClick={() => onShowDetail?.({
                    title: "Regional Stability",
                    subtitle: "Strategic HUB",
                    content: "Located in the heart of the UAE, we provide the stability necessary for global enterprises to thrive in the Middle East.",
                    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=500"
                  })}
                >
                  <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=500&auto=format&fit=crop" className="h-full w-full object-cover brightness-75 group-hover/img:brightness-100 transition-all duration-1000 group-hover/img:scale-110" alt="Stability" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0907] to-transparent opacity-50" />
                  <div className="absolute bottom-0 left-0 bg-[#d4af37] text-[#1a1410] text-[9px] px-4 py-2 font-bold uppercase tracking-widest">Stability</div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <h3 className="text-[#d4af37] font-serif text-2xl uppercase tracking-widest">The Verdicta Vow</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {vows.map((item, i) => (
                  <div 
                    key={i} 
                    className="group cursor-pointer"
                    onClick={() => onShowDetail?.({
                      title: item.title,
                      subtitle: "The Verdicta Vow",
                      content: item.content
                    })}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 border border-[#d4af37]/30 flex items-center justify-center group-hover:bg-[#d4af37] group-hover:border-transparent transition-all duration-500">
                        <svg className="w-4 h-4 text-[#d4af37] group-hover:text-[#1a1410]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-white text-[11px] font-bold tracking-[0.4em] uppercase">{item.title}</span>
                    </div>
                    <p className="text-[#d4c4b5]/30 text-[10px] uppercase tracking-widest font-bold leading-relaxed group-hover:text-[#d4c4b5]/60 transition-colors">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;