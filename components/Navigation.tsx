import React, { useState, useEffect } from 'react';

interface NavigationProps {
  onNavigate: (view: 'landing' | 'practice-areas' | 'services' | 'about' | 'contact', sectionId?: string) => void;
  currentView: string;
}

const VerdictaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5a2b" />
        <stop offset="30%" stopColor="#d4af37" />
        <stop offset="50%" stopColor="#f7ef8a" />
        <stop offset="70%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8b5a2b" />
      </linearGradient>
    </defs>
    <path d="M15 25 L50 90 L85 25" stroke="url(#gold-gradient)" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
    <rect x="46" y="35" width="8" height="45" fill="url(#gold-gradient)" />
    <rect x="42" y="32" width="16" height="4" fill="url(#gold-gradient)" />
    <rect x="42" y="78" width="16" height="4" fill="url(#gold-gradient)" />
    <path d="M28 35 L72 35" stroke="url(#gold-gradient)" strokeWidth="2.5" />
    <path d="M28 35 L20 60 Q28 65 36 60 Z" fill="url(#gold-gradient)" opacity="0.9" />
    <path d="M72 35 L64 60 Q72 65 80 60 Z" fill="url(#gold-gradient)" opacity="0.9" />
  </svg>
);

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentView }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', view: 'landing' as const },
    { label: 'Services', view: 'services' as const },
    { label: 'About', view: 'about' as const },
    { label: 'Expertise', view: 'practice-areas' as const },
    { label: 'Contact', view: 'contact' as const }
  ];

  const isLanding = currentView === 'landing';
  
  const navBg = isLanding 
    ? (isScrolled ? 'bg-[#0a0806]/95 backdrop-blur-2xl border-[#d4af37]/20 shadow-2xl' : 'bg-transparent border-transparent')
    : 'bg-[#f7f3f0]/95 backdrop-blur-2xl border-[#1a1410]/10 shadow-xl';
  
  const textColor = isLanding ? 'text-white' : 'text-[#1a1410]';
  const subtextColor = isLanding ? 'text-[#d4af37]' : 'text-[#8b6d4d]';

  const handleMobileNav = (view: any) => {
    onNavigate(view);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-1000 py-4 border-b ${navBg} ${isScrolled || !isLanding ? 'py-4' : 'py-6'}`}>
        <div className="w-full px-6 md:px-12 flex justify-between items-center">
          <button 
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-3 md:gap-4 group"
          >
            <div className="relative">
              <VerdictaLogo className="h-6 md:h-8 transition-all duration-700 group-hover:scale-110" />
            </div>
            <div className="flex flex-col items-start leading-none gap-1">
              <span className={`text-[10px] md:text-[11px] font-serif tracking-[0.4em] md:tracking-[0.5em] font-bold ${textColor} transition-colors uppercase`}>VERDICTA</span>
              <span className={`text-[6px] md:text-[7px] ${subtextColor} font-bold tracking-[0.5em] md:tracking-[0.6em] uppercase opacity-50`}>Legal Consultants</span>
            </div>
          </button>
          
          <div className="hidden lg:flex gap-12 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.label}
                onClick={() => onNavigate(link.view)} 
                className={`relative py-2 text-[10px] font-bold tracking-[0.5em] uppercase transition-all duration-500 group ${isLanding ? 'text-[#d4c4b5]/60 hover:text-white' : 'text-[#1a1410]/50 hover:text-[#1a1410]'}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-full h-[1px] ${isLanding ? 'bg-[#d4af37]' : 'bg-[#1a1410]'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center ${currentView === link.view ? 'scale-x-100' : ''}`} />
              </button>
            ))}
            
            <button 
              onClick={() => onNavigate('contact')}
              className={`ml-6 px-8 py-3 transition-all duration-700 rounded-none text-[10px] font-bold tracking-[0.4em] uppercase border ${isLanding ? 'border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1410] shadow-[0_0_15px_rgba(212,175,55,0.1)]' : 'border-[#1a1410] text-[#1a1410] hover:bg-[#1a1410] hover:text-white'}`}
            >
              Consultation
            </button>
          </div>

          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-[1px] mb-1.5 transition-all ${isLanding ? 'bg-white' : 'bg-black'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-[1px] mb-1.5 transition-all ${isLanding ? 'bg-white' : 'bg-black'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-[1px] transition-all ${isLanding ? 'bg-white' : 'bg-black'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[45] bg-[#0a0806] transition-transform duration-700 transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleMobileNav(link.view)}
              className="text-[#d4af37] text-2xl font-serif tracking-[0.2em] uppercase hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleMobileNav('contact')}
            className="mt-8 px-12 py-4 border border-[#d4af37] text-[#d4af37] font-bold tracking-[0.4em] uppercase text-[10px]"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;