
import React from 'react';

const Credentials: React.FC = () => {
  const badges = [
    { name: "International Bar Association", icon: "⚖️" },
    { name: "Chambers & Partners 2024", icon: "🏆" },
    { name: "Global Corporate Council", icon: "🏢" },
    { name: "Certified Arbitrator Guild", icon: "🤝" }
  ];

  return (
    <section className="py-20 bg-[#0c0907] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
          {badges.map((badge, i) => (
            <div key={i} className="flex flex-col items-center gap-6 group cursor-default">
              <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center text-4xl bg-black/40 group-hover:border-[#d4af37] transition-all duration-700">
                {badge.icon}
              </div>
              <span className="text-[#d4af37] text-[10px] font-bold tracking-[0.5em] uppercase text-center max-w-[120px]">{badge.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
