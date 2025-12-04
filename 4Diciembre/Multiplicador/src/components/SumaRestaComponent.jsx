import React from "react";
import { useState } from "react";

const SumaRestaComponent = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [mode, setMode] = useState(0);
  console.log(mode)
  const modeDisplay = mode % 2 === 0 ? "Sumar" : "Restar";
  const resultado = modeDisplay === "Sumar" ? num1 + num2 : num1 - num2;

  return (
    <>
      <div>
        <h2>SumaResta</h2>
        <div>
          <input
            type="number"
            placeholder="Primer Numero"
            onChange={(e) => setNum1(Number(e.target.value))}
          >
          </input>
          <input
            type="number"
            placeholder="Segundo Numero"
            onChange={(e) => setNum2(Number(e.target.value))}
          >
          </input>
          <button onClick={() => setMode(mode+1)}>Cambiar modo: {modeDisplay}</button>
          <span>Resultado: {resultado}</span>
        </div>
      </div>
    </>
  );
  }
export default SumaRestaComponent;
