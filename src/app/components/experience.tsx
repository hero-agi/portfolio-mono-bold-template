const rows = [
  ["Stripe", "Staff Engineer", "2023 — Now", "Led payments reliability, 99.999% uptime"],
  ["Datadog", "Senior Engineer", "2020 — 2023", "Built log pipeline serving 2M events/sec"],
  ["Shopify", "Engineer", "2018 — 2020", "Merchant platform — checkout performance"],
  ["Freelance", "Consultant", "2016 — 2018", "Distributed systems for 12+ startups"],
  ["Nokia", "Junior Engineer", "2014 — 2016", "Embedded telecom / C++"],
];

export function Experience({ accent }: { accent: string }) {
  return (
    <section id="experience" className="border-b-[4px] border-black bg-white">
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
            Experience
          </h2>
        </div>

        <div className="border-2 border-black" style={{ boxShadow: "8px 8px 0 #000" }}>
          {/* Header */}
          <div
            className="hidden md:grid grid-cols-12 bg-black text-white uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "13px" }}
          >
            <div className="col-span-3 px-4 py-4 border-r-2 border-white/20">Company</div>
            <div className="col-span-3 px-4 py-4 border-r-2 border-white/20">Role</div>
            <div className="col-span-2 px-4 py-4 border-r-2 border-white/20">Period</div>
            <div className="col-span-4 px-4 py-4">Impact</div>
          </div>

          {rows.map((r, i) => (
            <div
              key={r[0]}
              className={`grid grid-cols-1 md:grid-cols-12 border-t-2 border-black ${
                i % 2 === 1 ? "bg-black/[0.04]" : "bg-white"
              }`}
            >
              <div
                className="col-span-3 px-4 py-5 md:border-r-2 md:border-black uppercase flex items-center gap-3"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: "18px" }}
              >
                <span
                  className="w-2 h-6 inline-block"
                  style={{ background: accent }}
                />
                {r[0]}
              </div>
              <div
                className="col-span-3 px-4 py-5 md:border-r-2 md:border-black"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "16px" }}
              >
                {r[1]}
              </div>
              <div
                className="col-span-2 px-4 py-5 md:border-r-2 md:border-black uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: "14px" }}
              >
                {r[2]}
              </div>
              <div
                className="col-span-4 px-4 py-5"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "15px", lineHeight: 1.5 }}
              >
                {r[3]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
