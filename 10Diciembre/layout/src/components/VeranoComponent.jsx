import React from 'react'

const VeranoComponent = (props) => {
  const {changeToInvierno} = props
  return (
    <div>
        <h1>Estamos en verano</h1>
    <button onClick={() => changeToInvierno()}></button>
    </div>
  )
}

export default VeranoComponent