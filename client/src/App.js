// ** React
import { Routes, Route } from 'react-router-dom'

// ** Theme & layout
import ThemeContextProvider from './context/themeContext'

// ** Views
import About from './views/About'
import Home from './views/Home'
import NotFound from './views/NotFound'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
