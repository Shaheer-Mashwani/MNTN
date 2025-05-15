import { useState } from 'react'
import Navbar from './Compnents/Navbar'
import HeroSection from './Compnents/HeroSection'
import LevelOne from './Compnents/LevelOne'
import Leveltwo from './Compnents/Leveltwo'
import LevelThree from './Compnents/LevelThree'
import Footer from './Compnents/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-yellow-900 text-white'>
      <div className="relative min-h-screen bg-[url('/background.jpg')] bg-cover bg-center">
  {/* Blue gradient overlay at the bottom */}
  <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        <Navbar />
        <HeroSection />
        </div>
      
      <LevelOne />
      <Leveltwo />
      <LevelThree />
      <Footer />
      </div>
    </>
  )
}

export default App
