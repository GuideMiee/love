import { useEffect, useRef } from 'react'

const COLORS = [
  'rgba(223,142,255,',
  'rgba(172,137,255,',
  'rgba(187,0,252,',
]

export default function ParticleCanvas({ count = 120, className = '' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = 0, H = 0, raf

    const resize = () => {
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor() { this.reset() }
      reset() {
        this.x     = Math.random() * W
        this.y     = Math.random() * H
        this.r     = Math.random() * 1.5 + 0.3
        this.alpha = Math.random() * 0.5 + 0.1
        this.vx    = (Math.random() - 0.5) * 0.28
        this.vy    = (Math.random() - 0.5) * 0.28
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      }
      update() {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset()
      }
      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2)
        ctx.fillStyle = this.color + this.alpha + ')'
        ctx.fill()
      }
    }

    const particles = Array.from({ length: count }, () => new Particle())

    const frame = () => {
      ctx.clearRect(0, 0, W, H)
      particles.forEach(p => { p.update(); p.draw() })

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x
          const dy   = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(223,142,255,${0.04 * (1 - dist / 90)})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  )
}
