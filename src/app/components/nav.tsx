interface Props {
  name: string;
  accent: string;
  setAccent: (c: string) => void;
}

export function Nav({ name, accent, setAccent }: Props) {
  const swatches = [
    { c: '#FFD600', n: 'Yellow' },
    { c: '#FF0000', n: 'Red' },
    { c: '#0000FF', n: 'Blue' },
    { c: '#00E676', n: 'Green' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-[4px] border-black">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <a
          href="#"
          className="uppercase flex items-center gap-2"
          style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 900, fontSize: '18px' }}
        >
          <span className="w-4 h-4 border-2 border-black" style={{ background: accent }} />
          {name.split(' ')[0]}
        </a>

        <div className="hidden md:flex items-center gap-7 uppercase">
          {['Work', 'About', 'Experience', 'Contact'].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '13px' }}
              className="hover:bg-black hover:text-white px-2 py-1 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {swatches.map(s => (
            <button
              key={s.c}
              onClick={() => setAccent(s.c)}
              title={s.n}
              aria-label={s.n}
              className="w-6 h-6 border-2 border-black transition-transform hover:scale-110"
              style={{ background: s.c, boxShadow: accent === s.c ? '2px 2px 0 #000' : 'none' }}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}
