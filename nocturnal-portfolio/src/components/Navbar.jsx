import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const links = [
  { label: 'Home',       to: '/'           },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects',   to: '/projects'   },
  { label: 'Contact',    to: '/contact'    },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = scrolled
    ? 'shadow-[0_4px_60px_rgba(223,142,255,0.14)]'
    : 'shadow-[0_0_40px_rgba(223,142,255,0.07)]'

  return (
    <nav className={`fixed top-0 w-full z-50 nav-glass transition-shadow duration-500 ${navClass}`}>
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">

        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-black text-primary tracking-tighter font-headline select-none"
        >
          GuideMiee
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-headline font-bold tracking-tight transition-colors duration-300 ${
                  isActive
                    ? 'nav-link-active'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Hire Me */}
        <button
          onClick={() => navigate('/contact')}
          className="hidden md:block btn-primary px-7 py-2.5 text-sm"
        >
          Hire Me
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(v => !v)}
        >
          <span className="material-symbols-outlined text-3xl">
            {mobileOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          mobileOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `py-3 font-headline font-bold tracking-tight border-b border-outline-variant/20 ${
                  isActive ? 'text-primary' : 'text-on-surface-variant'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            onClick={() => { setMobileOpen(false); navigate('/contact') }}
            className="btn-primary mt-4 px-7 py-3 text-sm w-full"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  )
}
