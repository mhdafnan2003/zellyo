import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import './index.css'
import Navbar from './components/Landing Page/Navbar'
import Hero from './components/Landing Page/Hero'
import ScrollingBanner from './components/Landing Page/ScrollingBanner'
import About from './components/Landing Page/About'
import HowItWorks from './components/Landing Page/HowItWorks'
import MainFeatures from './components/Landing Page/MainFeatures'
import ThemeSection from './components/Landing Page/theme'
import Pricing from './components/Landing Page/Pricing'
import FAQ from './components/Landing Page/FAQ'
import Footer from './components/Landing Page/Footer'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)

  return (
    <div className="app">
      <AnimatePresence>
        {showLogin && (
          <Login
            onClose={() => setShowLogin(false)}
            onSignupClick={() => {
              setShowLogin(false);
              setShowSignup(true);
            }}
          />
        )}
        {showSignup && (
          <Signup
            onClose={() => setShowSignup(false)}
            onLoginClick={() => {
              setShowSignup(false);
              setShowLogin(true);
            }}
          />
        )}
      </AnimatePresence>

      <Navbar
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
      />
      <main>
        <Hero onSignupClick={() => setShowSignup(true)} />
        <ScrollingBanner />
        <About />

        <MainFeatures />
        <HowItWorks />
        <ThemeSection />
        {/* Further sections will be added here */}
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default App
