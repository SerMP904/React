import React from 'react'
import TarjetaResenyaComponent from "./TarjetaResenyaComponent"

const ReviewLibroComponent = (props) => {
    const {infoReview, numeroResenyas, tituloSeccion} = props

    console.log(infoReview)
    return (
        <div>
        <h2>{tituloSeccion}</h2>
        <div>
          
          {infoReview.map((resenya, idx) =>(
            <TarjetaResenyaComponent resenya={resenya} index={idx}/>
          ) )}
          <div>
          <h4>Número reseñas</h4>
          <p>Total de reseñas: {numeroResenyas}</p>
          </div>
        </div>
        </div>
  )
}

export default ReviewLibroComponent