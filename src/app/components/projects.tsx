import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowUpRight } from "lucide-react";

const featured = {
  number: "01",
  category: "Platform Engineering",
  title: "Zero-Downtime Migration Platform",
  desc: "Led the architecture of a billion-event-per-day streaming platform migration for a Fortune 500 fintech. Zero downtime, zero data loss.",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
};

const projects = [
  {
    category: "Distributed Systems",
    title: "Eventbus / Kafka Orchestrator",
    desc: "Open-source Kafka topology manager used by 4k+ teams.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
  },
  {
    category: "Developer Tools",
    title: "Type-Safe API Gateway",
    desc: "End-to-end typed gateway for polyglot microservices.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    category: "Speaking",
    title: "QCon 2025 — Scaling Postgres",
    desc: "Keynote on partitioning strategies for multi-tenant SaaS.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
  },
];

export function Projects({ accent }: { accent: string }) {
  return (
    <section id="work" className="border-b-[4px] border-black bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div className="flex items-center gap-5">
            <div className="h-16 w-[6px]" style={{ background: accent }} />
            <h2
              className="uppercase leading-none text-black"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(40px, 7vw, 96px)",
              }}
            >
              Selected Work
            </h2>
          </div>
          <span
            className="uppercase tracking-[0.3em]"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "13px" }}
          >
            [ 2023 — 2026 ]
          </span>
        </div>

        {/* Featured */}
        <div
          className="relative border-2 border-black bg-white mb-16 overflow-hidden group"
          style={{ boxShadow: "8px 8px 0 #000" }}
        >
          <div
            className="absolute -top-12 -right-4 pointer-events-none select-none leading-none opacity-10"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(260px, 40vw, 520px)",
              color: "#000",
            }}
          >
            {featured.number}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative border-r-0 lg:border-r-2 border-black">
              <ImageWithFallback
                src={featured.image}
                alt={featured.title}
                className="w-full h-[320px] lg:h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="p-8 md:p-12 relative">
              <div
                className="inline-block uppercase px-2 py-1 border-2 border-black mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "12px" }}
              >
                {featured.category}
              </div>
              <h3
                className="uppercase leading-[0.9] mb-6"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(32px, 4vw, 56px)",
                }}
              >
                {featured.title}
              </h3>
              <p
                className="max-w-md mb-8"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", lineHeight: 1.5 }}
              >
                {featured.desc}
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 border-b-[3px] border-black pb-1 uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "15px" }}
              >
                Read Case Study <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="border-2 border-black bg-white transition-all"
              style={{ boxShadow: "4px 4px 0 #000" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "8px 8px 0 #000")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "4px 4px 0 #000")}
            >
              <div className="relative border-b-2 border-black overflow-hidden">
                <ImageWithFallback
                  src={p.image}
                  alt={p.title}
                  className="w-full h-[220px] object-cover grayscale"
                />
                <div
                  className="absolute top-0 left-0 px-3 py-1 border-r-2 border-b-2 border-black uppercase"
                  style={{
                    background: accent,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 900,
                    fontSize: "12px",
                  }}
                >
                  0{i + 2}
                </div>
              </div>
              <div className="p-5">
                <div
                  className="uppercase mb-2 tracking-wider"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "11px" }}
                >
                  {p.category}
                </div>
                <h3
                  className="uppercase leading-tight mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "22px" }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.5,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
