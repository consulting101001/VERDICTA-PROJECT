import React, { useState, useRef, useEffect } from 'react';
import { getLegalAdviceStream } from '../services/gemini';
import { ChatMessage } from '../types';

const VerdictaLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="gold-gradient-ai" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5a2b" />
        <stop offset="30%" stopColor="#d4af37" />
        <stop offset="50%" stopColor="#f7ef8a" />
        <stop offset="70%" stopColor="#d4af37" />
        <stop offset="100%" stopColor="#8b5a2b" />
      </linearGradient>
    </defs>
    <path d="M15 25 L50 90 L85 25" stroke="url(#gold-gradient-ai)" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
    <rect x="46" y="35" width="8" height="45" fill="url(#gold-gradient-ai)" />
    <rect x="42" y="32" width="16" height="4" fill="url(#gold-gradient-ai)" />
    <rect x="42" y="78" width="16" height="4" fill="url(#gold-gradient-ai)" />
    <path d="M28 35 L72 35" stroke="url(#gold-gradient-ai)" strokeWidth="2.5" />
    <path d="M28 35 L20 60 Q28 65 36 60 Z" fill="url(#gold-gradient-ai)" opacity="0.9" />
    <path d="M72 35 L64 60 Q72 65 80 60 Z" fill="url(#gold-gradient-ai)" opacity="0.9" />
  </svg>
);

const GeminiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Welcome to Verdicta. I am your Digital Concierge. How may I facilitate your inquiry today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const responseStream = await getLegalAdviceStream(input);
      let assistantText = '';
      
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of responseStream) {
        const textChunk = chunk.text || '';
        assistantText += textChunk;
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'model', text: assistantText };
          return updated;
        });
      }
    } catch (error) {
      console.error('Gemini error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'System disruption. Please utilize our primary communication channels for priority access.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-700 group overflow-hidden ${isOpen ? 'bg-white shadow-3xl rotate-90' : 'bg-[#d4af37] shadow-2xl hover:scale-105'}`}
      >
        <div className={`absolute inset-0 bg-white/20 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${isOpen ? 'hidden' : ''}`} />
        <svg className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-700 ${isOpen ? 'text-[#1a1410]' : 'text-[#1a1410]'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[calc(100vw-48px)] sm:w-[400px] h-[550px] md:h-[650px] bg-[#0a0a0a]/95 backdrop-blur-2xl border border-[#d4af37]/30 shadow-4xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-500 rounded-lg">
          <div className="p-5 md:p-8 bg-[#111] border-b border-[#d4af37]/10 flex items-center justify-between">
            <div className="flex items-center gap-3 md:gap-4">
              <VerdictaLogo className="h-6 md:h-8" />
              <div>
                <h3 className="font-serif text-[#d4af37] text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] font-bold uppercase">Verdicta Concierge</h3>
                <span className="text-[6px] md:text-[7px] text-[#d4c4b5]/40 tracking-[0.4em] md:tracking-[0.5em] uppercase font-bold">Neural Intelligence</span>
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6 md:space-y-8 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]">
            {messages.map((m, i) => (
              <div key={i} className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="text-[7px] md:text-[8px] font-bold tracking-[0.4em] uppercase text-[#d4af37]/30 mb-2">{m.role === 'user' ? 'Inquiry' : 'Verdicta AI'}</span>
                <div className={`max-w-[95%] md:max-w-[90%] p-4 md:p-5 text-xs md:text-sm font-light leading-relaxed tracking-wide ${m.role === 'user' ? 'bg-[#d4af37] text-[#1a1410] font-medium border-none' : 'bg-[#1a1410]/50 text-[#d4c4b5]/80 border border-[#a67c52]/10 shadow-lg'}`}>
                  {m.text || (isLoading && i === messages.length - 1 ? 'Facilitating request...' : '')}
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 md:p-8 bg-[#0a0a0a] border-t border-[#d4af37]/10">
            <div className="relative group">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Brief your requirement..."
                className="w-full bg-[#111] text-white text-[10px] md:text-xs px-4 md:px-6 py-3 md:py-4 border border-[#a67c52]/20 focus:outline-none focus:border-[#d4af37] transition-all tracking-widest placeholder-[#d4c4b5]/20 font-light"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#d4af37] hover:scale-110 transition-transform disabled:opacity-20"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
          
          <div className="bg-[#d4af37]/5 px-8 py-2 md:py-3 text-[7px] md:text-[8px] text-center text-[#d4af37]/40 font-bold tracking-[0.4em] uppercase">
            Privileged Protocol Active
          </div>
        </div>
      )}
    </div>
  );
};

export default GeminiAssistant;