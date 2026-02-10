import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import LegalServices from './components/LegalServices';
import PracticeAreas from './components/PracticeAreas';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import GeminiAssistant from './components/GeminiAssistant';
import DetailModal from './components/DetailModal';
import { DetailItem } from './types';

type ViewState = 'landing' | 'practice-areas' | 'services' | 'about' | 'contact';

interface PageTheme {
  bg: string;
  text: string;
  accent: string;
  subtext: string;
  headerImg: string;
  pageImg: string;
}

const THEMES: Record<ViewState, PageTheme> = {
  landing: {
    bg: 'bg-[#0c0907]',
    text: 'text-[#d4c4b5]',
    accent: 'text-[#d4af37]',
    subtext: 'text-[#d4c4b5]/60',
    headerImg: '',
    pageImg: ''
  },
  services: {
    bg: 'bg-[#f7f3f0]',
    text: 'text-[#1a2b3c]',
    accent: 'text-[#2c5282]',
    subtext: 'text-[#4a5568]',
    headerImg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000&auto=format&fit=crop',
    pageImg: 'https://images.unsplash.com/photo-1521791136064-7986c2959213?q=80&w=2000&auto=format&fit=crop'
  },
  about: {
    bg: 'bg-[#f7f3f0]',
    text: 'text-[#3d2b1f]',
    accent: 'text-[#8b4513]',
    subtext: 'text-[#5c4a3a]',
    headerImg: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop',
    pageImg: 'https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=2000&auto=format&fit=crop'
  },
  'practice-areas': {
    bg: 'bg-[#f7f3f0]',
    text: 'text-[#2d3748]',
    accent: 'text-[#4a5568]',
    subtext: 'text-[#718096]',
    headerImg: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000&auto=format&fit=crop',
    pageImg: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2000&auto=format&fit=crop'
  },
  contact: {
    bg: 'bg-[#f7f3f0]',
    text: 'text-[#1a2e1a]',
    accent: 'text-[#2d4a2d]',
    subtext: 'text-[#4a634a]',
    headerImg: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop',
    pageImg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2000&auto=format&fit=crop'
  }
};

const VerdictaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="gold-gradient-footer" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5a2b" />
        <stop offset="30%" stopColor="#d4af37" />
        <stop offset="50%" stopColor="#f7ef8a" />
        <stop offset="70%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8b5a2b" />
      </linearGradient>
    </defs>
    <path d="M15 25 L50 90 L85 25" stroke="url(#gold-gradient-footer)" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
    <rect x="46" y="35" width="8" height="45" fill="url(#gold-gradient-footer)" />
    <rect x="42" y="32" width="16" height="4" fill="url(#gold-gradient-footer)" />
    <rect x="42" y="78" width="16" height="4" fill="url(#gold-gradient-footer)" />
    <path d="M28 35 L72 35" stroke="url(#gold-gradient-footer)" strokeWidth="2.5" />
    <path d="M28 35 L20 60 Q28 65 36 60 Z" fill="url(#gold-gradient-footer)" opacity="0.9" />
    <path d="M72 35 L64 60 Q72 65 80 60 Z" fill="url(#gold-gradient-footer)" opacity="0.9" />
  </svg>
);

function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');
  const [theme, setTheme] = useState<PageTheme>(THEMES.landing);
  const [activeDetail, setActiveDetail] = useState<DetailItem | null>(null);

  useEffect(() => {
    setTheme(THEMES[currentView]);

    if (currentView === 'landing') {
      const handleScroll = () => {
        const scrollPos = window.scrollY;
        const windowHeight = window.innerHeight;
        if (scrollPos < windowHeight * 0.8) {
          setTheme({ ...THEMES.landing, bg: 'bg-[#0c0907]' });
        } else if (scrollPos < windowHeight * 2.5) {
          setTheme({ ...THEMES.landing, bg: 'bg-[#1a1410]' });
        } else {
          setTheme({ ...THEMES.landing, bg: 'bg-[#1e1611]' });
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [currentView]);

  const navigateTo = (view: ViewState, sectionId?: string) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showDetail = (item: DetailItem) => {
    setActiveDetail(item);
  };

  const renderStandaloneHeader = (view: ViewState, title: string, subtitle: string) => {
    const pageTheme = THEMES[view];
    return (
      <div className={`relative h-[70vh] flex items-center overflow-hidden ${pageTheme.bg}`}>
        <div className="absolute inset-0 z-0">
          <img src={pageTheme.headerImg} className="w-full h-full object-cover brightness-[0.4] contrast-[1.1] scale-105" alt={`${title} background`} />
          <div className={`absolute inset-0 bg-gradient-to-t from-current via-transparent to-transparent opacity-40`} />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <button 
            onClick={() => navigateTo('landing')}
            className={`group flex items-center gap-4 ${pageTheme.accent} text-[10px] font-bold tracking-[0.5em] uppercase mb-12 hover:opacity-70 transition-all`}
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Headquarters
          </button>
          <h1 className={`text-6xl md:text-9xl font-serif ${pageTheme.text} uppercase tracking-tighter leading-none mb-8 animate-in slide-in-from-left duration-1000`}>{title}</h1>
          <div className={`w-32 h-[1px] ${pageTheme.accent.replace('text-', 'bg-')} mb-10`} />
          <p className={`${pageTheme.subtext} max-w-2xl font-light text-2xl leading-relaxed italic animate-in fade-in duration-1000 delay-300`}>
            {subtitle}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ease-in-out ${theme.bg} ${theme.text} selection:bg-[#d4af37] selection:text-[#1a1410] font-sans relative`}>
      <Navigation onNavigate={navigateTo} currentView={currentView} />
      
      <main className="relative">
        {currentView === 'landing' ? (
          <>
            <Hero onNavigate={navigateTo} />
            <div className="relative z-10">
              <Credentials />
              <WhoWeAre onShowDetail={showDetail} />
              <div className="flex justify-center bg-[#1e1611] py-16">
                <div className="w-px h-48 bg-gradient-to-b from-[#d4af37] via-[#d4af37]/10 to-transparent" />
              </div>
              <LegalServices onNavigate={navigateTo} onShowDetail={showDetail} />
              <AboutUs onShowDetail={showDetail} onNavigate={navigateTo} />
              <Testimonials />
              <Contact />
            </div>
          </>
        ) : (
          <div className="animate-in fade-in duration-700 relative">
            {theme.pageImg && (
              <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04] overflow-hidden">
                <img src={theme.pageImg} alt="Justice background" className="w-full h-full object-cover fixed brightness-110 contrast-125" />
              </div>
            )}
            
            <div className="relative z-10">
              {currentView === 'services' && (
                <>
                  {renderStandaloneHeader("services", "Legal Services", "Precision-engineered legal frameworks for institutional excellence.")}
                  <div className="max-w-7xl mx-auto py-24">
                    <LegalServices isStandalone={true} onNavigate={navigateTo} onShowDetail={showDetail} />
                  </div>
                </>
              )}
              {currentView === 'about' && (
                <>
                  {renderStandaloneHeader("about", "About Us", "A heritage of integrity and a future defined by strategic advocacy.")}
                  <div className="max-w-7xl mx-auto py-24">
                    <AboutUs isStandalone={true} onShowDetail={showDetail} onNavigate={navigateTo} />
                  </div>
                </>
              )}
              {currentView === 'practice-areas' && (
                <>
                  {renderStandaloneHeader("practice-areas", "Practice Areas", "Specialized jurisdictional expertise across high-stakes global sectors.")}
                  <div className="max-w-7xl mx-auto py-24">
                    <PracticeAreas isStandalone={true} onShowDetail={showDetail} />
                  </div>
                </>
              )}
              {currentView === 'contact' && (
                <>
                  {renderStandaloneHeader("contact", "Contact", "Direct privileged access for institutional and private mandates.")}
                  <div className="max-w-7xl mx-auto py-24">
                    <Contact isStandalone={true} />
                  </div>
                </>
              )}
              
              <div className="bg-[#0c0907] py-40 text-center border-t border-white/5 relative overflow-hidden transition-all duration-1000">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <span className={`text-white/60 text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block`}>Strategic Engagement</span>
                    <h3 className={`text-white font-serif text-4xl mb-12 tracking-widest uppercase leading-tight`}>Does your mandate require <br />expert oversight?</h3>
                    <button 
                      onClick={() => navigateTo('contact')}
                      className={`relative px-16 py-6 bg-white text-black font-bold tracking-[0.4em] uppercase text-[11px] overflow-hidden group shadow-2xl transition-all hover:scale-105`}
                    >
                      <span className="relative z-10">Initiate Private Council</span>
                      <div className={`absolute inset-0 ${theme.accent.replace('text-', 'bg-')} transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`} />
                    </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className={`${currentView === 'landing' ? 'bg-[#080605]' : 'bg-[#050505]'} py-32 border-t border-white/5 relative z-10 transition-colors duration-1000`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24 items-start">
            <div className="md:col-span-1">
              <button onClick={() => navigateTo('landing')} className="mb-10 hover:opacity-70 transition-opacity">
                <VerdictaLogo className="h-16" />
              </button>
              <p className={`text-white/30 text-[10px] leading-relaxed max-w-xs uppercase tracking-[0.3em] font-bold`}>
                Sophisticated legal frameworks <br />for institutional excellence.
              </p>
            </div>
            
            <div>
              <h4 className={`text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase mb-10`}>Directory</h4>
              <div className={`flex flex-col gap-5 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50`}>
                <button onClick={() => navigateTo('landing')} className="hover:text-[#d4af37] transition-colors text-left">Home</button>
                <button onClick={() => navigateTo('services')} className="hover:text-[#d4af37] transition-colors text-left">Services</button>
                <button onClick={() => navigateTo('practice-areas')} className="hover:text-[#d4af37] transition-colors text-left">Expertise</button>
                <button onClick={() => navigateTo('about')} className="hover:text-[#d4af37] transition-colors text-left">About Us</button>
                <button onClick={() => navigateTo('contact')} className="hover:text-[#d4af37] transition-colors text-left">Contact</button>
              </div>
            </div>

            <div>
              <h4 className={`text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase mb-10`}>Expertise</h4>
              <div className={`flex flex-col gap-5 text-[10px] font-bold tracking-[0.2em] uppercase text-white/50`}>
                <span className="cursor-default">Corporate Law</span>
                <span className="cursor-default">Criminal Defense</span>
                <span className="cursor-default">Maritime Law</span>
                <span className="cursor-default">Family Office</span>
                <span className="cursor-default">Arbitration</span>
              </div>
            </div>

            <div className="text-right">
              <h4 className={`text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase mb-10`}>Headquarters</h4>
              <p className={`text-white text-base font-serif tracking-widest mb-3 uppercase`}>United Arab Emirates</p>
              <p className={`text-white/30 text-[9px] uppercase tracking-[0.3em] mb-10`}>Strategic Regional Hub</p>
              <div className="flex justify-end gap-8 text-[#d4af37]">
                <a href="#" className="hover:scale-125 transition-transform duration-300"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              </div>
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className={`text-white/10 text-[9px] tracking-[0.5em] uppercase font-bold`}>&copy; {new Date().getFullYear()} Verdicta Legal Consultants. Privileged & Confidential.</p>
          </div>
        </div>
      </footer>

      <DetailModal 
        item={activeDetail} 
        onClose={() => setActiveDetail(null)} 
        theme={theme}
      />
      
      <GeminiAssistant />
    </div>
  );
}

export default App;