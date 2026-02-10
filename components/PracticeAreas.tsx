
import React from 'react';
import { DetailItem } from '../types';

const practiceAreas = [
  {
    title: "Arbitration & Mediation",
    description: "Resolving complex disputes through strategic negotiation and neutral advisory.",
    image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800&auto=format&fit=crop",
    content: "We excel in navigating high-stakes international and domestic arbitration. Our mediation approach is built on psychological insight and deep legal precedent to find common ground."
  },
  {
    title: "Banking & Finance",
    description: "Sophisticated advisory on capital preservation and fiscal governance.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    content: "Supporting institutional lenders and private entities in capital market transactions. We provide the expertise needed for asset-backed financing and financial restructuring."
  },
  {
    title: "Employment Law",
    description: "Ensuring workforce stability and institutional compliance.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800&auto=format&fit=crop",
    content: "From executive contracts to collective bargaining, we handle all facets of the employment relationship, ensuring a compliant and motivated environment."
  },
  {
    title: "Criminal Defense",
    description: "Vigorous protection of individual rights and institutional reputation.",
    image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=800&auto=format&fit=crop",
    content: "Specializing in white-collar defense and high-stakes investigations. We prioritize institutional integrity through sophisticated, aggressive advocacy."
  },
  {
    title: "Real Estate & Property",
    description: "Expert guidance for high-value asset acquisition and management.",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800&auto=format&fit=crop",
    content: "Navigating the complexities of property law with precision. We handle multi-million dollar transactions and zoning laws for commercial estates."
  },
  {
    title: "Venture Capital",
    description: "Advising the next generation of industry leaders and innovators.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    content: "Supporting the pioneers of tomorrow. We build the legal foundations for innovation, handling intellectual property audits and exit planning."
  }
];

interface PracticeAreasProps {
  isStandalone?: boolean;
  onShowDetail?: (item: DetailItem) => void;
}

const PracticeAreas: React.FC<PracticeAreasProps> = ({ isStandalone = false, onShowDetail }) => {
  return (
    <section id="practice-areas" className={`py-40 ${isStandalone ? 'bg-transparent' : 'bg-[#0c0907] border-y border-white/5'} relative overflow-hidden transition-all duration-1000`}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col ${isStandalone ? 'items-center text-center' : 'lg:flex-row items-start'} gap-24 mb-32`}>
          <div className={`${isStandalone ? 'max-w-4xl' : 'lg:w-[35%]'}`}>
            {!isStandalone && (
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-8 bg-[#d4af37]" />
                <span className="text-[#d4af37] font-bold tracking-[0.6em] text-[10px] uppercase">Areas of Practice</span>
              </div>
            )}
            <h2 className={`font-serif uppercase tracking-[0.2em] leading-tight ${isStandalone ? 'text-6xl md:text-8xl text-[#1a1410] mb-12' : 'text-5xl md:text-7xl text-white mb-10'}`}>
              Professional <br /><span className={`${isStandalone ? 'text-[#8b6d4d]' : 'text-[#d4af37]'}`}>Specialisms</span>
            </h2>
            {!isStandalone && (
              <p className="text-[#d4c4b5]/60 font-light leading-relaxed text-lg italic pl-8 border-l border-[#d4af37]/20">
                Strategic legal solutions tailored for <br />institutional and private mandates.
              </p>
            )}
          </div>

          <div className={`${isStandalone ? 'w-full' : 'lg:w-[65%]'} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12`}>
            {practiceAreas.map((area, i) => (
              <div 
                key={i} 
                className={`group flex flex-col transition-all duration-700 hover:-translate-y-3 cursor-pointer border border-white/5 ${isStandalone ? 'bg-white shadow-xl' : 'bg-transparent'}`}
                onClick={() => onShowDetail?.({
                  title: area.title,
                  subtitle: "Practice Brief",
                  content: area.content,
                  image: area.image
                })}
              >
                <div className="h-80 w-full overflow-hidden relative shadow-2xl">
                   <img src={area.image} alt={area.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                   
                   <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-2xl font-serif tracking-widest uppercase mb-4 text-white">
                        {area.title}
                      </h3>
                      <div className="h-px w-0 group-hover:w-full bg-[#d4af37] transition-all duration-700" />
                   </div>
                </div>
                <div className={`pt-8 px-4 ${isStandalone ? 'bg-white' : 'bg-transparent'}`}>
                  <p className={`text-[11px] uppercase tracking-[0.3em] font-bold leading-relaxed transition-colors ${isStandalone ? 'text-[#1a1410]/70' : 'text-[#d4c4b5]/40 group-hover:text-[#d4c4b5]/80'}`}>
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-32 p-16 relative overflow-hidden text-center border ${isStandalone ? 'border-[#1a1410]/10 bg-white/40' : 'border-white/5 bg-white/5'}`}>
           <p className={`text-2xl font-serif italic mb-10 tracking-widest ${isStandalone ? 'text-[#1a1410]' : 'text-white'}`}>
             "The law is a tool of progress; Verdicta is your strategic partner in navigating it."
           </p>
           <span className="text-[10px] font-bold tracking-[0.6em] uppercase text-[#d4af37]">Established Global Practice</span>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
