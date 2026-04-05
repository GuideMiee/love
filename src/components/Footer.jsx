const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub',   href: '#' },
  { label: 'Layers',   href: '#' },
]

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-outline-variant/15 bg-surface">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6">
        <div className="text-lg font-bold text-primary font-headline uppercase tracking-widest">
         My site ˙∆˙
        </div>
        <div className="flex gap-8">
          {socials.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-on-surface-variant hover:text-primary transition-all duration-300
                         hover:underline decoration-primary underline-offset-4
                         font-body text-sm uppercase tracking-widest"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-on-surface-variant font-body text-sm uppercase tracking-widest">
          © 2026 GuideMiee.site
        </p>
      </div>
    </footer>
  )
}
