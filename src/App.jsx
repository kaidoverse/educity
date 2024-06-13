import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div className="container">
        <Programs />
      </div>
    </div>
  )
}

export default App