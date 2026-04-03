import { useEffect, useRef } from 'react'
import { useLocation }       from 'react-router-dom'
import gsap                  from 'gsap'

export default function PageTransition() {
  const overlayRef = useRef(null)
  const location   = useLocation()

  useEffect(() => {
    const el = overlayRef.current
    if (!el) return

    // Fade out on mount (page entered)
    gsap.fromTo(el,
      { opacity: 1, pointerEvents: 'all' },
      { opacity: 0, pointerEvents: 'none', duration: 0.55, ease: 'power2.out' }
    )
  }, [location.pathname])

  return (
    <div
      ref={overlayRef}
      style={{ position: 'fixed', inset: 0, background: '#000',
               zIndex: 9990, pointerEvents: 'none', opacity: 1 }}
    />
  )
}
