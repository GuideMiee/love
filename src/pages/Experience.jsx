import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const TIMELINE = [
  {
    role: 'System Analyst',
    company: 'T.A.I. Solution Service',
    period: '1 May 2025 - PRESENT',
    active: true,
  },
  {
    role: 'Mobile Developer',
    company: 'T.A.I. Solution Service',
    period: '5 Jan - 25 Apr 2025',
    active: false,
  },
]

const SKILLS = [
  { label: 'Creative', level: 'High' },
  { label: 'UX/UI Design', level: 'High' },
  { label: 'System Analysis', level: 'Medium' },
  { label: 'Frontend', level: 'Low' },
  { label: 'Tester', level: 'Low' },

]

const LEVEL_STYLE = {
  High: 'text-primary',
  Medium: 'text-on-surface-variant',
  Low: 'text-on-surface-variant/50',
}

// ── Technologies & Tools ─────────────────────────────────────────
// เปลี่ยน src เป็น path รูปของจารย์ได้เลยครับ
const TOOLS = [
  { name: 'Git', src: 'src/images/git.png' },
  { name: 'Github Desktop', src: 'src/images/github.jpg' },
  { name: 'Figma', src: 'src/images/figma.png' },  // ← ใส่ path รูปที่นี่
  { name: 'React.js', src: 'src/images/react.png' },
  { name: 'Tailwind', src: 'src/images/TW.png' },
  { name: 'Claude', src: 'src/images/claude.png' },
  { name: 'Draw.io', src: 'src/images/draw.png' },


]

const Doc = [
  { name: 'Canva', src: 'src/images/canva.png' },
  { name: 'Capcut', src: 'src/images/capcut.jpg' },
  { name: 'Word', src: 'src/images/word.png' },
  { name: 'Excel', src: 'src/images/excel.png' },
  { name: 'Powerpoint', src: 'src/images/powerpoint.png' },
]

export default function Experience() {
  const containerRef = useRef(null)

  useGSAP(() => {
    gsap.timeline({ delay: 0.2 })
      .from('.page-kicker', { opacity: 0, y: 22, duration: 0.5 })
      .from('.page-word', { opacity: 0, y: 60, stagger: 0.08, duration: 0.8, ease: 'power4.out' }, '-=0.2')

    gsap.utils.toArray('.timeline-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: { trigger: item, start: 'top 87%', toggleActions: 'play none none reverse' },
        opacity: 0, x: -65, duration: 0.7, delay: i * 0.06, ease: 'power3.out',
      })
    })

    gsap.from('.skills-section', {
      scrollTrigger: { trigger: '.skills-section', start: 'top 85%' },
      opacity: 0, x: 50, duration: 0.8, ease: 'power3.out',
    })

    gsap.utils.toArray('.skill-row').forEach((row, i) => {
      gsap.from(row, {
        scrollTrigger: { trigger: row, start: 'top 90%' },
        opacity: 0, y: 20, duration: 0.5, delay: i * 0.07, ease: 'power3.out',
      })
    })

    gsap.utils.toArray('.tool-card').forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: { trigger: card, start: 'top 92%' },
        opacity: 0, scale: 0.8, duration: 0.4, delay: i * 0.05, ease: 'back.out(1.7)',
      })
    })

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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">

        {/* ── Timeline ──────────────────────────────────────── */}
        <section className="lg:col-span-7 flex flex-col gap-12">
          <div className="flex items-center gap-4 mb-2">
            <span className="material-symbols-outlined text-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}>work</span>
            <h2 className="text-2xl font-headline font-bold">Experience</h2>
          </div>

          <div className="space-y-4">
            {TIMELINE.map(({ role, company, period, active }, idx) => (
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
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div className='items-center gap-2 space-y-3'>
                      <h3 className="text-xl font-headline font-bold">{role}</h3>
                      <p className="text-primary font-medium">{company}</p>
                    </div>
                    <span className="text-on-surface-variant text-sm bg-surface-variant/50
                                     px-3 py-1 rounded-full whitespace-nowrap font-label">
                      {period}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Featured image — flex-1 ยืดเต็มพื้นที่ที่เหลือให้เสมอกับ Skills */}
          <div className="featured-img relative flex-1 min-h-[200px] overflow-hidden rounded-xl group">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA7pEznWy9fMev-7q1K9L2NtmrW5emxDHvoWQFf45q15a_NW3lxI2T8LHZgr02FClFI2iRxkOKpfR8NmjbO9xUxwvbfqLJn_bVNOLa4a9ejxCy5KMBcrScpaH1fUx9kkZ4NScC0pbVlJPtD-CFOkcagJwjcDavWJjB57jDDzhEDSt06yF6kYL3SuxMayykkvLkLT47mLBJtm7EFaUqi4qeAcouMBUZIB0FXJOUkyCtjBgpfTQ1lChNXGJJx24Nay1wOX3504a4i8g"
              alt="Abstract Neon Lights"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0
                         transition-all duration-700 scale-105 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-headline font-bold text-lg">Constant Evolution</p>
              <p className="text-primary text-sm font-label uppercase tracking-widest">Designing the unknown</p>
            </div>
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

            <div className="bg-surface-container-low p-8 rounded-sm border border-outline-variant/10 space-y-6">

              {SKILLS.map(({ label, level }) => (
                <div key={label} className="skill-row flex justify-between items-baseline">
                  <span className="font-headline font-bold text-on-surface">{label}</span>
                  <span className={`font-label text-sm font-semibold uppercase tracking-widest ${LEVEL_STYLE[level]}`}>
                    {level}
                  </span>
                </div>
              ))}

              {/* ── Technologies Tools (รูปภาพ) ────────────── */}
              <div className="pt-8 border-t border-outline-variant/20">
                <h4 className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-6">
                  Technologies &amp; Tools
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {TOOLS.map(({ name, src }) => (
                    <div
                      key={name}
                      className="tool-card flex flex-col items-center gap-2 p-3 rounded-xl justify-center
                                 border border-outline-variant/20 bg-surface-container
                                 hover:border-primary/40 hover:bg-primary/5
                                 transition-all duration-300 cursor-default group "
                    >
                      {/* รูปภาพ — ใส่ path ใน src ของ TOOLS array ด้านบน */}
                      <div className="w-10 h-10 rounded-2 flex items-center justify-center">
                        {src ? (
                          <img
                            src={src}
                            alt={name}
                            className="w-full h-full object-contain rounded-md"
                          />
                        ) : (
                          // Placeholder เมื่อยังไม่มีรูป
                          <span className="material-symbols-outlined text-outline text-xl">image</span>
                        )}
                      </div>
                      <span className="text-[11px] font-label text  -on-surface-variant
                                       group-hover:text-primary transition-colors text-center leading-tight w-full block">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

                            {/* ── Document (รูปภาพ) ────────────── */}
              <div className="pt-8 border-t border-outline-variant/20">
                <h4 className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-6">
                  Document
                </h4>
                <div className="grid grid-cols-4 gap-3">
                  {Doc.map(({ name, src }) => (
                    <div
                      key={name}
                      className="tool-card flex flex-col items-center gap-2 p-3 rounded-xl
                                 border border-outline-variant/20 bg-surface-container
                                 hover:border-primary/40 hover:bg-primary/5
                                 transition-all duration-300 cursor-default group"
                    >
                      {/* รูปภาพ — ใส่ path ใน src ของ TOOLS array ด้านบน */}
                      <div className="w-10 h-10 rounded-2 flex items-center justify-center">
                        {src ? (
                          <img
                            src={src}
                            alt={name}
                            className="w-full h-full object-contain rounded-md"
                          />
                        ) : (
                          // Placeholder เมื่อยังไม่มีรูป
                          <span className="material-symbols-outlined text-outline text-xl">image</span>
                        )}
                      </div>
                      <span className="text-[11px] font-label text-on-surface-variant
                                       group-hover:text-primary transition-colors text-center leading-tight w-full block">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  )
}
