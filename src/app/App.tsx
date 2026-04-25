import { useEffect, useRef, useState, type ReactNode } from "react";
import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Projects } from "./components/projects";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Contact } from "./components/contact";

function Reveal({ children, from = "left" }: { children: ReactNode; from?: "left" | "right" }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setShown(true)),
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const tx = from === "left" ? "-60px" : "60px";
  return (
    <div
      ref={ref}
      style={{
        transform: shown ? "translateX(0)" : `translateX(${tx})`,
        opacity: shown ? 1 : 0,
        transition: "transform 700ms cubic-bezier(.2,.8,.2,1), opacity 700ms ease",
      }}
    >
      {children}
    </div>
  );
}

export default function App() {
  const [accent, setAccent] = useState("#FFD600");

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav accent={accent} setAccent={setAccent} />
      <Reveal from="left">
        <Hero accent={accent} />
      </Reveal>
      <Reveal from="right">
        <Projects accent={accent} />
      </Reveal>
      <Reveal from="left">
        <About accent={accent} />
      </Reveal>
      <Reveal from="right">
        <Experience accent={accent} />
      </Reveal>
      <Reveal from="left">
        <Contact accent={accent} />
      </Reveal>
    </div>
  );
}
