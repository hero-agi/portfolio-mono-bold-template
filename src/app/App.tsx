import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Nav } from './components/nav';
import { Hero } from './components/hero';
import { Projects } from './components/projects';
import { About } from './components/about';
import { Experience } from './components/experience';
import { Contact } from './components/contact';
import { usePortfolioData } from './data/usePortfolioData';

function Reveal({ children, from = 'left' }: { children: ReactNode; from?: 'left' | 'right' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setShown(true)),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tx = from === 'left' ? '-60px' : '60px';
  return (
    <div
      ref={ref}
      style={{
        transform: shown ? 'translateX(0)' : `translateX(${tx})`,
        opacity: shown ? 1 : 0,
        transition: 'transform 700ms cubic-bezier(.2,.8,.2,1), opacity 700ms ease',
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const { data, loading } = usePortfolioData();
  const [accent, setAccent] = useState('#FFD600');

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-black border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav name={data.profile.name} accent={accent} setAccent={setAccent} />
      <Reveal from="left">
        <Hero profile={data.profile} contact={data.contact} accent={accent} />
      </Reveal>
      <Reveal from="right">
        <Projects projects={data.projects} accent={accent} />
      </Reveal>
      <Reveal from="left">
        <About profile={data.profile} accent={accent} />
      </Reveal>
      <Reveal from="right">
        <Experience experience={data.experience} accent={accent} />
      </Reveal>
      <Reveal from="left">
        <Contact profile={data.profile} contact={data.contact} accent={accent} />
      </Reveal>
    </div>
  );
}
