import React from 'react'

const RecomendacionLibroComponent = (props) => {
    const {infoRecomendacion} = props
    return (
        <div>
        <h2>Recomendaciones</h2>
        <div>
          {infoRecomendacion.map((reco, idx) => {
            return (
              <div key={idx}>
                <p>Titulo: {reco.title}</p>
                <p>Description: {reco.description}</p>
                <p>Autor: {reco.author}</p>
                <h4>ISBN: {reco.ISBN}</h4>
                <hr />
              </div>
            );
          })}
        </div>
        </div>
  )
}

export default RecomendacionLibroComponent