import React from "react";
import ReviewLibroComponent from "../components/ReviewLibroComponent";
import BuySiteComponent from "../components/BuySiteComponent";
import InfoLibroComponent from "../components/InfoLibroComponent";
import libro from "../data/infoFromApi"
import RecomendacionLibroComponent from "../components/RecomendacionLibroComponent";
import MasInfoLibroComponent from "../components/MasInfoLibroComponent";
import TarjetaResenyaComponent from "../components/TarjetaResenyaComponent";


const infoLibroPage = () => {
  const numeroResenyas = libro.reviews.length
  return (
    <>
      <div>
        <h1>Información del Libro</h1>
      </div>
      <hr />
      <InfoLibroComponent ejemplo1 = {"Paso un parametro"} infoLibro = {libro.info} />
      <h1>Numero reseñas</h1>
      <p>{numeroResenyas}</p>
      <MasInfoLibroComponent/>
      <hr />
      <BuySiteComponent infoTienda = {libro.tiendas}/>
      <ReviewLibroComponent infoReview={libro.reviews} numeroResenyas={numeroResenyas} tituloSeccion={"Opiniones de los lectores"} />
      <RecomendacionLibroComponent infoRecomendacion = {libro.recomendaciones}/>
      
    </>
  );
};

export default infoLibroPage;