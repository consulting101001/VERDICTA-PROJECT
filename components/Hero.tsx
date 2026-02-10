import React, { useEffect, useState } from 'react';

interface HeroProps {
  onNavigate: (view: 'landing' | 'practice-areas', sectionId?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`,
      delay: `${Math.random() * 8}s`,
      duration: `${Math.random() * 10 + 10}s`,
      opacity: Math.random() * 0.3 + 0.05
    }));
    setParticles(p);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0806]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 hero-image-drift"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071&auto=format&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[150%] h-[100%] light-sweep-effect opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0806_85%)] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806]/80 via-transparent to-[#0a0806]" />
      </div>

      <div className="absolute inset-0 z-20 pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="dust-particle"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animation: `floatDust ${p.duration} linear infinite`,
              animationDelay: p.delay,
              backgroundColor: '#d4af37',
              opacity: p.opacity
            }}
          />
        ))}
      </div>

      <div className="relative z-30 text-center px-6 max-w-7xl">
        <div className="mb-6 md:mb-8 inline-flex flex-col items-center">
          <div className="w-12 md:w-16 h-[1px] bg-[#d4af37] mb-3 md:mb-4" />
          <span className="text-[#d4af37] text-[8px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase">Professional Legal Counsel</span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-white mb-6 md:mb-8 tracking-[0.2em] md:tracking-[0.4em] leading-none uppercase font-serif opacity-95">
          VERDICTA
        </h1>
        
        <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-12">
           <div className="h-px w-6 md:w-10 bg-[#d4af37]/30" />
           <p className="text-xs md:text-lg text-[#d4c4b5]/90 font-serif tracking-[0.2em] md:tracking-[0.3em] uppercase italic">
             Advocacy. Integrity. Excellence.
           </p>
           <div className="h-px w-6 md:w-10 bg-[#d4af37]/30" />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
          <button 
            onClick={() => onNavigate('practice-areas')}
            className="w-full sm:w-auto relative px-8 md:px-12 py-4 md:py-5 bg-transparent border border-[#d4af37] text-[#d4af37] font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] overflow-hidden group transition-all hover:scale-105 shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#1a1410]">View Expertise</span>
            <div className="absolute inset-0 bg-[#d4af37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
          
          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="w-full sm:w-auto relative px-8 md:px-12 py-4 md:py-5 border border-[#d4af37]/20 text-[#d4af37]/70 font-bold tracking-[0.3em] md:tracking-[0.4em] uppercase text-[9px] md:text-[10px] group transition-all duration-500 bg-transparent backdrop-blur-sm"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Consultation</span>
            <div className="absolute inset-0 bg-[#d4af37]/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-4 md:gap-6 opacity-30">
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-t from-[#d4af37] to-transparent" />
        <span className="text-[7px] md:text-[8px] font-bold tracking-[0.4em] md:tracking-[0.6em] text-[#d4af37] uppercase">Explore</span>
      </div>
    </section>
  );
};

export default Hero;