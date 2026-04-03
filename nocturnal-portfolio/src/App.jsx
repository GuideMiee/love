import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar         from './components/Navbar'
import Footer         from './components/Footer'
import Cursor         from './components/Cursor'
import PageTransition from './components/PageTransition'
import Home           from './pages/Home'
import Projects       from './pages/Projects'
import Experience     from './pages/Experience'
import Contact        from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <>
      <Cursor />
      <PageTransition />
      <Navbar />

      <main>
        <Routes location={location} key={location.pathname}>
          <Route path="/"           element={<Home />}       />
          <Route path="/projects"   element={<Projects />}   />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact"    element={<Contact />}    />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
