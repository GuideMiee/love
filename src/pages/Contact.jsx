import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const containerRef = useRef(null)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useGSAP(() => {
    // Floating orbs
    gsap.to('.orb-tl', { x: 35, y: 25, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
    gsap.to('.orb-br', { x: -35, y: -28, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })

    // Header entrance
    gsap.timeline({ delay: 0.2 })
      .from('.page-kicker', { opacity: 0, y: 22, duration: 0.5 })
      .from('.contact-word', { opacity: 0, y: 70, stagger: 0.07, duration: 0.85, ease: 'power4.out' }, '-=0.2')
      .from('.contact-desc', { opacity: 0, y: 22, duration: 0.5 }, '-=0.2')
      .from('.contact-info > *', { opacity: 0, x: -30, stagger: 0.12, duration: 0.5, ease: 'power3.out' }, '-=0.2')

    // Form panel
    gsap.from('.contact-form-panel', {
      scrollTrigger: { trigger: '.contact-form-panel', start: 'top 85%' },
      opacity: 0, x: 55, duration: 0.9, ease: 'power3.out',
    })

    // Deco map
    gsap.from('.deco-map', {
      scrollTrigger: { trigger: '.deco-map', start: 'top 90%' },
      opacity: 0, y: 22, duration: 0.7, ease: 'power3.out',
    })
  }, { scope: containerRef })

  const handleFocus = (e) => {
    gsap.to(e.target, { borderBottomColor: '#df8eff', duration: 0.3 })
  }
  const handleBlur = (e) => {
    gsap.to(e.target, { borderBottomColor: 'rgba(73,72,71,.4)', duration: 0.3 })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    // Simulate API call
    await new Promise(r => setTimeout(r, 1500))
    setSending(false)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const inputClass = `w-full bg-transparent border-0 border-b py-3 focus:ring-0 outline-none
                      text-on-surface placeholder:text-outline transition-all font-body`

  const infoItems = [
    { icon: 'mail', label: 'Email Me', value: 'kai.gured@gmail.com' },
    { icon: 'location_on', label: 'Location', value: 'Bangkok Thailand • GMT +66' },
    { icon: 'hub', label: 'Social', value: 'Look in my footer' },

  ]

  return (
    <main ref={containerRef} className="relative min-h-screen pt-32 pb-20 overflow-x-hidden">

      {/* Ambient orbs */}
      <div className="orb-tl absolute top-[-10%] left-[-10%] w-[50%] h-[50%]
                      bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="orb-br absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%]
                      bg-tertiary-container/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* ── Left: Editorial Header ─────────────────────── */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="page-kicker text-xs font-label uppercase tracking-[.3em] text-primary font-semibold">
                Get In Touch
              </span>
              <h1 className="text-6xl md:text-7xl font-headline font-extrabold
                             tracking-tighter leading-[.9] text-on-surface mt-2">
                {/* {["Let's ", "build  ", "the"].map((w, i) => (
                  <span key={i} className="contact-word"
                        style={{ display: 'inline-block' }}>
                    {w}
                  </span>
                ))} */}
                <span>Let's build the</span>
                <span className="contact-word text-gradient w-max" style={{ display: 'block' }}>
                  future.
                </span>
              </h1>
            </div>

            <p className="contact-desc text-lg text-on-surface-variant max-w-md leading-relaxed">
              Currently seeking new opportunities and creative collaborations. If you have
              a project in mind, drop a message below.
            </p>

            <div className="contact-info pt-8 space-y-6">
              {infoItems.map(({ icon, label, value }) => (
                <div key={icon} className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center
                                  text-primary group-hover:bg-primary group-hover:text-on-primary
                                  transition-all duration-500">
                    <span className="material-symbols-outlined">{icon}</span>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-on-surface-variant">{label}</p>
                    <p className="text-on-surface font-headline font-bold">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Form ────────────────────────────────── */}
          <div className="lg:col-span-7">
            <div className="contact-form-panel glass-card p-8 md:p-12 rounded-xl
                            border border-outline-variant/15 relative overflow-hidden">
              {/* Corner accent — subtle glow on border only */}
              <div className="absolute -top-px -right-px w-32 h-32 pointer-events-none overflow-hidden"
                   style={{ background: 'radial-gradient(circle at top right, rgba(223,142,255,0.18) 0%, transparent 70%)' }} />

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {[
                    { id: 'name', label: 'Name', type: 'text', ph: 'Enter your full name' },
                    { id: 'email', label: 'Email', type: 'email', ph: 'email@example.com' },
                  ].map(({ id, label, type, ph }) => (
                    <div key={id} className="space-y-2 group">
                      <label className="text-xs font-label uppercase tracking-widest
                                        text-on-surface-variant group-focus-within:text-primary
                                        transition-colors" htmlFor={id}>
                        {label}
                      </label>
                      <input
                        id={id} type={type} required placeholder={ph}
                        value={form[id]}
                        onChange={e => setForm(f => ({ ...f, [id]: e.target.value }))}
                        onFocus={handleFocus} onBlur={handleBlur}
                        className={`${inputClass} border-outline-variant/30`}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-2 group">
                  <label className="text-xs font-label uppercase tracking-widest
                                    text-on-surface-variant group-focus-within:text-primary
                                    transition-colors" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message" rows={4} required placeholder="How can I help you today?"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    onFocus={handleFocus} onBlur={handleBlur}
                    className={`${inputClass} border-outline-variant/30 resize-none`}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={sending || sent}
                    className="btn-primary w-full md:w-auto px-12 py-5 text-lg
                               flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {sent ? (
                      <>
                        <span className="material-symbols-outlined">check_circle</span>
                        Message Sent!
                      </>
                    ) : sending ? (
                      <>
                        <span className="w-5 h-5 border-2 border-on-primary/30
                                         border-t-on-primary rounded-full animate-spin inline-block" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                          arrow_forward
                        </span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Decorative map */}
        {/* <div className="deco-map mt-8 rounded-xl overflow-hidden h-48 relative
                            grayscale opacity-40 hover:grayscale-0 hover:opacity-80
                            transition-all duration-700">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcKCDkrcXspyBtTnvlykbBd6Oj9HgbXLwOF3JWomRt_0FgGRUprJOYa9Lalxtrf1goS1qxiHqyLYCQF8Vpc8LLJz9ds83j0ZPYeaN787uWyrPPk1giWhb58gAODkRMJvU_Euzsq5_ByFkKHLua9oyxby0WlOSDCYIx115egVSCsAlaD2xfgxPOvvTQ26dKfq6Jcjcxorgj4NqxTQdBT7jR7QKxhRK06eax0N_RVKaENj9vMa3ttDmDEcxIxFAwwJW3pGCMA-hxANc"
                alt="Location map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div> */}
      </div>
    </main>
  )
}
