import { Route, Routes } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Layout from './components/Layout'
import './App.scss'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/portfolio' element={<Portfolio/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
