import { useRef, useState } from 'react'
import gsap                  from 'gsap'
import { ScrollTrigger }     from 'gsap/ScrollTrigger'
import { useGSAP }           from '@gsap/react'
import { useNavigate } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const FILTERS = ['All', 'Web Design', 'App Dev', 'Identity', 'VR/AR']

const PROJECTS = [
  {
    id:    1,
    title: 'Aether Dynamic Systems',
    desc:  'A high-performance visualization engine for DeFi protocols — dark-mode data density and glassmorphism.',
    tags:  ['Web Design'],
    badges:['Next.js','Three.js'],
    span:  'lg:col-span-8',
    aspect:'aspect-video',
    img:   'https://lh3.googleusercontent.com/aida-public/AB6AXuB5IAXI3u5ic5_l_hfvFdojYQiIzwTS9Fbtm10q-95lZD5zLRlpsxCX7pDxiElBHFktVIvPm8HVTx4w6-NfxsHt6fR-fWAtyR7rvZBk7eOn4K1IAcO0oO8JzSNk5nfToD17-tb1C6WVIfSD2GkG4wtSoXwTTshHlvOpnYo6LfmdWr15IAeOziLOsViJobtiQh0o67F1QrfRrP1Sbqiql2lDz6Og3vVvN8UFhnw8yz4bzMIrb_PQfrd7IzqS7EsKfn5cMYkWJLmjPAU',
    cta:   'View Case Study',
  },
  {
    id:    2,
    title: 'Neo-Banking App',
    desc:  'Redefining digital banking for the next generation of nocturnal traders.',
    tags:  ['App Dev'],
    badges:['Mobile'],
    span:  'lg:col-span-4',
    aspect:'aspect-square',
    img:   'https://lh3.googleusercontent.com/aida-public/AB6AXuBmYXgHXpBuYBvvR4XFVddSn9hNY3UXEIlX2vpXHoWHEmNUvxrz0wx7jZGvhG2TVUjy_bX0kKiY3-6jwM1kfw7sdzN4dYMMIRYnOH9rr5ODcMODLJyf7JtJdOF490vXjVUDBZvwACzrc1LjSr1C3ebGAbz4eionb0CvHAlcw_O9k5V62VY5x4VS7vujUYForQHY2Rz9oJN4aFqRVtCHrWCpQ4SRx1qHx7IBRdsaauBF9hZ6o2RhEUZru0PPEmGGk6Dg_U51E5A3Svc',
    cta:   null,
  },
  {
    id:    3,
    title: 'Luminary Console',
    desc:  'Custom firmware UI for modular synthesizers and lighting controllers.',
    tags:  ['Identity'],
    badges:['Hardware'],
    span:  'lg:col-span-4',
    aspect:'aspect-square',
    img:   'https://lh3.googleusercontent.com/aida-public/AB6AXuC1gflytPjqMOyjetH_w7BI3-919yyZMwd1-3csPvDvWkjNeOrwC1xgJmkMNDMkUGwBJM62duPCHW5yqhtkLQpOHckHUmm-upzPqPdoxsXF30A-9TidULj5KxpD5mZ1uRiQcuzMs9MnEcFxIJsJQFanPPAxQW3Wz0oTdjlWZgc9HWunpSbBQBPyF4ILZW3lQtUOQcRHql1y8fXorPsfWM_JHxDGE8ylQn-2Sz4JAmM71W3NrteyMr9QB0hJzyS_r3NH6YkjOcX2CEM',
    cta:   null,
  },
  {
    id:    4,
    title: 'Void OS',
    desc:  'Experimental spatial operating system designed for the Apple Vision Pro ecosystem.',
    tags:  ['VR/AR'],
    badges:['VR/AR'],
    span:  'lg:col-span-8',
    aspect:'aspect-[21/9]',
    img:   'https://lh3.googleusercontent.com/aida-public/AB6AXuDhDzhJowO9PIhFzic56B1jNM1BnPo14eRhCvKUnJAV0TEnsEHZiFNIKoKYfrdqhocKnKbBhBxPwewYKYLFGP0Nkyj6k6NNG1OTd0neF3PGAQiL14PQZNaP6RqqT9JHta2NXj7kilQrTSFEryYYlDwHouoX_Q3RYnaqIoHveCHw1waK7N5ys_FmNOt_IiS8DYA6RINLhlLfBEXP7bD_FuqyI9dhudRY2yf-TJygjz6IlEDgQoz-ef3b3KGe0FKW44tt6czaV_PXkq4',
    cta:   'Experience Demo',
  },
]

export default function Projects() {
  const containerRef        = useRef(null)
  const [active, setActive] = useState('All')
  const cardsRef            = useRef({})
  const navigate = useNavigate()

  // Initial scroll reveal
  useGSAP(() => {
    gsap.timeline({ delay: 0.2 })
      .from('.page-kicker',  { opacity: 0, y: 22, duration: 0.5 })
      .from('.page-word',    { opacity: 0, y: 60, stagger: 0.07, duration: 0.75, ease: 'power4.out' }, '-=0.2')
      .from('.page-desc',    { opacity: 0, y: 20, duration: 0.5 }, '-=0.2')
      .from('.filter-pill',  { opacity: 0, y: 14, stagger: 0.07, duration: 0.4 }, '-=0.1')

    PROJECTS.forEach((p) => {
      gsap.from(`[data-card="${p.id}"]`, {
        scrollTrigger: { trigger: `[data-card="${p.id}"]`, start: 'top 92%' },
        opacity: 0, y: 50, duration: 0.7, ease: 'power3.out',
      })
    })

    gsap.from('.cta-section', {
      scrollTrigger: { trigger: '.cta-section', start: 'top 85%' },
      opacity: 0, y: 40, duration: 0.8, ease: 'power3.out',
    })
  }, { scope: containerRef })

  // Filter animation
  const handleFilter = (f) => {
    setActive(f)
    PROJECTS.forEach(p => {
      const el   = containerRef.current?.querySelector(`[data-card="${p.id}"]`)
      if (!el) return
      const show = f === 'All' || p.tags.includes(f)
      if (show) {
        gsap.to(el, { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out', pointerEvents: 'auto' })
        el.style.display = 'block'
      } else {
        gsap.to(el, {
          opacity: 0, scale: 0.92, duration: 0.25, ease: 'power2.in',
          onComplete: () => { el.style.display = 'none' },
        })
      }
    })
  }

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-16">
        <span className="page-kicker text-primary font-label text-xs uppercase tracking-[.3em] mb-4 block">
          Selected Works
        </span>
        <h1 className="font-headline font-extrabold tracking-tighter leading-none mb-8
                       text-6xl md:text-8xl" style={{ perspective: '800px' }}>
          {'CREATIVE'.split('').map((ch, i) => (
            <span key={i} className="page-word" style={{ display: 'inline-block' }}>{ch === ' ' ? '\u00A0' : ch}</span>
          ))}
          <br />
          <span className="text-gradient">PORTFOLIO</span>
        </h1>
        <p className="page-desc max-w-2xl text-on-surface-variant text-lg font-body leading-relaxed">
          Exploring the intersection of high-fashion aesthetics and futuristic digital interfaces.
        </p>
      </header>

      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-3">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => handleFilter(f)}
            className={`filter-pill px-7 py-2.5 rounded-full font-bold text-sm tracking-wide
                        transition-all duration-300 ${
              active === f
                ? 'bg-primary text-on-primary shadow-[0_0_18px_rgba(223,142,255,.4)]'
                : 'bg-surface-container-highest/50 backdrop-blur-md text-on-surface-variant border border-outline-variant/10 hover:text-primary hover:border-primary/30'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {PROJECTS.map(({ id, title, desc, badges, span, aspect, img, cta }) => (
          <div
            key={id}
            data-card={id}
            className={`portfolio-card ${span} group cursor-pointer relative overflow-hidden
                        rounded-xl bg-surface-container-low border border-outline-variant/10
                        transition-all duration-500 hover:border-primary/30
                        hover:shadow-[0_0_40px_rgba(223,142,255,.12)]`}
          >
            <div className={`${aspect} w-full overflow-hidden`}>
              <img
                src={img} alt={title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0
                           group-hover:scale-110 transition-all duration-700"
              />
            </div>
            <div className="p-6 md:p-8">
              <div className="flex gap-2 mb-4 flex-wrap">
                {badges.map(b => (
                  <span key={b} className="px-3 py-1 rounded-full bg-primary/10 text-primary
                                           text-[10px] uppercase font-bold tracking-widest">
                    {b}
                  </span>
                ))}
              </div>
              <h3 className="text-xl md:text-3xl font-headline font-bold mb-2
                             group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-on-surface-variant font-body text-sm mb-4">{desc}</p>
              {cta && (
                <span className="inline-flex items-center text-primary text-sm font-bold
                                 uppercase tracking-widest gap-2 group-hover:gap-4 transition-all">
                  {cta}
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="cta-section mt-32 p-12 rounded-xl bg-gradient-to-br
                      from-surface-container to-surface-container-lowest
                      border border-outline-variant/10 text-center relative overflow-hidden">
        <div className="absolute inset-0"
             style={{ background: 'radial-gradient(circle at center,rgba(223,142,255,.06) 0%,transparent 70%)' }} />
        <div className="relative z-10">
          <h2 className="text-4xl font-headline font-bold mb-6">Have a visionary project?</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg">
            Let's build something that shines in the dark.
          </p>
          <button onClick={() => navigate('/contact')} className="btn-primary px-10 py-4 text-sm uppercase tracking-widest font-extrabold">
            Start a Conversation
          </button>
        </div>
      </div>
    </div>
  )
}
