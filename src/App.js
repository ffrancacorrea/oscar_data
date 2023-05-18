import './App.css'
import { ThemeProvider } from '@emotion/react'

import theme from './theme/theme'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}

export default App
