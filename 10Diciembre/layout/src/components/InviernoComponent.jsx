import React from 'react'

const InviernoComponent = (props) => {
    const {changeToVerano} = props
  return (
    <div>
        <h1>Estamos en invierno</h1>
    <button onClick={() => changeToVerano()}></button>
    </div>
  )
}

export default InviernoComponent