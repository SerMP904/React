import React from 'react'

const BuySiteComponent = (props) => {
    const {infoTienda} = props
    return (
        <div>
        <h2>Lugares de ventas</h2>
        <div>
          {infoTienda.map((tienda, idx) => {
            return (
              <div key={idx}>
                <p>Lugar: <b>{tienda.name}</b>, Dirección: {tienda.address}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default BuySiteComponent