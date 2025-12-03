import React from 'react'

const InfoLibroComponent = (props) => {
  const {ejemplo1, infoLibro} = props;
  console.log(ejemplo1)
  console.log(infoLibro)
  return (
    <div>
        <h2>Informacion del Libro</h2>
        <div>
          <p>Título: {infoLibro.title}</p>
          <p>ISBN: {infoLibro.ISBN}</p>
          <p>Autor: {infoLibro.author}</p>
          <p>Sinopsis: {infoLibro.description}</p>
        </div>
    </div>
  )
}

export default InfoLibroComponent