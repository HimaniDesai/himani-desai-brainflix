import './App.scss'
import Header from './components/Header/Header.jsx'
import Home from './pages/Home/Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Upload from './pages/Upload/Upload.jsx'
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/videos/:idFromParams' element={<Home />}></Route>
        <Route path='/upload' element={<Upload/>}></Route>
        <Route path='*' element={<PageNotFound/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
