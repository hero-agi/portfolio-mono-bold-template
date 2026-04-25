import type { PortfolioExperience } from '../data/types';

interface Props { experience: PortfolioExperience[]; accent: string; }

export function Experience({ experience, accent }: Props) {
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="border-b-[4px] border-black bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-center gap-5 mb-12">
          <div className="h-16 w-[6px]" style={{ background: accent }} />
          <h2
            className="uppercase leading-none"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 7vw, 96px)' }}
          >
            Experience
          </h2>
        </div>

        <div className="border-2 border-black" style={{ boxShadow: '8px 8px 0 #000' }}>
          <div
            className="hidden md:grid grid-cols-12 bg-black text-white uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '13px' }}
          >
            <div className="col-span-3 px-4 py-4 border-r-2 border-white/20">Company</div>
            <div className="col-span-3 px-4 py-4 border-r-2 border-white/20">Role</div>
            <div className="col-span-2 px-4 py-4 border-r-2 border-white/20">Period</div>
            <div className="col-span-4 px-4 py-4">Impact</div>
          </div>

          {experience.map((e, i) => (
            <div
              key={`${e.company}-${e.role}`}
              className={`grid grid-cols-1 md:grid-cols-12 border-t-2 border-black ${
                i % 2 === 1 ? 'bg-black/[0.04]' : 'bg-white'
              }`}
            >
              <div
                className="col-span-3 px-4 py-5 md:border-r-2 md:border-black uppercase flex items-center gap-3"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '18px' }}
              >
                <span className="w-2 h-6 inline-block" style={{ background: accent }} />
                {e.company}
              </div>
              <div
                className="col-span-3 px-4 py-5 md:border-r-2 md:border-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '16px' }}
              >
                {e.role}
              </div>
              <div
                className="col-span-2 px-4 py-5 md:border-r-2 md:border-black uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '14px' }}
              >
                {e.period}
              </div>
              <div
                className="col-span-4 px-4 py-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', lineHeight: 1.5 }}
              >
                {e.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
