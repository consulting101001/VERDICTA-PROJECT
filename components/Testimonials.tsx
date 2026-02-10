
import React from 'react';

const testimonials = [
  {
    quote: "Verdicta's approach to corporate litigation saved our merger from a multi-year deadlock. Unparalleled precision.",
    author: "Elena Sterling",
    role: "CEO, Sterling Dynamics",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Professionalism redefined. They handle complex estate matters with a level of care and discretion I've never seen before.",
    author: "Marcus Thorne",
    role: "Private Investor",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "The only firm that truly understands the intersection of modern technology and traditional law.",
    author: "Dr. Adrian Vance",
    role: "Founder, Vance Tech",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1a1410]/90 backdrop-blur-[2px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase">Feedback</span>
          <h2 className="text-4xl font-serif text-white mt-4">Client Testimonials</h2>
          <div className="w-12 h-1 bg-[#d4af37] mx-auto mt-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-10 border border-[#a67c52]/20 bg-[#1a1410]/60 hover:bg-[#1a1410]/80 transition-colors duration-500 relative flex flex-col">
              <div className="text-[#d4af37] text-5xl font-serif absolute top-2 left-6 opacity-20">"</div>
              <p className="text-[#d4c4b5] italic font-light leading-relaxed mb-8 relative z-10 flex-grow">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 border-t border-[#a67c52]/10 pt-6">
                <img src={t.img} alt={t.author} className="w-12 h-12 rounded-full object-cover border border-[#d4af37]/40 shadow-lg" />
                <div>
                  <h4 className="text-[#d4af37] font-bold tracking-widest text-sm uppercase">{t.author}</h4>
                  <p className="text-[#d4c4b5]/40 text-[10px] tracking-widest uppercase mt-1">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
