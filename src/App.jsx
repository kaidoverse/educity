import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='what we offer' />
        <Programs />
        <About />
      </div>
    </div>
  )
}

export default App