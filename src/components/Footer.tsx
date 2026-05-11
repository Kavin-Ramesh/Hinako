const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "navigate",
    links: [
      { label: "about", href: "#story" },
      { label: "waitlist", href: "#join" },
      { label: "faq", href: "#faq" },
    ],
  },
  {
    title: "social",
    links: [
      { label: "instagram", href: "https://instagram.com/hinako", external: true },
      { label: "tiktok", href: "https://tiktok.com/@hinako", external: true },
      { label: "pinterest", href: "https://pinterest.com/hinako", external: true },
    ],
  },
  {
    title: "official",
    links: [
      { label: "privacy", href: "#" },
      { label: "terms", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[color:var(--hinako-line)]">
      <div className="border-t border-[color:var(--hinako-line)] px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="uppercase-wide mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="link-underline text-sm"
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="uppercase-wide mb-4">contact</h4>
            <a href="mailto:hello@hinako.co" className="link-underline text-sm">
              hello@hinako.co
            </a>
          </div>
        </div>
        <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between text-xs text-[color:var(--hinako-muted)]">
          <p>© hinako 2026 · made to stay.</p>
          <button
            type="button"
            className="uppercase-wide link-underline"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
