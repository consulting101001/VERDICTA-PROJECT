import { GoogleGenAI } from "@google/genai";

// State
let currentView = 'landing';
let isMobileMenuOpen = false;
let isAssistantOpen = false;
let chatMessages = [{ role: 'model', text: 'Welcome to Verdicta. I am your Digital Concierge. How may I facilitate your inquiry today?' }];

// AI Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Templates and Data
const PRACTICE_AREAS = [
    { title: "Arbitration & Mediation", description: "Resolving complex disputes through strategic negotiation and neutral advisory.", image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800", content: "We excel in navigating high-stakes international and domestic arbitration. Our mediation approach is built on psychological insight and deep legal precedent to find common ground." },
    { title: "Banking & Finance", description: "Sophisticated advisory on capital preservation and fiscal governance.", image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800", content: "Supporting institutional lenders and private entities in capital market transactions. We provide the expertise needed for asset-backed financing and financial restructuring." },
    { title: "Employment Law", description: "Ensuring workforce stability and institutional compliance.", image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8?q=80&w=800", content: "From executive contracts to collective bargaining, we handle all facets of the employment relationship, ensuring a compliant and motivated environment." },
    { title: "Criminal Defense", description: "Vigorous protection of individual rights and institutional reputation.", image: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?q=80&w=800", content: "Specializing in white-collar defense and high-stakes investigations. We prioritize institutional integrity through sophisticated, aggressive advocacy." },
    { title: "Real Estate & Property", description: "Expert guidance for high-value asset acquisition and management.", image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?q=80&w=800", content: "Navigating the complexities of property law with precision. We handle multi-million dollar transactions and zoning laws for commercial estates." },
    { title: "Venture Capital", description: "Advising the next generation of industry leaders and innovators.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800", content: "Supporting the pioneers of tomorrow. We build the legal foundations for innovation, handling intellectual property audits and exit planning." }
];

const LEGAL_SERVICES = [
  {
    title: "Legal Consultation & Advisory",
    description: "Professional guidance with strategic direction tailored to your unique legal circumstances.",
    icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800",
    content: "Our consultancy service offers privileged access to lead council for deep diagnostic reviews of your current legal standing. We provide actionable, high-level roadmaps to mitigate risk and establish institutional clarity."
  },
  {
    title: "Corporate & Commercial Law",
    description: "Comprehensive support for company formation, governance, and institutional corporate advisory.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-12h1m-1 4h1m-1 4h1",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
    content: "We provide the architecture for robust institutional frameworks, facilitating mergers, acquisitions, and restructuring with absolute precision. Our corporate team ensures your governance models are both resilient and future-proof."
  },
  {
    title: "Contract Drafting & Review",
    description: "Protecting your long-term interests through precise documentation and rigorous legal review.",
    icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
    img: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800",
    content: "A contract is more than paper; it is a shield. We draft every document with extreme attention to detail, identifying potential liabilities and optimizing language for absolute institutional protection."
  },
  {
    title: "Regulatory Compliance",
    description: "Ensuring adherence to applicable laws and evolving jurisdictional regulations with absolute precision.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
    content: "In a world of rapidly changing laws, we provide the steady guidance needed to remain compliant across multiple jurisdictions. We specialize in complex regional frameworks and international standards."
  },
  {
    title: "Employment & Labor Law Advisory",
    description: "Strategic guidance on workplace compliance, labor relations, and delicate dispute resolution.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800",
    content: "We protect both the institution and the workforce through fair, strategic, and legally sound labor agreements. Our mediation services resolve workplace conflicts before they escalate to public liability."
  },
  {
    title: "Dispute Resolution & Strategy",
    description: "High-value strategic positioning and resolution planning for complex institutional conflicts.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
    img: "https://images.unsplash.com/photo-1573166364524-d9dbfd8bbf83?q=80&w=800",
    content: "When conflicts arise, we prioritize strategic resolution that preserves relationships and institutional reputation. Our approach combines aggressive advocacy with refined mediation techniques."
  }
];

const CORE_VALUES = [
  { title: "Integrity", subtitle: "Unwavering Ethics", content: "Integrity is our cornerstone. We ensure that every action and advisory is rooted in deep ethical standards and legal precision." },
  { title: "Excellence", subtitle: "Superior Advocacy", content: "We strive for excellence in every brief. Our team utilizes advanced legal research and strategic foresight to protect your interests." },
  { title: "Discretion", subtitle: "Absolute Privacy", content: "Privacy is paramount. Our firm's protocols ensure that sensitive institutional data remains strictly confidential at all times." },
  { title: "Innovation", subtitle: "Strategic Foresight", content: "The legal landscape is evolving. We combine traditional legal wisdom with modern strategic tools to solve the challenges of tomorrow." }
];

// View Template Generators
const renderStandaloneHeader = (title: string, subtitle: string, image: string, themeColor: string) => `
    <div class="relative h-[70vh] flex items-center overflow-hidden bg-white">
        <div class="absolute inset-0 z-0">
            <img src="${image}" class="w-full h-full object-cover brightness-[0.4] contrast-[1.1] scale-105" alt="${title} background" />
            <div class="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
        </div>
        <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <button onclick="window.navigateTo('landing')" class="group flex items-center gap-4 ${themeColor} text-[10px] font-bold tracking-[0.5em] uppercase mb-12 hover:opacity-70 transition-all">
                <svg class="w-5 h-5 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Headquarters
            </button>
            <h1 class="text-6xl md:text-9xl font-serif text-[#1a1410] uppercase tracking-tighter leading-none mb-8 animate-in slide-in-from-left duration-1000">${title}</h1>
            <div class="w-32 h-[1px] ${themeColor.replace('text-', 'bg-')} mb-10"></div>
            <p class="text-[#5c4a3a] max-w-2xl font-light text-2xl leading-relaxed italic animate-in fade-in duration-1000 delay-300">
                ${subtitle}
            </p>
        </div>
    </div>
`;

const renderLanding = () => `
    <section class="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#0a0806]">
        <div class="absolute inset-0 z-0 overflow-hidden">
            <div class="absolute inset-0 hero-image-drift" style="background-image: url('https://images.unsplash.com/photo-1589216532372-1c2a367900d9?q=80&w=2071'); background-size: cover; background-position: center;"></div>
        </div>
        <div class="absolute inset-0 z-10 pointer-events-none">
            <div class="absolute top-1/4 left-1/4 w-[150%] h-[100%] light-sweep-effect opacity-40"></div>
            <div class="absolute inset-0 bg-gradient-to-b from-[#0a0806]/80 via-transparent to-[#0a0806]"></div>
        </div>
        <div id="dust-container" class="absolute inset-0 z-20 pointer-events-none"></div>
        <div class="relative z-30 text-center px-6 max-w-7xl">
            <div class="mb-6 md:mb-8 inline-flex flex-col items-center">
                <div class="w-12 md:w-16 h-[1px] bg-[#d4af37] mb-3 md:mb-4"></div>
                <span class="text-[#d4af37] text-[8px] md:text-[10px] font-bold tracking-[0.5em] md:tracking-[0.8em] uppercase">Professional Legal Counsel</span>
            </div>
            <h1 class="text-5xl sm:text-7xl md:text-9xl font-bold text-white mb-6 md:mb-8 tracking-[0.2em] md:tracking-[0.4em] leading-none uppercase font-serif">VERDICTA</h1>
            <div class="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center">
                <button onclick="window.navigateTo('practice-areas')" class="px-8 md:px-12 py-4 md:py-5 border border-[#d4af37] text-[#d4af37] font-bold tracking-[0.3em] uppercase text-[9px] hover:bg-[#d4af37] hover:text-[#1a1410] transition-all">View Expertise</button>
                <button onclick="window.navigateTo('contact')" class="px-8 md:px-12 py-4 md:py-5 border border-[#d4af37]/20 text-[#d4af37]/70 font-bold tracking-[0.3em] uppercase text-[9px] hover:bg-[#d4af37]/10 transition-all">Consultation</button>
            </div>
        </div>
    </section>
    
    <!-- Credentials -->
    <section class="py-20 bg-[#0c0907] border-y border-white/5">
        <div class="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
            <div class="flex flex-col items-center gap-4"><div class="text-4xl">⚖️</div><span class="text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase">IBA Member</span></div>
            <div class="flex flex-col items-center gap-4"><div class="text-4xl">🏆</div><span class="text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase">Chambers 2024</span></div>
            <div class="flex flex-col items-center gap-4"><div class="text-4xl">🏢</div><span class="text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase">GCC Certified</span></div>
        </div>
    </section>

    <!-- Services Summary -->
    <section class="py-32 bg-[#1a1410]">
        <div class="max-w-7xl mx-auto px-6">
            <h2 class="text-4xl md:text-6xl font-serif text-white uppercase text-center mb-20">Strategic <span class="text-[#d4af37]">Advocacy</span></h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                ${LEGAL_SERVICES.slice(0, 3).map((s, i) => `
                    <div class="p-12 border border-[#d4af37]/10 bg-[#1e1611] group cursor-pointer" onclick="window.showDetail(${i}, 'service')">
                        <div class="w-16 h-16 bg-[#d4af37]/10 flex items-center justify-center mb-8 group-hover:bg-[#d4af37] transition-all"><svg class="w-8 h-8 text-[#d4af37] group-hover:text-[#1a1410]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="${s.icon}" /></svg></div>
                        <h3 class="text-2xl font-serif text-white mb-4 uppercase">${s.title}</h3>
                        <p class="text-[#d4c4b5]/60 text-sm">${s.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>
`;

const renderServices = () => `
    ${renderStandaloneHeader("Legal Services", "Precision-engineered legal frameworks for institutional excellence.", "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2000", "text-[#2c5282]")}
    <div class="max-w-7xl mx-auto py-32 px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            ${LEGAL_SERVICES.map((s, i) => `
                <div class="group relative overflow-hidden transition-all duration-1000 h-[650px] flex flex-col justify-end p-12 md:p-16 cursor-pointer shadow-2xl border bg-[#1a1410]/40 border-[#d4af37]/10 hover:border-[#d4af37]/40 backdrop-blur-sm" onclick="window.showDetail(${i}, 'service')">
                    <div class="absolute inset-0 bg-cover bg-center transition-all duration-1000 blur-[4px] group-hover:blur-0 opacity-40 group-hover:opacity-100 brightness-[0.5]" style="background-image: url('${s.img}')"></div>
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0c0907] to-transparent opacity-90"></div>
                    <div class="relative z-10">
                        <div class="w-20 h-20 flex items-center justify-center mb-10 bg-[#1a1410]/80 group-hover:bg-[#d4af37] transition-all duration-700 shadow-xl border border-[#d4af37]/20 group-hover:border-transparent">
                            <svg class="w-10 h-10 text-[#d4af37] group-hover:text-[#1a1410]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="${s.icon}" /></svg>
                        </div>
                        <h3 class="text-3xl font-serif text-white mb-6 uppercase tracking-widest">${s.title}</h3>
                        <p class="text-[#d4c4b5]/60 text-base font-light leading-relaxed">${s.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

const renderAbout = () => `
    ${renderStandaloneHeader("About Us", "A heritage of integrity and a future defined by strategic advocacy.", "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000", "text-[#8b4513]")}
    <div class="max-w-7xl mx-auto py-32 px-6">
        <div class="flex flex-col lg:flex-row gap-24 items-center mb-40">
            <div class="w-full lg:w-1/2 relative">
                <div class="hidden md:grid grid-cols-12 grid-rows-12 gap-8 h-[750px]">
                    <div class="col-start-1 col-end-11 row-start-1 row-end-9 overflow-hidden group shadow-4xl border-4 border-white">
                        <img src="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?q=80&w=800" class="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-1000" />
                    </div>
                    <div class="col-start-3 col-end-13 row-start-6 row-end-13 overflow-hidden border-[12px] border-white group z-20 shadow-4xl">
                        <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800" class="w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-1000" />
                    </div>
                </div>
            </div>
            <div class="w-full lg:w-1/2">
                <span class="text-[#8b4513] font-bold tracking-[0.8em] text-[11px] uppercase mb-8 block">Our Professional Identity</span>
                <h2 class="text-5xl md:text-8xl font-serif text-[#1a1410] uppercase tracking-tight leading-none mb-12">Advocacy Through <span class="text-[#8b4513]">Integrity</span></h2>
                <div class="space-y-12 pl-12 border-l-2 border-[#d4af37]/20">
                    <p class="text-2xl font-light text-[#5c4a3a] leading-relaxed italic">"Justice is not just an outcome, but a process built on absolute clarity and trust."</p>
                    <p class="text-lg text-[#5c4a3a]/80 font-light">Verdicta Legal Consultants represents the gold standard in modern legal advisory. Our firm is dedicated to providing strategic advocacy that preserves your interests and fortifies your legacy.</p>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            ${CORE_VALUES.map((v, i) => `
                <div class="group p-12 bg-white border border-black/5 shadow-xl hover:bg-[#d4af37]/5 transition-all duration-700 text-center">
                    <div class="w-16 h-16 rounded-full border-2 border-[#1a1410]/20 flex items-center justify-center mx-auto mb-10 text-[#1a1410] font-serif text-2xl group-hover:bg-[#1a1410] group-hover:text-white transition-all">${v.title.charAt(0)}</div>
                    <h4 class="text-2xl font-serif text-[#1a1410] uppercase tracking-widest mb-6">${v.title}</h4>
                    <p class="text-[11px] font-bold tracking-[0.2em] text-[#1a1410]/40 uppercase">${v.subtitle}</p>
                </div>
            `).join('')}
        </div>
    </div>
`;

const renderPracticeAreas = () => `
    ${renderStandaloneHeader("Practice Areas", "Specialized jurisdictional expertise across high-stakes global sectors.", "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000", "text-[#4a5568]")}
    <div class="max-w-7xl mx-auto py-32 px-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            ${PRACTICE_AREAS.map((a, i) => `
                <div class="group flex flex-col transition-all duration-700 hover:-translate-y-3 cursor-pointer bg-white shadow-xl" onclick="window.showDetail(${i}, 'practice')">
                    <div class="h-80 w-full overflow-hidden relative shadow-2xl">
                        <img src="${a.image}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                        <div class="absolute bottom-8 left-8 right-8">
                            <h3 class="text-2xl font-serif tracking-widest uppercase text-white">${a.title}</h3>
                            <div class="h-px w-0 group-hover:w-full bg-[#d4af37] transition-all duration-700"></div>
                        </div>
                    </div>
                    <div class="pt-8 px-6 pb-10">
                        <p class="text-[11px] uppercase tracking-[0.3em] font-bold text-[#1a1410]/70">${a.description}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    </div>
`;

const renderContact = () => `
    ${renderStandaloneHeader("Contact", "Direct privileged access for institutional and private mandates.", "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000", "text-[#2d4a2d]")}
    <div class="max-w-7xl mx-auto py-32 px-6">
        <div class="flex flex-col lg:flex-row shadow-4xl overflow-hidden rounded-sm backdrop-blur-md border bg-white/80 border-[#2a1b12]/10 min-h-[700px]">
            <div class="lg:w-[40%] p-16 lg:p-20 border-r bg-[#2a1b12]/5 border-[#2a1b12]/10 flex flex-col">
                <span class="font-bold tracking-[0.6em] text-[10px] uppercase mb-8 block text-[#8b6d4d]">Private Council Access</span>
                <h2 class="text-4xl md:text-5xl font-serif text-[#2a1b12] uppercase tracking-widest leading-[0.9] mb-12">Secure <br />Inquiry</h2>
                <p class="text-sm font-light text-[#5c4a3a] leading-relaxed italic mb-16 border-l-2 border-[#8b6d4d] pl-8">Establish a secure line of communication. Our lead consultants operate with absolute discretion.</p>
                <div class="space-y-16 flex-grow">
                    <div>
                        <p class="text-[10px] font-bold text-[#8b6d4d] uppercase tracking-[0.5em] mb-4 opacity-50">Global Gateway</p>
                        <p class="text-xl font-serif text-[#2a1b12] tracking-widest">UNITED ARAB EMIRATES</p>
                    </div>
                    <div>
                        <p class="text-[10px] font-bold text-[#8b6d4d] uppercase tracking-[0.5em] mb-4 opacity-50">Direct Protocol</p>
                        <p class="text-xl font-serif text-[#2a1b12] tracking-widest">info@verdictalegal.com</p>
                    </div>
                </div>
            </div>
            <div class="lg:w-[60%] p-16 lg:p-24 relative">
                <h2 class="text-3xl font-serif text-[#2a1b12] mb-4 uppercase tracking-[0.3em]">Brief Your Mandate</h2>
                <p class="text-[10px] uppercase tracking-[0.4em] font-bold text-[#8b6d4d]/60 mb-16">Data strictly protected under professional privilege protocols</p>
                <form class="space-y-16" onsubmit="event.preventDefault()">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <input type="text" placeholder="Identity / Representative" class="w-full bg-transparent border-b border-[#2a1b12]/40 py-5 text-[#2a1b12] focus:outline-none focus:border-[#8b6d4d] tracking-widest" />
                        <input type="email" placeholder="Secure Email Contact" class="w-full bg-transparent border-b border-[#2a1b12]/40 py-5 text-[#2a1b12] focus:outline-none focus:border-[#8b6d4d] tracking-widest" />
                    </div>
                    <textarea rows="6" placeholder="Brief Description of Legal Mandate" class="w-full bg-transparent border-b border-[#2a1b12]/40 py-5 text-[#2a1b12] focus:outline-none focus:border-[#8b6d4d] tracking-widest resize-none"></textarea>
                    <button class="w-full py-8 bg-[#2a1b12] text-white font-bold tracking-[0.6em] uppercase text-[12px] shadow-4xl hover:bg-[#8b6d4d] transition-all">Initiate Private Council</button>
                </form>
            </div>
        </div>
    </div>
`;

// Helper: Show Modal
(window as any).showDetail = (index: number, type: 'service' | 'practice') => {
    const item = type === 'service' ? LEGAL_SERVICES[index] : PRACTICE_AREAS[index];
    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    
    if (modal && content) {
        content.innerHTML = `
            <button onclick="window.closeModal()" class="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-black/20 text-white rounded-full hover:bg-black/40">✕</button>
            <div class="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img src="${(item as any).img || (item as any).image}" class="w-full h-full object-cover brightness-[0.6]">
            </div>
            <div class="p-12 md:p-20 md:w-1/2 flex flex-col justify-center text-[#d4c4b5]">
                <span class="text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase mb-6 block">Practice Brief</span>
                <h2 class="text-4xl md:text-6xl font-serif uppercase tracking-tighter leading-none mb-10 text-white">${item.title}</h2>
                <div class="w-24 h-px bg-[#d4af37] mb-12 opacity-40"></div>
                <p class="text-xl font-light leading-relaxed italic mb-12">${item.content}</p>
                <div class="mt-16 pt-10 border-t border-white/5 flex justify-end">
                    <button onclick="window.closeModal()" class="px-10 py-4 bg-[#d4c4b5] text-[#1a1410] text-[10px] font-bold tracking-[0.4em] uppercase">Acknowledge</button>
                </div>
            </div>
        `;
        modal.hidden = false;
    }
};

(window as any).closeModal = () => {
    const modal = document.getElementById('modal-container');
    if (modal) modal.hidden = true;
};

// Helper: Navigation
(window as any).navigateTo = (view: string) => {
    currentView = view;
    const container = document.getElementById('view-container');
    const nav = document.getElementById('main-nav');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (container) {
        if (view === 'landing') {
            container.innerHTML = renderLanding();
            initParticles();
        } else if (view === 'services') {
            container.innerHTML = renderServices();
        } else if (view === 'about') {
            container.innerHTML = renderAbout();
        } else if (view === 'practice-areas') {
            container.innerHTML = renderPracticeAreas();
        } else if (view === 'contact') {
            container.innerHTML = renderContact();
        }
    }

    // Nav and Background adjustments
    const body = document.body;
    if (nav) {
        const brandText = document.getElementById('nav-brand-text');
        const burgerLines = [document.getElementById('burger-1'), document.getElementById('burger-2'), document.getElementById('burger-3')];
        
        if (view !== 'landing') {
            body.style.backgroundColor = '#f7f3f0';
            nav.classList.add('bg-[#f7f3f0]/95', 'backdrop-blur-2xl', 'border-[#1a1410]/10', 'shadow-xl');
            nav.classList.remove('bg-transparent', 'border-transparent');
            if (brandText) brandText.classList.replace('text-white', 'text-[#1a1410]');
            burgerLines.forEach(line => { if (line) { line.classList.remove('bg-white'); line.classList.add('bg-[#1a1410]'); } });
        } else {
            body.style.backgroundColor = '#0c0907';
            nav.classList.remove('bg-[#f7f3f0]/95', 'backdrop-blur-2xl', 'border-[#1a1410]/10', 'shadow-xl');
            nav.classList.add('bg-transparent', 'border-transparent');
            if (brandText) brandText.classList.replace('text-[#1a1410]', 'text-white');
            burgerLines.forEach(line => { if (line) { line.classList.remove('bg-[#1a1410]'); line.classList.add('bg-white'); } });
        }
    }
};

// Particles System
const initParticles = () => {
    const container = document.getElementById('dust-container');
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'dust-particle';
        p.style.left = `${Math.random() * 100}%`;
        p.style.top = `${Math.random() * 100}%`;
        p.style.width = `${Math.random() * 2 + 1}px`;
        p.style.height = p.style.width;
        p.style.animation = `floatDust ${Math.random() * 10 + 10}s linear infinite`;
        p.style.animationDelay = `${Math.random() * 5}s`;
        container.appendChild(p);
    }
};

// UI Toggles
(window as any).toggleMobileMenu = () => {
    isMobileMenuOpen = !isMobileMenuOpen;
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('-translate-y-full');
        menu.classList.toggle('translate-y-0');
    }
};

(window as any).toggleAssistant = () => {
    isAssistantOpen = !isAssistantOpen;
    const win = document.getElementById('assistant-window');
    const toggle = document.getElementById('assistant-toggle');
    const icon = document.getElementById('assistant-icon');
    
    if (win) win.hidden = !isAssistantOpen;
    if (isAssistantOpen) {
        if (toggle) toggle.classList.add('bg-white', 'rotate-90');
        if (toggle) toggle.classList.remove('bg-[#d4af37]');
        if (icon) icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        renderMessages();
    } else {
        if (toggle) toggle.classList.remove('bg-white', 'rotate-90');
        if (toggle) toggle.classList.add('bg-[#d4af37]');
        if (icon) icon.setAttribute('d', 'M12 6v6m0 0v6m0-6h6m-6 0H6');
    }
};

const renderMessages = () => {
    const history = document.getElementById('chat-history');
    if (history) {
        history.innerHTML = chatMessages.map(m => `
            <div class="flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}">
                <span class="text-[8px] font-bold tracking-[0.4em] uppercase text-[#d4af37]/30 mb-2">${m.role === 'user' ? 'Inquiry' : 'Verdicta AI'}</span>
                <div class="max-w-[90%] p-5 text-sm font-light leading-relaxed bg-[#1a1410]/50 text-[#d4c4b5]/80 border border-[#a67c52]/10">
                    ${m.text}
                </div>
            </div>
        `).join('');
        history.scrollTop = history.scrollHeight;
    }
};

(window as any).sendChatMessage = async () => {
    const input = document.getElementById('chat-input') as HTMLInputElement;
    if (!input) return;
    const text = input.value.trim();
    if (!text) return;
    
    chatMessages.push({ role: 'user', text });
    input.value = '';
    renderMessages();
    
    try {
        const result = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: [{ parts: [{ text: `You are a sophisticated AI legal consultant. User says: ${text}` }] }]
        });
        chatMessages.push({ role: 'model', text: result.text || 'System protocol error.' });
        renderMessages();
    } catch (e) {
        chatMessages.push({ role: 'model', text: 'Protocol disruption. Please contact headquarters.' });
        renderMessages();
    }
};

// Init
document.addEventListener('DOMContentLoaded', () => {
    const yearDisplay = document.getElementById('year-display');
    if (yearDisplay) yearDisplay.textContent = new Date().getFullYear().toString();
    (window as any).navigateTo('landing');
    
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('main-nav');
        if (nav) {
            if (window.scrollY > 50 && currentView === 'landing') {
                nav.classList.add('bg-[#0a0806]/95', 'backdrop-blur-2xl', 'border-[#d4af37]/20', 'shadow-2xl');
                nav.classList.remove('bg-transparent', 'border-transparent');
            } else if (currentView === 'landing') {
                nav.classList.remove('bg-[#0a0806]/95', 'backdrop-blur-2xl', 'border-[#d4af37]/20', 'shadow-2xl');
                nav.classList.add('bg-transparent', 'border-transparent');
            }
        }
    });
});
