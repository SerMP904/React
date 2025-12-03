import React from 'react'

const ReviewLibroComponent = (props) => {
    const {infoReview} = props
    return (
        <div>
        <h2>Reseñas</h2>
        <div>
          {infoReview.map((resena, idx) => {
            return (
              <div key={idx}>
                <h4>Nombre: {resena.name}</h4>
                <p>Fecha: {resena.created_at}</p>
                <p>Reseña: {resena.review}</p>
                <hr />
              </div>
            );
          })}
        </div>
        </div>
  )
}

export default ReviewLibroComponent