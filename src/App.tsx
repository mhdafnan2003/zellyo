import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollingBanner from './components/ScrollingBanner'
import About from './components/About'
import HowItWorks from './components/HowItWorks'
import MainFeatures from './components/MainFeatures'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <ScrollingBanner />
        <About />
       
        <MainFeatures />
         <HowItWorks />
        {/* Further sections will be added here */}
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

export default App
