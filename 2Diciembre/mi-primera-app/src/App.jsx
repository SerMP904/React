import './App.css'
import FraseCelebreComponent from './components/FraseCelebreComponent'
import HolaMundoComponent from './components/holaMundoComponent'

function App() {
  const titulo = "El Arte de la Guerra"
  const subtitulo ="Sun Tzu"
  return (
    <>
    <p>{titulo}</p>
    <hr />
    <p>{subtitulo}</p>
    <hr />
    <HolaMundoComponent />
    <HolaMundoComponent />
    <HolaMundoComponent />
    <hr />
    <FraseCelebreComponent />
    </>
  )
}

export default App
