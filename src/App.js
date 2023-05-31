import './App.css'
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

import theme from './theme/theme'

import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Header />
        <About />
        <Projects />
        <Footer />
      </Wrapper>
    </ThemeProvider>
  )
}

export default App
