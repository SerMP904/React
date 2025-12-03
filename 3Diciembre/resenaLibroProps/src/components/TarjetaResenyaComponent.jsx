import React from 'react'

const TarjetaResenyaComponent = (props) => {
  const {resenya, index} = props
    return (
    <div key={index}>
        <h2>Reseña #{index+1} - {resenya.name}</h2>
        <p>{resenya.review}</p>
    </div>
  )
}

export default TarjetaResenyaComponent