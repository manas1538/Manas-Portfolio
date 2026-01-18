import React from 'react'
import CurvedLoop from '@/components/curvedLoop/CurvedLoop.jsx'
import Header from './components/Header/Header'
import Home from './components/Home/Home.jsx'
import Projects from './components/Projects/Projects.jsx'
import About from './components/About/ABout.jsx'
const App = () => {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <Projects></Projects>
      <About></About>
    </>
  )
}

export default App