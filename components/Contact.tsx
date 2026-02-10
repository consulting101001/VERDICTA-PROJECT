import React, { useState } from 'react';

interface ContactProps {
  isStandalone?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isStandalone = false }) => {
  const [activeInquiry, setActiveInquiry] = useState('Corporate');

  return (
    <section id="contact" className={`py-32 ${isStandalone ? 'bg-transparent' : 'bg-[#1a1410]'} relative overflow-hidden transition-colors duration-1000`}>
      <div className={`absolute inset-0 opacity-[0.02] pointer-events-none ${isStandalone ? 'bg-[url("https://www.transparenttextures.com/patterns/natural-paper.png")]' : 'bg-[url("https://www.transparenttextures.com/patterns/natural-paper.png")]'}`} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`flex flex-col lg:flex-row shadow-4xl overflow-hidden rounded-sm backdrop-blur-md border ${isStandalone ? 'bg-white/80 border-[#2a1b12]/10 min-h-[700px]' : 'bg-[#241c16]/90 border-[#d4af37]/20'}`}>
          
          {/* Information Column */}
          <div className={`lg:w-[40%] p-16 lg:p-20 border-r flex flex-col ${isStandalone ? 'bg-[#2a1b12]/5 border-[#2a1b12]/10' : 'bg-[#1a1410]/50 border-[#d4af37]/10'}`}>
            <span className={`font-bold tracking-[0.6em] text-[10px] uppercase mb-8 block ${isStandalone ? 'text-[#8b6d4d]' : 'text-[#d4af37]'}`}>Private Council Access</span>
            <h2 className={`text-4xl md:text-5xl font-serif mb-12 uppercase tracking-widest leading-[0.9] ${isStandalone ? 'text-[#2a1b12]' : 'text-white'}`}>Secure <br />Inquiry</h2>
            
            <p className={`text-sm font-light leading-relaxed italic mb-16 border-l-2 pl-8 ${isStandalone ? 'text-[#5c4a3a] border-[#8b6d4d]' : 'text-[#d4af37]/60 border-[#d4af37]'}`}>
              Establish a secure line of communication. Our lead consultants operate with absolute discretion for all preliminary council.
            </p>

            <div className="space-y-16 mb-20 flex-grow">
              {[
                { label: "Global Gateway", value: "UNITED ARAB EMIRATES", sub: "Strategic Regional HUB" },
                { label: "Direct Protocol", value: "info@verdictalegal.com", sub: "Priority Dispatch" },
                { label: "Switchboard", value: "+971 XX XXX XXXX", sub: "Institutional Support" }
              ].map((item, i) => (
                <div key={i} className="group cursor-default">
                  <p className={`text-[10px] font-bold uppercase tracking-[0.5em] mb-4 opacity-50 group-hover:opacity-100 transition-opacity ${isStandalone ? 'text-[#8b6d4d]' : 'text-[#d4af37]'}`}>{item.label}</p>
                  <p className={`text-xl font-serif tracking-widest mb-2 transition-colors ${isStandalone ? 'text-[#2a1b12] group-hover:text-[#8b6d4d]' : 'text-white group-hover:text-[#d4af37]'}`}>{item.value}</p>
                  <p className={`text-[9px] uppercase tracking-[0.6em] font-bold transition-colors ${isStandalone ? 'text-[#5c4a3a]/40 group-hover:text-[#5c4a3a]/60' : 'text-[#d4c4b5]/30 group-hover:text-[#d4c4b5]/50'}`}>{item.sub}</p>
                </div>
              ))}
            </div>

            <div className={`mt-auto relative h-48 overflow-hidden border group shadow-inner ${isStandalone ? 'bg-[#f2e9de] border-[#2a1b12]/10' : 'bg-[#120f0d] border-[#d4af37]/20'}`}>
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
                alt="Lead Consultant Executive" 
                className="w-full h-full object-cover brightness-50 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[1px]">
                 <span className={`text-[10px] font-bold tracking-[0.8em] uppercase opacity-90 drop-shadow-md ${isStandalone ? 'text-[#2a1b12]' : 'text-[#d4af37]'}`}>Privileged Line Active</span>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:w-[60%] p-16 lg:p-24 relative">
            <div className="relative z-10">
              <h2 className={`text-3xl font-serif mb-4 uppercase tracking-[0.3em] ${isStandalone ? 'text-[#2a1b12]' : 'text-white'}`}>Brief Your Mandate</h2>
              <p className={`text-[10px] uppercase tracking-[0.4em] font-bold mb-16 ${isStandalone ? 'text-[#8b6d4d]/60' : 'text-[#d4af37]/50'}`}>Data strictly protected under professional privilege protocols</p>

              <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <div className="group relative">
                    <input type="text" placeholder="Identity / Representative" className={`w-full bg-transparent border-b py-5 focus:outline-none transition-all font-light text-sm tracking-[0.1em] ${isStandalone ? 'border-[#2a1b12]/40 text-[#2a1b12] placeholder-[#2a1b12]/40 focus:border-[#8b6d4d]' : 'border-[#d4af37]/50 text-white placeholder-[#d4c4b5]/40 focus:border-[#d4af37]'}`} />
                    <div className={`absolute bottom-0 left-0 w-0 h-[1px] group-focus-within:w-full transition-all duration-1000 ${isStandalone ? 'bg-[#8b6d4d]' : 'bg-[#d4af37]'}`} />
                  </div>
                  <div className="group relative">
                    <input type="email" placeholder="Secure Email Contact" className={`w-full bg-transparent border-b py-5 focus:outline-none transition-all font-light text-sm tracking-[0.1em] ${isStandalone ? 'border-[#2a1b12]/40 text-[#2a1b12] placeholder-[#2a1b12]/40 focus:border-[#8b6d4d]' : 'border-[#d4af37]/50 text-white placeholder-[#d4c4b5]/40 focus:border-[#d4af37]'}`} />
                    <div className={`absolute bottom-0 left-0 w-0 h-[1px] group-focus-within:w-full transition-all duration-1000 ${isStandalone ? 'bg-[#8b6d4d]' : 'bg-[#d4af37]'}`} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {['Corporate', 'Criminal', 'Maritime', 'Family Office', 'Arbitration'].map(type => (
                    <button 
                      key={type}
                      type="button"
                      onClick={() => setActiveInquiry(type)}
                      className={`px-8 py-3 text-[10px] font-bold tracking-[0.3em] uppercase border transition-all duration-700 ${
                        activeInquiry === type 
                          ? (isStandalone ? 'bg-[#2a1b12] text-[#f2e9de] border-transparent shadow-2xl' : 'bg-[#d4af37] text-[#1a1410] border-transparent shadow-2xl')
                          : (isStandalone ? 'border-[#2a1b12]/50 text-[#2a1b12]/70 hover:border-[#2a1b12] hover:text-[#2a1b12]' : 'border-[#d4af37]/50 text-[#d4af37]/70 hover:border-[#d4af37] hover:text-[#d4af37]')
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="group relative">
                  <textarea rows={6} placeholder="Brief Description of Legal Mandate" className={`w-full bg-transparent border-b py-5 focus:outline-none transition-all font-light text-sm tracking-[0.1em] resize-none ${isStandalone ? 'border-[#2a1b12]/40 text-[#2a1b12] placeholder-[#2a1b12]/40 focus:border-[#8b6d4d]' : 'border-[#d4af37]/50 text-white placeholder-[#d4c4b5]/40 focus:border-[#d4af37]'}`}></textarea>
                  <div className={`absolute bottom-0 left-0 w-0 h-[1px] group-focus-within:w-full transition-all duration-1000 ${isStandalone ? 'bg-[#8b6d4d]' : 'bg-[#d4af37]'}`} />
                </div>

                <div className="pt-10">
                  <button className={`group relative w-full overflow-hidden px-16 py-8 font-bold tracking-[0.6em] uppercase text-[12px] transition-all shadow-4xl ${isStandalone ? 'bg-[#2a1b12] text-[#f2e9de]' : 'bg-[#d4af37] text-[#1a1410]'}`}>
                    <span className="relative z-10">Initiate Private Council</span>
                    <div className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left ${isStandalone ? 'bg-[#8b6d4d]' : 'bg-white'}`} />
                  </button>
                  <p className={`text-[9px] text-center uppercase tracking-[0.5em] font-bold mt-10 italic ${isStandalone ? 'text-[#8b6d4d]/40' : 'text-[#d4af37]/30'}`}>Secure Encrypted Transmission Activated</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;