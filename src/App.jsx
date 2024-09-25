import './App.scss'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <>
    
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/video/:idFromParams' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
