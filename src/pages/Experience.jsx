import { useRef }         from 'react'
import gsap               from 'gsap'
import { ScrollTrigger }  from 'gsap/ScrollTrigger'
import { useGSAP }        from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  {
    role:    'Senior Product Designer',
    company: 'Lumina Creative Agency',
    period:  '2021 — PRESENT',
    desc:    'Leading design systems and high-fidelity prototyping for Fortune 500 clients. Specializing in dark-mode ecosystems and glassmorphic interfaces.',
    active:  true,
  },
  {
    role:    'Interface Architect',
    company: 'Nebula Systems',
    period:  '2019 — 2021',
    desc:    'Collaborated with engineering teams to build scalable component libraries. Reduced design debt by 40% through unified documentation.',
    active:  false,
  },
  {
    role:    'Visual Designer',
    company: 'Starlight Digital',
    period:  '2017 — 2019',
    desc:    'Crafted immersive brand identities and web experiences for startups. Focused on the intersection of typography and atmospheric visual storytelling.',
    active:  false,
  },
]

const SKILLS = [
  { label: 'UI/UX Strategy',          pct: 95 },
  { label: 'Interaction Design',      pct: 88 },
  { label: 'Frontend Dev (Tailwind)', pct: 82 },
  { label: 'Motion & 3D Graphics',    pct: 74 },
]

const BADGES = ['Figma','Adobe CC','React.js','Node.js','Webflow','Three.js','GSAP','Framer']

export default function Experience() {
  const containerRef = useRef(null)

  useGSAP(() => {
    // Header
    gsap.timeline({ delay: 0.2 })
      .from('.page-kicker',  { opacity: 0, y: 22, duration: 0.5 })
      .from('.page-word',    { opacity: 0, y: 60, stagger: 0.08, duration: 0.8, ease: 'power4.out' }, '-=0.2')

    // Timeline items slide from left
    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: 'top 87%', toggleActions: 'play none none reverse' },
        opacity: 0, x: -65, duration: 0.7, delay: i * 0.06, ease: 'power3.out',
      })
    })

    // Skill bars animate width
    gsap.utils.toArray('.skill-bar').forEach(bar => {
      const target = bar.dataset.pct + '%'
      ScrollTrigger.create({
        trigger: bar, start: 'top 85%', once: true,
        onEnter: () => {
          gsap.to(bar, { width: target, duration: 1.4, ease: 'power3.out' })
          gsap.to(bar, { filter: 'drop-shadow(0 0 8px rgba(223,142,255,.7))', duration: 0.3, delay: 1.4 })
        },
      })
    })

    // Skills column slide from right
    gsap.from('.skills-section', {
      scrollTrigger: { trigger: '.skills-section', start: 'top 85%' },
      opacity: 0, x: 50, duration: 0.8, ease: 'power3.out',
    })

    // Badges
    gsap.utils.toArray('.tech-badge').forEach((b, i) => {
      gsap.from(b, {
        scrollTrigger: { trigger: b, start: 'top 92%' },
        opacity: 0, scale: 0.75, duration: 0.4, delay: i * 0.05, ease: 'back.out(1.7)',
      })
    })

    // Featured image
    gsap.from('.featured-img', {
      scrollTrigger: { trigger: '.featured-img', start: 'top 88%' },
      opacity: 0, scale: 0.92, duration: 0.9, ease: 'power3.out',
    })

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="pt-32 pb-24 px-6 md:px-8 max-w-7xl mx-auto">

      {/* Header */}
      <header className="mb-20">
        <span className="page-kicker text-primary font-label text-sm uppercase tracking-widest font-semibold mb-4 block">
          Professional Journey
        </span>
        <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-tight">
          {'Crafting Digital Realms'.split(' ').map((w, i) => (
            <span key={i} className="page-word" style={{ display: 'inline-block', marginRight: '0.25em' }}>
              {i === 1 ? <span className="text-gradient">{w}</span>
               : i === 2 ? <span className="text-gradient">{w}</span>
               : w}
            </span>
          ))}
        </h1>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* ── Timeline ──────────────────────────────────────── */}
        <section className="lg:col-span-7 space-y-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="material-symbols-outlined text-primary text-3xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            <h2 className="text-2xl font-headline font-bold">Experience</h2>
          </div>

          <div className="space-y-4">
            {TIMELINE.map(({ role, company, period, desc, active }, idx) => (
              <div key={idx}
                   className="timeline-item group relative pl-12 pb-12
                              border-l border-outline-variant/30 last:pb-0">

                {/* Dot */}
                <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full
                                 group-hover:scale-125 transition-transform duration-300
                                 ${active
                                   ? 'bg-primary ring-4 ring-primary/20'
                                   : 'bg-surface-variant border-2 border-primary/50 group-hover:bg-primary'}`}>
                  {active && (
                    <span className="absolute inset-[-4px] rounded-full border-2
                                     border-primary/40 animate-ping2" />
                  )}
                </div>

                {/* Card */}
                <div className="glass-card p-8 rounded-xl border border-outline-variant/10
                                hover:border-primary/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-headline font-bold">{role}</h3>
                      <p className="text-primary font-medium">{company}</p>
                    </div>
                    <span className="text-on-surface-variant text-sm bg-surface-variant/50
                                     px-3 py-1 rounded-full whitespace-nowrap font-label">
                      {period}
                    </span>
                  </div>
                  <p className="text-on-surface-variant leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────────── */}
        <section className="skills-section lg:col-span-5 space-y-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="material-symbols-outlined text-primary text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
              <h2 className="text-2xl font-headline font-bold">Skills</h2>
            </div>

            <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 space-y-8">
              {SKILLS.map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex justify-between mb-3 items-end">
                    <span className="font-headline font-bold">{label}</span>
                    <span className="text-primary text-sm font-label">{pct}%</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className="skill-bar h-full bg-primary rounded-full"
                      data-pct={pct}
                      style={{ width: 0 }}
                    />
                  </div>
                </div>
              ))}

              {/* Badges */}
              <div className="pt-8 border-t border-outline-variant/20">
                <h4 className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-6">
                  Technologies &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {BADGES.map(b => (
                    <span key={b}
                          className="tech-badge px-4 py-2 rounded-full border border-outline-variant/30
                                     text-sm font-medium cursor-default transition-all
                                     hover:bg-primary/10 hover:border-primary/50 hover:text-primary">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured image */}
          <div className="featured-img relative group h-64 overflow-hidden rounded-xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA7pEznWy9fMev-7q1K9L2NtmrW5emxDHvoWQFf45q15a_NW3lxI2T8LHZgr02FClFI2iRxkOKpfR8NmjbO9xUxwvbfqLJn_bVNOLa4a9ejxCy5KMBcrScpaH1fUx9kkZ4NScC0pbVlJPtD-CFOkcagJwjcDavWJjB57jDDzhEDSt06yF6kYL3SuxMayykkvLkLT47mLBJtm7EFaUqi4qeAcouMBUZIB0FXJOUkyCtjBgpfTQ1lChNXGJJx24Nay1wOX3504a4i8g"
              alt="Abstract Neon Lights"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0
                         transition-all duration-700 scale-105 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-headline font-bold text-lg">Constant Evolution</p>
              <p className="text-primary text-sm font-label uppercase tracking-widest">Designing the unknown</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
