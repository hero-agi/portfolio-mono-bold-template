import { ArrowUpRight } from 'lucide-react';
import type { PortfolioProfile, PortfolioContact } from '../data/types';

interface Props { profile: PortfolioProfile; contact: PortfolioContact; accent: string; }

export function Contact({ profile, contact, accent }: Props) {
  const socials: { label: string; href: string }[] = [
    contact.linkedin ? { label: 'LinkedIn', href: contact.linkedin } : null,
    contact.github   ? { label: 'GitHub',   href: contact.github   } : null,
    contact.twitter  ? { label: 'Twitter',  href: contact.twitter  } : null,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <section id="contact" className="bg-black text-white border-b-[4px] border-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="flex items-center gap-5 mb-10">
          <div className="h-16 w-[6px]" style={{ background: accent }} />
          <span
            className="uppercase tracking-[0.3em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '13px' }}
          >
            [ Let's Work ]
          </span>
        </div>

        <h2
          className="uppercase leading-[0.9] mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: 'clamp(44px, 9vw, 140px)' }}
        >
          Have a big
          <br />
          project<span style={{ color: accent }}>?</span>
        </h2>

        <a
          href={`mailto:${contact.email}`}
          className="block break-all hover:underline"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(28px, 5vw, 72px)',
            textDecorationColor: accent,
            textUnderlineOffset: '8px',
          }}
        >
          {contact.email}
        </a>

        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-3 text-black px-8 py-4 border-2 border-white uppercase transition-all"
            style={{
              background: accent,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: '16px',
              boxShadow: '4px 4px 0 #fff',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '6px 6px 0 #fff')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0 #fff')}
          >
            Get In Touch <ArrowUpRight size={20} />
          </a>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 border-2 border-white uppercase transition-all"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 900,
                fontSize: '16px',
                boxShadow: '4px 4px 0 #fff',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `6px 6px 0 ${accent}`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0 #fff')}
            >
              {s.label} <ArrowUpRight size={18} />
            </a>
          ))}
        </div>

        <div
          className="mt-20 pt-8 border-t-[4px] border-white/20 flex flex-wrap justify-between gap-4 uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '12px' }}
        >
          <span>© {new Date().getFullYear()} — {profile.name}</span>
          <span>Built with brutal intent</span>
        </div>
      </div>
    </section>
  );
}
