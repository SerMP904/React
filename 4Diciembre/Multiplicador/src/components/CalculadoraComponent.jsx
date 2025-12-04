import React from 'react'
import { useState } from 'react'

const CalculadoraComponent = () => {
  
    const [multiplicador, setMultiplicador] = useState(0)
    const [infoMensaje, setinfoMensaje] = useState("")
    const multiplicar = (valorParaMultiplicar) => {
        if (valorParaMultiplicar === 5) {setinfoMensaje("Se ha multiplicado por 5. Resultado = ")} else {setinfoMensaje("")}
        if(multiplicador !== 0) {
            setMultiplicador(multiplicador*valorParaMultiplicar)
            }
        else {
            setMultiplicador(1)
        }

        

    }

    return (
        <>
    <div>
        <h2>Multiplicador</h2>
        <div>
            <button onClick={() => multiplicar(2)}>
                x2
            </button>
            <button onClick={() => multiplicar(3)}>
                x3
            </button>
            <button onClick={() => multiplicar(5)}>
                x5
            </button>
            <button onClick={() => multiplicar(0)}>
                Reset
             </button>
             <span>Resultado: {infoMensaje}{multiplicador}</span>
             <span></span>
        </div>
    </div>
    </>
  )
}

export default CalculadoraComponent