# NOCTURNAL LUMINARY — Portfolio

> React 18 · Vite 5 · Tailwind CSS 3 · GSAP 3 · React Router 6

---

## 📁 โครงสร้างโปรเจค

```
nocturnal-portfolio/
├── index.html                  ← HTML entry point
├── package.json
├── vite.config.js              ← Vite + React plugin
├── tailwind.config.js          ← Design system tokens
├── postcss.config.js
└── src/
    ├── main.jsx                ← React entry (BrowserRouter + GSAP register)
    ├── App.jsx                 ← Routes + Layout
    ├── index.css               ← Tailwind + Global styles + Custom cursor
    ├── components/
    │   ├── Navbar.jsx          ← Fixed nav, mobile menu, active links
    │   ├── Footer.jsx          ← Footer with social links
    │   ├── Cursor.jsx          ← Custom neon cursor (dot + ring)
    │   ├── PageTransition.jsx  ← GSAP fade overlay on route change
    │   └── ParticleCanvas.jsx  ← Canvas particle background
    └── pages/
        ├── Home.jsx            ← Hero · Bento cards · Projects preview · CTA
        ├── Projects.jsx        ← Portfolio grid + Filter system
        ├── Experience.jsx      ← Timeline + Skill bars + Tech badges
        └── Contact.jsx         ← Contact form + Animated orbs
```

---

## ⚡ คำสั่งติดตั้งและรัน

```bash
# 1. ติดตั้ง dependencies
npm install

# 2. รัน dev server (localhost:3000)
npm run dev

# 3. Build สำหรับ production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📦 Libraries ที่ใช้

| Package              | Version   | Purpose                              |
|----------------------|-----------|--------------------------------------|
| `react`              | ^18.3.1   | UI framework                         |
| `react-dom`          | ^18.3.1   | DOM rendering                        |
| `react-router-dom`   | ^6.24.0   | Client-side routing                  |
| `gsap`               | ^3.12.5   | Animations (timeline, scroll, etc.)  |
| `@gsap/react`        | ^2.1.1    | `useGSAP` hook for React             |
| `vite`               | ^5.3.1    | Build tool + Dev server              |
| `@vitejs/plugin-react`| ^4.3.1   | React JSX + Fast Refresh             |
| `tailwindcss`        | ^3.4.4    | Utility-first CSS                    |
| `postcss`            | ^8.4.38   | CSS processing                       |
| `autoprefixer`       | ^10.4.19  | Vendor prefixes                      |

### CDN (in index.html)
- **Google Fonts** — Manrope (headline) + Inter (body)
- **Material Symbols Outlined** — icon font

---

## 🎨 Animation Inventory

| หน้า          | Animation                                       |
|---------------|-------------------------------------------------|
| **Home**      | Hero text reveal (3D rotate), particle canvas, bento scroll reveal, stats counter, magnetic button |
| **Projects**  | Header word stagger, filter fade/scale, card scroll reveal, hover glow |
| **Experience**| Timeline slide-from-left, skill bar width animate, badge pop-in, floating image |
| **Contact**   | Floating ambient orbs, editorial title stagger, form panel slide-right, input glow on focus, send button states |
| **Global**    | Custom neon cursor (dot + ring), page transition fade, scroll-based nav shadow |

---

## 🖌️ Design System

Follows **"The Nocturnal Luminary"** design spec:
- **Primary color**: `#df8eff` (neon purple)
- **Background**: `#0e0e0e` (deep black)
- **Typography**: Manrope (display) + Inter (body)
- **Glass morphism**: `backdrop-filter: blur(20px)` + low-opacity backgrounds
- **No-line rule**: separation via tonal shifts + negative space
- **Transitions**: minimum 300ms `cubic-bezier(0.4, 0, 0.2, 1)`
