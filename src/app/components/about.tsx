import { ImageWithFallback } from './figma/ImageWithFallback';
import type { PortfolioProfile } from '../data/types';

const PLACEHOLDER = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80';

interface Props { profile: PortfolioProfile; accent: string; }

export function About({ profile, accent }: Props) {
  return (
    <section id="about" className="border-b-[4px] border-black bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-center gap-5 mb-12">
          <div className="h-16 w-[6px]" style={{ background: accent }} />
          <h2
            className="uppercase leading-none"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: 'clamp(40px, 7vw, 96px)' }}
          >
            About<span style={{ color: accent }}>/</span>Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="border-2 border-black" style={{ boxShadow: '8px 8px 0 #000' }}>
              <ImageWithFallback
                src={profile.photo || PLACEHOLDER}
                alt={profile.name}
                className="w-full h-[480px] object-cover grayscale"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <p
              className="mb-6"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 900,
                fontSize: 'clamp(24px, 2.4vw, 32px)',
                lineHeight: 1.15,
              }}
            >
              {profile.description}
            </p>

            <div
              className="uppercase mb-4 tracking-widest"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '14px' }}
            >
              <span style={{ borderBottom: `4px solid ${accent}` }}>Skills</span>
            </div>
            {profile.badges.length > 0 && (
              <ul className="flex flex-wrap gap-3">
                {profile.badges.map(s => (
                  <li
                    key={s}
                    className="uppercase px-3 py-2 border-2 border-black bg-white"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '13px' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
