import { Handshake } from 'lucide-react';
import { platinum, gold, silver, bronze } from '../data/sponsors';

export default function SponsorsPage() {
  const SponsorCard = ({ name, tier }: { name: string; tier: 'platinum' | 'gold' | 'silver' | 'bronze' }) => {
    const base =
      'relative rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm border group focus-within:-translate-y-1 outline-none';
    const tierStyles = {
      platinum:
        'bg-[#0e0f18]/95 border-cyan-400/50 shadow-[0_0_0_1px_rgba(34,211,238,0.25)_inset,0_50px_140px_-40px_rgba(34,211,238,0.35)]',
      gold:
        'bg-[#0e0f18]/90 border-yellow-400/35 shadow-[0_0_0_1px_rgba(250,204,21,0.14)_inset,0_28px_90px_-34px_rgba(250,204,21,0.22)]',
      silver:
        'bg-[#0e0f18]/88 border-gray-300/30 shadow-[0_0_0_1px_rgba(209,213,219,0.12)_inset,0_22px_80px_-30px_rgba(209,213,219,0.18)]',
      bronze:
        'bg-[#0e0f18]/85 border-orange-200/25 shadow-[0_0_0_1px_rgba(251,146,60,0.1)_inset,0_18px_64px_-28px_rgba(251,146,60,0.16)]',
    } as const;
    const hoverScale = tier === 'platinum' ? 'hover:-translate-y-2 hover:scale-[1.02]' : tier === 'gold' ? 'hover:-translate-y-1.5 hover:scale-[1.01]' : tier === 'silver' ? 'hover:-translate-y-1.5 hover:scale-[1.01]' : 'hover:-translate-y-1';
    const ringColor = tier === 'platinum' ? 'group-hover:ring-cyan-300/30' : tier === 'gold' ? 'group-hover:ring-yellow-300/20' : tier === 'silver' ? 'group-hover:ring-gray-300/15' : 'group-hover:ring-orange-200/10';
    const textSize = tier === 'platinum' ? 'text-3xl md:text-4xl lg:text-5xl' : tier === 'gold' ? 'text-2xl md:text-3xl lg:text-4xl' : tier === 'silver' ? 'text-xl md:text-2xl lg:text-3xl' : 'text-xl md:text-2xl lg:text-3xl';
    const outerGlow = tier === 'platinum' ? 'bg-cyan-400/15 blur-[64px]' : tier === 'gold' ? 'bg-yellow-300/10 blur-[56px]' : tier === 'silver' ? 'bg-gray-300/8 blur-[52px]' : 'bg-orange-200/8 blur-[48px]';
    const gradient = tier === 'platinum' 
      ? 'bg-[radial-gradient(700px_circle_at_20%_20%,rgba(34,211,238,0.28),transparent_42%),radial-gradient(700px_circle_at_80%_60%,rgba(34,211,238,0.22),transparent_42%)]'
      : tier === 'gold'
      ? 'bg-[radial-gradient(700px_circle_at_20%_20%,rgba(250,204,21,0.28),transparent_42%),radial-gradient(700px_circle_at_80%_60%,rgba(250,204,21,0.22),transparent_42%)]'
      : tier === 'silver'
      ? 'bg-[radial-gradient(700px_circle_at_20%_20%,rgba(209,213,219,0.20),transparent_42%),radial-gradient(700px_circle_at_80%_60%,rgba(209,213,219,0.15),transparent_42%)]'
      : 'bg-[radial-gradient(700px_circle_at_20%_20%,rgba(251,146,60,0.20),transparent_42%),radial-gradient(700px_circle_at_80%_60%,rgba(251,146,60,0.15),transparent_42%)]';

    return (
      <div className={`${base} ${tierStyles[tier]} ${hoverScale}`}>
        {/* tier-based aura behind card */}
        <div className={`pointer-events-none absolute -inset-6 -z-10 rounded-3xl ${outerGlow}`} />
        <div className={`aspect-[5/1] w-full flex items-center justify-center rounded-xl bg-white/5 relative overflow-hidden ring-1 ring-white/5 ${ringColor}`}>
          <div className={`absolute inset-0 opacity-25 ${gradient}`} />
          <span className={`relative z-10 ${textSize} font-semibold tracking-wide text-gray-100 group-hover:text-white select-none`}>
            {name}
          </span>
        </div>
      </div>
    );
  };

  // benefits section removed in favor of tiered sponsor layout

  return (
    <div className="pt-16 min-h-screen bg-black overflow-x-hidden">
      {/* Page hero */}
      <div className="relative py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-yellow-500/10 border border-yellow-400/30 rounded-full mb-6">
            <span className="text-xs tracking-widest text-yellow-300">OUR SPONSORS</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Powered by Partnerships</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">We’re grateful to the companies who fuel our mission.</p>
        </div>
        {/* decorative background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-yellow-400/20 blur-3xl" />
          <div className="absolute top-10 -right-20 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Platinum */}
        <div className="mb-20">
          <p className="text-center text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-cyan-300/90 mb-6 drop-shadow">
            PLATINUM SPONSORS
          </p>
          {platinum.length > 0 ? (
            <div className="flex justify-center">
              {platinum.map((s, i) => (
                <div key={i} className="w-full max-w-2xl">
                  <SponsorCard name={s.name} tier="platinum" />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-sm">No platinum sponsors yet</p>
          )}
        </div>

        {/* Gold */}
        <div className="mb-20 relative">
          <p className="text-center text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-yellow-300/90 mb-8 drop-shadow">
            GOLD SPONSORS
          </p>
          {gold.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {gold.map((s, i) => (
                <SponsorCard key={i} name={s.name} tier="gold" />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-sm">No gold sponsors yet</p>
          )}
          {/* soft orb behind the grid */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />
          </div>
        </div>

        {/* Silver */}
        <div className="mb-20 relative">
          <p className="text-center text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-gray-300/90 mb-8 drop-shadow">
            SILVER SPONSORS
          </p>
          {silver.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {silver.map((s, i) => (
                <SponsorCard key={i} name={s.name} tier="silver" />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-sm">No silver sponsors yet</p>
          )}
          {/* soft orb behind the grid */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-80 w-80 rounded-full bg-gray-300/8 blur-3xl" />
          </div>
        </div>

        {/* Bronze */}
        <div className="mb-8">
          <p className="text-center text-sm md:text-base font-semibold uppercase tracking-[0.35em] text-orange-200/90 mb-6 drop-shadow">
            BRONZE SPONSORS
          </p>
          {bronze.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {bronze.map((s, i) => (
                <SponsorCard key={i} name={s.name} tier="bronze" />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 text-sm">No bronze sponsors yet</p>
          )}
        </div>

        {/* Call to action */}

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-12">
          <div className="text-center max-w-3xl mx-auto">
            <Handshake size={48} className="text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4">Become a Sponsor</h2>
            <p className="text-xl text-gray-300 mb-8">
              Partner with EXOTU to support the next generation of robotics innovators and gain
              access to cutting-edge research in powered exoskeleton technology.
            </p>
            <div className="flex justify-center">
              <button className="px-8 py-4 bg-transparent border-2 border-blue-500 hover:bg-blue-500/10 text-blue-400 font-semibold rounded-lg transition-all">
                Contact Partnership Team
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
