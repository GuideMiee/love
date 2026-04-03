/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:                   '#df8eff',
        'primary-dim':             '#bb00fc',
        'primary-container':       '#d878ff',
        'on-primary':              '#4f006d',
        'on-primary-container':    '#3d0055',
        secondary:                 '#d5a9fe',
        tertiary:                  '#ac89ff',
        'tertiary-dim':            '#874cff',
        'tertiary-container':      '#7000ff',
        surface:                   '#0e0e0e',
        'surface-container-low':   '#131313',
        'surface-container':       '#1a1919',
        'surface-container-high':  '#201f1f',
        'surface-container-highest':'#262626',
        'surface-container-lowest':'#000000',
        'on-surface':              '#ffffff',
        'on-surface-variant':      '#adaaaa',
        background:                '#0e0e0e',
        'on-background':           '#ffffff',
        outline:                   '#777575',
        'outline-variant':         '#494847',
        error:                     '#ff6e84',
        'on-error':                '#490013',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body:     ['Inter', 'sans-serif'],
        label:    ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg:      '2rem',
        xl:      '3rem',
        full:    '9999px',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-14px)' },
        },
        'pulse-glow': {
          '0%,100%': { boxShadow: '0 0 10px rgba(223,142,255,.3)' },
          '50%':     { boxShadow: '0 0 35px rgba(223,142,255,.8)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        ping2: {
          '75%,100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
      animation: {
        float:       'float 5s ease-in-out infinite',
        'pulse-glow':'pulse-glow 2.5s ease-in-out infinite',
        shimmer:     'shimmer 3.5s linear infinite',
        ping2:       'ping2 1.6s cubic-bezier(0,0,.2,1) infinite',
      },
    },
  },
  plugins: [],
}
