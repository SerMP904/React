import { useState } from 'react';
import './App.css'

function App() {

  let nombreSinUseState = '';

  const cambioNombre = (newName) => {
    nombreSinUseState = newName;
    console.log("Nombre:", nombreSinUseState)
  }

  const [edad, setEdad] = useState(18)
  const [name, setName] = useState("")

  return (
    <>
      <div>
        <h3>Nombre sin useState: {nombreSinUseState}</h3>
        <div>
          <span>Nombre: </span>
          <input type="text" onChange={(event) => cambioNombre(event.target.value)}/>
        </div>
      </div>
      <div>
        <h3>Nombre con useState: {name}</h3>
        <div>
          <span>Nombre: </span>
          <input type="text" onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
          <h2>Edad actual: {edad} años</h2>
          <button onClick={() => setEdad(21)}>Tener 21 años</button>
          <button onClick={() => setEdad(edad+1)}>Envejecer poco</button>
        </div>
      </div>
    </>
  )
}

export default App
