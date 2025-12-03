import React from 'react'

const BuySiteComponent = () => {
    const buy = [
        {
          id: 0,
          name: "Deckow - Runolfsson",
          address: "111 Asa Radial",
        },
        {
          id: 1,
          name: "Bernier - Swift",
          address: "0421 Feeney Station",
        },
      ];
    return (
        <div>
        <h2>Lugares de ventas</h2>
        <div>
          {buy.map((tienda, idx) => {
            return (
              <div key={idx}>
                <h4>Lugar: {tienda.name}</h4>
                <p>Dirección: {tienda.address}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default BuySiteComponent