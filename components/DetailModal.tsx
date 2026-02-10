
import React from 'react';
import { DetailItem } from '../types';

interface DetailModalProps {
  item: DetailItem | null;
  onClose: () => void;
  theme: {
    bg: string;
    text: string;
    accent: string;
  };
}

const DetailModal: React.FC<DetailModalProps> = ({ item, onClose, theme }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 md:p-12">
      <div 
        className="absolute inset-0 bg-[#0c0907]/90 backdrop-blur-md transition-opacity duration-500 animate-in fade-in" 
        onClick={onClose} 
      />
      
      <div className={`relative w-full max-w-5xl h-auto max-h-[90vh] overflow-y-auto ${theme.bg} border border-white/10 shadow-4xl animate-in zoom-in-95 fade-in duration-500 rounded-sm flex flex-col md:flex-row`}>
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-black/20 hover:bg-black/40 text-white transition-all rounded-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {item.image && (
          <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover brightness-[0.6] hover:brightness-100 transition-all duration-1000" />
            <div className={`absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-${theme.bg.split('-')[1]}`} />
          </div>
        )}

        <div className={`p-12 md:p-20 md:w-1/2 flex flex-col justify-center ${theme.text}`}>
          <span className={`${theme.accent} text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block animate-in slide-in-from-bottom duration-700`}>
            {item.subtitle}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif uppercase tracking-tighter leading-none mb-10 animate-in slide-in-from-bottom duration-700 delay-100">
            {item.title}
          </h2>
          <div className={`w-24 h-px ${theme.accent.replace('text-', 'bg-')} mb-12 opacity-40`} />
          
          <p className="text-xl font-light leading-relaxed italic mb-12 animate-in slide-in-from-bottom duration-700 delay-200">
            {item.content}
          </p>

          {item.stats && (
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-black/5 animate-in slide-in-from-bottom duration-700 delay-300">
              {item.stats.map((s, i) => (
                <div key={i}>
                  <span className="block text-3xl font-serif mb-1 tracking-tighter">{s.value}</span>
                  <span className={`text-[10px] font-bold uppercase tracking-widest opacity-50`}>{s.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="mt-16 pt-10 border-t border-black/5 flex justify-end">
            <button 
              onClick={onClose}
              className={`px-10 py-4 ${theme.text.replace('text-', 'bg-')} ${theme.bg.replace('bg-', 'text-')} text-[10px] font-bold tracking-[0.4em] uppercase transition-all hover:scale-105`}
            >
              Acknowledge Brief
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
