// ** React
import { Routes, Route } from 'react-router-dom'

// ** Theme & layout
import ThemeContextProvider from './context/themeContext'

// ** Views
import About from './views/About'
import Home from './views/Home'
import NotFound from './views/NotFound'
import CardDetails from './views/CardDetails'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Routes>
            <Route path="/"element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/set-details/:id" element={<CardDetails/>}/>
        </Routes>
      </ThemeContextProvider>
    </div>
  )
}

export default App
