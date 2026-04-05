import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import ParticleCanvas from '../components/ParticleCanvas'

gsap.registerPlugin(ScrollTrigger)

/* ── Project data ─────────────────────────────────────────────── */
const projects = [
  {
    title: 'Nebula Dashboard',
    tags: 'SaaS • UI Design • Next.js',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaWF8zOkPnamsvXUP9CvUSW1K83LopfCvBzqdPyMfBqByYYcZu5DiAiDDsn_rQtLoDGD5omj9CWDFPGkEPYM2nOqmp8ZU45xkAN5VSl-38X_M-ODR7p1fD3tUfR80QgrVuakRhW6oCIpQaJtOActaFEQV0ro3-Hz36oQOA5-RC04lEUMy6tjCsnCrLAVx2emi15YAkcDQFEmvFKB2qydLOYFUMdOU0bSYVZQjYOh9RLtaomt8zKlJdsrNpSd3pFUZmyywHhQdEogI',
  },
  {
    title: 'Lumina Identity',
    tags: 'Branding • WebGL • 3D',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARDf4YtLvuEKH_P3jssLgggRxL5cejZlfyifgbY9XiI0wwlNh34DXtnOJ7WjyRH-vjZJOcWGAURC-oztCvVsPq9fh40nEXHGzMAC5sN2lTx5N2jlDUjX3ZUrAP1E4oOUXlx_g66QmA455J1jQ6ZNMEvFkHnr8qd6EdSsmA-Y0nq6XZKhKgGkshQdL2iHJ9vzUIpNziE_WvDbcNEtEOfcXginFGY3ImreTcG9NgzfuUbiLQT8xASWBYg-5maxqIJr0ITIzbHgUIW1c',
  },
]

export default function Home() {
  const containerRef = useRef(null)
  const navigate = useNavigate()

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    // Hero kicker
    tl.from('.hero-kicker', { opacity: 0, y: 22, duration: 0.6, ease: 'power3.out' })

    // Hero title words
    tl.from('.hero-word', {
      opacity: 0,
      y: 90,
      rotateX: -35,
      stagger: 0.1,
      duration: 0.9,
      ease: 'power4.out',
    }, '-=0.25')

    // Subtitle + CTAs
    tl.from('.hero-subtitle', { opacity: 0, y: 22, duration: 0.55, ease: 'power3.out' }, '-=0.3')
    tl.from('.hero-cta > *', { opacity: 0, y: 18, stagger: 0.12, duration: 0.45 }, '-=0.2')

    // Bento cards on scroll
    gsap.utils.toArray('.bento-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none reverse' },
        opacity: 0, y: 55, duration: 0.7, delay: i * 0.07, ease: 'power3.out',
      })
    })

    // Stats counter
    const statEl = containerRef.current?.querySelector('.stat-count')
    if (statEl) {
      ScrollTrigger.create({
        trigger: statEl, start: 'top 80%', once: true,
        onEnter: () => {
          const obj = { val: 0 }
          gsap.to(obj, {
            val: 8, duration: 1.6, ease: 'power2.out',
            onUpdate() { statEl.textContent = Math.round(obj.val) + '+' },
          })
        },
      })
    }

    // Project cards
    gsap.utils.toArray('.project-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 90%' },
        opacity: 0, y: 55, duration: 0.75, delay: i * 0.15, ease: 'power3.out',
      })
    })

    // Contact CTA
    gsap.from('.home-cta-section', {
      scrollTrigger: { trigger: '.home-cta-section', start: 'top 82%' },
      opacity: 0, scale: 0.95, duration: 0.9, ease: 'power3.out',
    })

    // Pulsing available dot
    gsap.to('.available-dot', {
      scale: 1.5, opacity: 0.3, duration: 1, repeat: -1, yoyo: true, ease: 'sine.inOut',
    })

    // Magnetic Hire Me
    const hireBtn = containerRef.current?.querySelector('.btn-hire')
    if (hireBtn) {
      hireBtn.addEventListener('mousemove', (e) => {
        const r = hireBtn.getBoundingClientRect()
        const dx = e.clientX - (r.left + r.width / 2)
        const dy = e.clientY - (r.top + r.height / 2)
        gsap.to(hireBtn, { x: dx * 0.25, y: dy * 0.25, duration: 0.3, ease: 'power2.out' })
      })
      hireBtn.addEventListener('mouseleave', () => {
        gsap.to(hireBtn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.5)' })
      })
    }

  }, { scope: containerRef })

  return (
    <div ref={containerRef}>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative h-screen overflow-hidden px-6">
        <ParticleCanvas />

        {/* Ambient orb — กึ่งกลางจอ */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full pointer-events-none" />

        {/* Zone 1 — Kicker บนสุด (ใต้ navbar) */}
        <div className="absolute top-28 inset-x-0 flex justify-center z-10">
          <span className="hero-kicker text-primary text-sm uppercase tracking-[.3em] font-semibold">
            System Analyst &amp; UI/UX Designer
          </span>
        </div>

        {/* Zone 2 — Title กึ่งกลาง viewport */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1
            className="font-headline font-extrabold leading-none tracking-tighter text-center
                       text-[20vw] md:text-[18vw] lg:text-[16vw]"
            style={{ perspective: '800px' }}
          >
            <span
              className="hero-word block bg-gradient-to-b from-purple-400 to-purple-900
                         bg-clip-text text-transparent"
            >
              สวัสดี
            </span>
          </h1>
        </div>

        {/* Zone 3 — Subtitle + CTA ล่างสุด */}
        <div className="absolute -bottom-10 left-0 right-0 flex flex-col items-center gap-8 p-6">
          <p className="hero-subtitle max-w-xl text-center text-on-surface-variant
                        text-md md:text-2xl font-body leading-relaxed">
            A Nocturnal Luminary building immersive interfaces and seamless
            digital ecosystems for the next generation of the web.
          </p>
          <div className="hero-cta flex flex-wrap justify-center gap-6">
            <button
              onClick={() => navigate('/projects')}
              className="btn-primary px-10 py-4 text-lg"
            >
              View Projects
            </button>
            <button
              onClick={() => navigate('/experience')}
              className="btn-glass px-10 py-4 text-lg"
            >
              My Process
            </button>
          </div>
        </div>
      </section>

      {/* ── About / Bento ───────────────────────────────────── */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* About text */}
          <div className="bento-card md:col-span-8 bg-surface-container-low rounded-xl p-12 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-primary text-sm uppercase tracking-widest font-bold mb-4 block">About Me</span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 text-on-surface">
                Pioneering the Future of Visual Interaction.
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl">
                I specialize in creating high-performance, visually stunning web experiences that live
                at the intersection of design and technology. My approach is rooted in minimalist
                principles and maximalist impact.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full
                            blur-3xl group-hover:bg-primary/10 transition-colors duration-700" />
          </div>

          {/* Skills pill */}
          <div className="bento-card md:col-span-4 bg-primary text-on-primary rounded-xl p-12 flex flex-col justify-between">
            <span className="text-on-primary/70 text-sm uppercase tracking-widest font-bold">Skills</span>
            <ul className="space-y-4 text-2xl font-headline font-bold">
              {['UI Design', 'Development', 'Interaction', '3D Graphics'].map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Stats */}
          <div className="bento-card md:col-span-4 bg-surface-container-highest rounded-xl p-8
                          flex flex-col items-center text-center">
            <span className="stat-count text-5xl font-black text-primary mb-2">0+</span>
            <span className="text-on-surface-variant uppercase tracking-widest text-xs font-bold">Years Experience</span>
          </div>

          {/* Available */}
          <div className="bento-card md:col-span-8 bg-surface-container-low rounded-xl p-8
                          flex items-center justify-between">
            <div>
              <span className="text-on-surface text-xl font-bold block">Available for new ventures</span>
              <span className="text-on-surface-variant">Currently based in Tokyo, Japan</span>
            </div>
            <div className="relative">
              <div className="available-dot w-4 h-4 rounded-full bg-primary
                              shadow-[0_0_10px_#df8eff]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────── */}
      <section className="py-24 px-6 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="projects-title text-primary text-sm uppercase tracking-widest font-bold mb-4 block">
                Work Portfolio
              </span>
              <h2 className="projects-title text-5xl md:text-6xl font-headline font-extrabold tracking-tight">
                Featured <span className="text-on-surface-variant">Creations</span>
              </h2>
            </div>
            <p className="max-w-md text-on-surface-variant mb-2">
              A curated selection of digital products crafted with precision and purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map(({ title, tags, img }) => (
              <div key={title} className="project-card group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl bg-surface-container mb-6 aspect-video">
                  <img
                    src={img} alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0
                               group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-surface/40 opacity-0 group-hover:opacity-100
                                  transition-opacity flex items-center justify-center backdrop-blur-sm">
                    <button className="btn-primary px-8 py-3 flex items-center gap-2">
                      View Project
                      <span className="material-symbols-outlined text-sm">arrow_outward</span>
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-1">{title}</h3>
                  <p className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">{tags}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────── */}
      <section className="home-cta-section py-32 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold mb-8">
            Let's build the{' '}
            <span className="text-gradient-lr bg-clip-text text-transparent text-gradient">future</span>{' '}
            together.
          </h2>
          <p className="text-on-surface-variant text-lg mb-10">Have a vision? Let's bring it into reality.</p>
          <button
            onClick={() => navigate('/contact')}
            className="btn-hire btn-primary px-12 py-5 text-lg"
          >
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  )
}
