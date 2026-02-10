
import React from 'react';

const services = [
  {
    title: "Corporate Governance",
    description: "Expert advice on compliance, mergers, and institutional policy formation.",
    icon: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  },
  {
    title: "Civil Litigation",
    description: "Strategic representation in complex civil disputes and mediation.",
    icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
  },
  {
    title: "Intellectual Property",
    description: "Protection of your innovations, trademarks, and creative capital.",
    icon: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
  },
  {
    title: "Family & Estate",
    description: "Compassionate guidance through delicate family transitions and estate planning.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#1a1410]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#d4af37] font-bold tracking-[0.3em] text-xs uppercase">Core Competencies</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Areas of Expertise</h2>
          <div className="w-24 h-1 bg-[#d4af37] mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-8 bg-[#2a1b12] hover:bg-[#3d2b1f] border border-[#a67c52]/20 transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-14 h-14 bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4af37] transition-colors duration-500">
                <svg className="w-8 h-8 text-[#d4af37] group-hover:text-[#1a1410] transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={service.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-4 group-hover:text-[#d4af37] transition-colors">{service.title}</h3>
              <p className="text-[#d4c4b5] font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
