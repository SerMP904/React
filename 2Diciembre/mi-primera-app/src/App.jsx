import './App.css'
import FraseCelebreComponent from './components/FraseCelebreComponent'
import HolaMundoComponent from './components/holaMundoComponent'
import PresentacionComponent from './components/PresentacionComponent'

function App() {
  const titulo = "El Arte de la Guerra"
  const subtitulo ="Sun Tzu"
  return (
    <div>
    <p>{titulo}</p>
    <hr />
    <p>{subtitulo}</p>
    <hr />
    <HolaMundoComponent />
    <PresentacionComponent />
    <HolaMundoComponent />
    <hr />
    <FraseCelebreComponent />
    </div>
    
  )
}

export default App
