import React from 'react';
import { DetailItem } from '../types';

const services = [
  {
    title: "Legal Consultation & Advisory",
    description: "Professional guidance with strategic direction tailored to your unique legal circumstances.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop",
    content: "Our consultancy service offers privileged access to lead council for deep diagnostic reviews of your current legal standing. We provide actionable, high-level roadmaps to mitigate risk and establish institutional clarity."
  },
  {
    title: "Corporate & Commercial Law",
    description: "Comprehensive support for company formation, governance, and institutional corporate advisory.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    content: "We provide the architecture for robust institutional frameworks, facilitating mergers, acquisitions, and restructuring with absolute precision. Our corporate team ensures your governance models are both resilient and future-proof."
  },
  {
    title: "Contract Drafting & Review",
    description: "Protecting your long-term interests through precise documentation and rigorous legal review.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
    content: "A contract is more than paper; it is a shield. We draft every document with extreme attention to detail, identifying potential liabilities and optimizing language for absolute institutional protection."
  },
  {
    title: "Regulatory Compliance",
    description: "Ensuring adherence to applicable laws and evolving jurisdictional regulations with absolute precision.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
    content: "In a world of rapidly changing laws, we provide the steady guidance needed to remain compliant across multiple jurisdictions. We specialize in complex regional frameworks and international standards."
  },
  {
    title: "Employment & Labor Law Advisory",
    description: "Strategic guidance on workplace compliance, labor relations, and delicate dispute resolution.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    content: "We protect both the institution and the workforce through fair, strategic, and legally sound labor agreements. Our mediation services resolve workplace conflicts before they escalate to public liability."
  },
  {
    title: "Dispute Resolution & Legal Strategy",
    description: "High-value strategic positioning and resolution planning for complex institutional conflicts.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    img: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?q=80&w=800&auto=format&fit=crop",
    content: "When conflicts arise, we prioritize strategic resolution that preserves relationships and institutional reputation. Our approach combines aggressive advocacy with refined mediation techniques."
  }
];

interface LegalServicesProps {
  isStandalone?: boolean;
  onNavigate?: (view: 'landing' | 'practice-areas' | 'services' | 'about' | 'contact', sectionId?: string) => void;
  onShowDetail?: (item: DetailItem) => void;
}

const LegalServices: React.FC<LegalServicesProps> = ({ isStandalone = false, onNavigate, onShowDetail }) => {
  return (
    <section id="services" className={`py-40 ${isStandalone ? 'bg-transparent' : 'bg-[#1a1410]'} relative overflow-hidden transition-all duration-1000`}>
      <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${isStandalone ? 'bg-[url("https://www.transparenttextures.com/patterns/natural-linen.png")]' : 'bg-[url("https://www.transparenttextures.com/patterns/dark-leather.png")]'}`} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {!isStandalone && (
          <div className="flex flex-col md:flex-row justify-between items-end mb-32">
            <div className="max-w-2xl">
              <span className="text-[#d4af37] font-bold tracking-[0.6em] text-[10px] uppercase mb-6 block">Service Portfolio</span>
              <h2 className="text-5xl md:text-8xl font-serif text-white uppercase tracking-tighter leading-none mb-8">Strategic <br />Advocacy</h2>
              <p className="text-[#d4c4b5]/60 text-xl font-light leading-relaxed italic border-l-2 border-[#d4af37]/30 pl-10 py-2">
                Providing the bedrock of clarity upon which <br />institutional stability is established.
              </p>
            </div>
            <div className="h-[1px] flex-grow mx-20 mb-10 bg-gradient-to-r from-[#d4af37]/40 via-[#d4af37]/10 to-transparent hidden lg:block" />
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 ${isStandalone ? 'pt-10' : ''}`}>
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden transition-all duration-1000 h-[650px] flex flex-col justify-end p-12 md:p-16 cursor-pointer shadow-2xl border backdrop-blur-sm ${
                isStandalone 
                  ? 'bg-[#1a1410]/40 border-[#d4af37]/10 hover:border-[#d4af37]/40' 
                  : 'bg-[#1e1611]/80 border-[#d4af37]/10 hover:border-[#d4af37]/40'
              }`}
              onClick={() => onShowDetail?.({
                title: service.title,
                subtitle: "Core Service Brief",
                content: service.content,
                image: service.img
              })}
            >
              <div 
                className={`absolute inset-0 transition-all duration-1000 bg-cover bg-center scale-110 group-hover:scale-100 filter brightness-[0.5] group-hover:brightness-75 blur-[4px] group-hover:blur-0 opacity-40 group-hover:opacity-100`}
                style={{ backgroundImage: `url('${service.img}')` }}
              />
              <div className={`absolute inset-0 transition-colors duration-1000 bg-gradient-to-t from-[#0c0907] via-[#0c0907]/70 to-transparent opacity-90`} />
              <div className="absolute inset-0 border border-[#d4af37]/0 group-hover:border-[#d4af37]/20 transition-all duration-700" />

              <div className="relative z-10 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <div className={`w-20 h-20 flex items-center justify-center mb-10 bg-[#1a1410]/80 group-hover:bg-[#d4af37] transition-all duration-700 shadow-xl border border-[#d4af37]/20 group-hover:border-transparent`}>
                  <svg className={`w-10 h-10 text-[#d4af37] group-hover:text-[#1a1410] transition-colors duration-700`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d={service.icon} />
                  </svg>
                </div>
                
                <h3 className={`text-3xl font-serif text-white mb-6 group-hover:text-[#d4af37] transition-colors tracking-[0.1em] uppercase leading-tight drop-shadow-lg`}>
                  {service.title}
                </h3>
                
                <p className={`text-[#d4c4b5]/60 text-base font-light leading-relaxed group-hover:text-white transition-colors duration-700`}>
                  {service.description}
                </p>
                
                <div className="mt-12 flex items-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-1000 delay-100 translate-x-[-10px] group-hover:translate-x-0">
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#d4af37]">Review Protocol</span>
                  <div className="h-px w-16 bg-[#d4af37] animate-in slide-in-from-left" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalServices;