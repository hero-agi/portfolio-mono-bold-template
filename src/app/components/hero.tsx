import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import type { PortfolioProfile, PortfolioContact } from '../data/types';

const PLACEHOLDER = 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80';

interface Props { profile: PortfolioProfile; contact: PortfolioContact; accent: string; }

export function Hero({ profile, contact, accent }: Props) {
  const { name, title, photo, stats, description } = profile;
  const [firstName, ...rest] = name.trim().split(' ');
  const lastName = rest.join(' ');

  return (
    <section className="border-b-[4px] border-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[4px] w-20" style={{ background: accent }} />
          <span
            className="uppercase tracking-[0.3em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '14px' }}
          >
            Portfolio / {new Date().getFullYear()}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8">
            <h1
              className="text-black leading-[0.85] tracking-tight uppercase"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(56px, 11vw, 160px)',
              }}
            >
              {firstName}
              {lastName && (
                <>
                  <br />
                  {lastName}
                </>
              )}
              <span style={{ color: accent }}>.</span>
            </h1>

            <div className="mt-6 inline-block">
              <span
                className="inline-block px-3 py-1 uppercase"
                style={{
                  background: accent,
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(20px, 3vw, 32px)',
                }}
              >
                {title}
              </span>
            </div>

            <p
              className="mt-8 max-w-xl text-black"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '18px', lineHeight: 1.5 }}
            >
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 border-2 border-black uppercase transition-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: '16px',
                  boxShadow: '4px 4px 0 #000',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `6px 6px 0 ${accent}`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0 #000')}
              >
                Work With Me <ArrowRight size={20} />
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 border-2 border-black uppercase transition-all"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: '16px',
                  boxShadow: '4px 4px 0 #000',
                }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = '6px 6px 0 #000')}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0 #000')}
              >
                See The Work
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div
              className="relative border-2 border-black bg-white group"
              style={{ boxShadow: '8px 8px 0 #000' }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={photo || PLACEHOLDER}
                  alt={name}
                  className="w-full h-[420px] object-cover grayscale transition-all"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-70 transition-opacity"
                  style={{ background: accent, mixBlendMode: 'multiply' }}
                />
              </div>
              <div className="border-t-2 border-black px-4 py-3 flex items-center justify-between">
                <span
                  className="uppercase"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '14px' }}
                >
                  Available Now
                </span>
                <span className="w-3 h-3 rounded-full" style={{ background: accent, border: '2px solid #000' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black text-white border-t-[4px] border-black">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-10 grid grid-cols-2 md:grid-cols-4 divide-x-2 divide-white/20">
          {[
            [`${stats.years}+`, 'Years'],
            [String(stats.projects), 'Projects'],
            [String(stats.companies), 'Companies'],
            ['100%', 'Committed'],
          ].map(([n, l]) => (
            <div key={l} className="px-4 first:pl-0">
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(48px, 6vw, 88px)',
                  lineHeight: 1,
                  color: accent,
                }}
              >
                {n}
              </div>
              <div
                className="uppercase mt-2 tracking-widest"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '14px' }}
              >
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
