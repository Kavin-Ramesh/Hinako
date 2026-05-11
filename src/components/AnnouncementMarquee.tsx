const ITEMS = [
  "launching soon",
  "join the waitlist for first access",
  "launching soon",
  "early access drops first",
];

/** Marquee strip — modeled after testsite `Announcement` */
export function AnnouncementMarquee() {
  const loop = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div className="w-full overflow-hidden border-b border-[color:var(--hinako-line)] bg-[color:var(--hinako-bg)]">
      <div className="marquee-track py-2 text-[11px] uppercase tracking-[0.22em] text-[color:var(--hinako-text)]">
        {loop.map((t, i) => (
          <span key={i} className="inline-flex items-center px-6">
            {t}
            <span className="mx-6 opacity-50">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
