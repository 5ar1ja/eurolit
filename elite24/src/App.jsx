import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Branches from './components/Branches.jsx'
import About from './components/About.jsx'
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Branches />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
