import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Painel from './pages/Painel'
import Registro from './pages/Registro'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/painel' element={<Painel/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
