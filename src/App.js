import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Logo/>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
