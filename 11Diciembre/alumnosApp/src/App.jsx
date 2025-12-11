
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import CrearStudentPage from './pages/CrearStudentPage'
import DetailsStudentPage from './pages/DetailsStudentPage'


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/create" element={<CrearStudentPage/>}/>
          <Route path="/details/:idAlumno" element={<DetailsStudentPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
