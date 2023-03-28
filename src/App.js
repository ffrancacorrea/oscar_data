import './App.css'
import { ThemeProvider } from '@emotion/react'

import theme from './theme/theme'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
      <Projects />
    </ThemeProvider>
  )
}

export default App
