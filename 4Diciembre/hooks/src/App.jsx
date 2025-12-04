import { useState } from 'react';
import './App.css'

function App() {

  let nombreSinUseState = '';

  const cambioNombre = (newName) => {
    nombreSinUseState = newName;
    console.log("Nombre:", nombreSinUseState)
  }

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
      </div>
    </>
  )
}

export default App
