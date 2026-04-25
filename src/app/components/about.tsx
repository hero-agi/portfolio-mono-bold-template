import { ImageWithFallback } from "./figma/ImageWithFallback";

const skills = [
  "TypeScript", "Go", "Rust", "Postgres", "Kafka",
  "Kubernetes", "AWS", "System Design", "Mentorship", "Public Speaking",
];

export function About({ accent }: { accent: string }) {
  return (
    <section id="about" className="border-b-[4px] border-black bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex items-center gap-5 mb-12">
          <div className="h-16 w-[6px]" style={{ background: accent }} />
          <h2
            className="uppercase leading-none"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(40px, 7vw, 96px)",
            }}
          >
            About<span style={{ color: accent }}>/</span>Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <div className="border-2 border-black" style={{ boxShadow: "8px 8px 0 #000" }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&q=80"
                alt="Portrait"
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
                fontSize: "clamp(24px, 2.4vw, 32px)",
                lineHeight: 1.15,
              }}
            >
              I build software that refuses to be fragile.
              <span
                style={{
                  background: accent,
                  padding: "0 6px",
                  display: "inline",
                }}
              >
                No shortcuts
              </span>
              , no ceremony, no fluff.
            </p>
            <p
              className="mb-5"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", lineHeight: 1.6 }}
            >
              A decade ago I wrote my first production bug — a race condition that
              took down a bank's overnight batch. Since then I've obsessed over the
              craft: distributed systems, developer experience, and the art of
              saying no to complexity.
            </p>
            <p
              className="mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "17px", lineHeight: 1.6 }}
            >
              Today I consult, speak, and lead platform teams building infrastructure
              that outlives the hype cycle. I believe in boring technology, brutal
              clarity, and the compound interest of small correct decisions.
            </p>

            <div
              className="uppercase mb-4 tracking-widest"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "14px" }}
            >
              <span style={{ borderBottom: `4px solid ${accent}` }}>Skills</span>
            </div>
            <ul className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <li
                  key={s}
                  className="uppercase px-3 py-2 border-2 border-black bg-white"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "13px" }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
