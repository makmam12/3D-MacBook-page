import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <NavBar/>
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App