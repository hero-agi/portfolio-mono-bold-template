import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProject } from '../data/types';

const PLACEHOLDER_IMG = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80';

interface Props { projects: PortfolioProject[]; accent: string; }

export function Projects({ projects, accent }: Props) {
  if (projects.length === 0) return null;

  const [featured, ...rest] = projects;

  return (
    <section id="work" className="border-b-[4px] border-black bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="flex items-center gap-5">
            <div className="h-16 w-[6px]" style={{ background: accent }} />
            <h2
              className="uppercase leading-none text-black"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 7vw, 96px)' }}
            >
              Selected Work
            </h2>
          </div>
          <span
            className="uppercase tracking-[0.3em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '13px' }}
          >
            [ {new Date().getFullYear()} ]
          </span>
        </div>

        {/* Featured */}
        <div
          className="relative border-2 border-black bg-white mb-16 overflow-hidden group"
          style={{ boxShadow: '8px 8px 0 #000' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative border-r-0 lg:border-r-2 border-black">
              <ImageWithFallback
                src={featured.image || PLACEHOLDER_IMG}
                alt={featured.title}
                className="w-full h-[320px] lg:h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-8 md:p-12 relative">
              <div
                className="inline-block uppercase px-2 py-1 border-2 border-black mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '12px' }}
              >
                {featured.category}
              </div>
              <h3
                className="uppercase leading-[0.9] mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: 'clamp(32px, 4vw, 56px)' }}
              >
                {featured.title}
              </h3>
              <p
                className="max-w-md mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '17px', lineHeight: 1.5 }}
              >
                {featured.problem}
              </p>
              {featured.result && (
                <p
                  className="max-w-md mb-8 font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', lineHeight: 1.5, color: accent !== '#FFD600' ? accent : '#000' }}
                >
                  Result: {featured.result}
                </p>
              )}
              {featured.demoUrl && (
                <a
                  href={featured.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b-[3px] border-black pb-1 uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '15px' }}
                >
                  View Project <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {rest.map((p, i) => (
              <article
                key={p.title}
                className="border-2 border-black bg-white transition-all"
                style={{ boxShadow: '4px 4px 0 #000' }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '8px 8px 0 #000')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0 #000')}
              >
                <div className="relative border-b-2 border-black overflow-hidden">
                  <ImageWithFallback
                    src={p.image || PLACEHOLDER_IMG}
                    alt={p.title}
                    className="w-full h-[220px] object-cover grayscale"
                  />
                  <div
                    className="absolute top-0 left-0 px-3 py-1 border-r-2 border-b-2 border-black uppercase"
                    style={{ background: accent, fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '12px' }}
                  >
                    0{i + 2}
                  </div>
                </div>
                <div className="p-5">
                  <div
                    className="uppercase mb-2 tracking-wider"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '11px' }}
                  >
                    {p.category}
                  </div>
                  <h3
                    className="uppercase leading-tight mb-3"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '22px' }}
                  >
                    {p.title}
                  </h3>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '15px', lineHeight: 1.5 }}>
                    {p.problem}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
