import React from 'react'
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'

const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <div className="container">
        <Title subTitle='Our Program' title='what we offer' />
        <Programs />
        <About />
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subTitle='TESTIMONIALS' title='What Student Says' />

      </div>
    </div>
  )
}

export default App