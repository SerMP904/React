import './App.css'

function App() {
  const tituloTienda = "Mi primera librería en React"
  const data = [ {
    id: 1,
    title: "Libro 1",
    description: "Descripcion del libro 1",
    price: 10,
    IVA: 2,
    premium: true,
  },
  {
    id: 2,
    title: "Libro 2",
    description: "Descripcion del libro 2",
    price: 15,
    IVA: 2,
    premium: false,
  },
  {
    id: 3,
    title: "Libro 3",
    description: "Descripcion del libro 3",
    price: 20,
    IVA: 2,
    premium: true,
  }]

  return (
    <>
    <div>
    <h1>{tituloTienda}</h1>
    </div>
    <div>{data.map((libro, index) =>{
      const precioConIva = libro.price+libro.IVA;
      return (
      <div key={index}>
      <p>Title: {libro.title}</p>
      <p>Desc: {libro.description}</p>
      <p>Price: {libro.price}</p>
      <p>Precio con Iva: {precioConIva}</p>
      <hr />
      </div>)
    })}</div>
    <div>
      const dataAPintar = data[1];
      <p></p>
    </div>
    </>
  )
}

export default App
