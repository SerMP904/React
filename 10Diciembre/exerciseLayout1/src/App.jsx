import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route path="/" element={<MainLayout/>}/>
          <Route path="/contact" element={<HomePage/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
