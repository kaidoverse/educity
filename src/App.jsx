import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div className="container">
        <Title />
        <Programs />
      </div>
    </div>
  )
}

export default App