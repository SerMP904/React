import React from "react";
import ReviewLibroComponent from "../components/ReviewLibroComponent";
import BuySiteComponent from "../components/BuySiteComponent";
import InfoLibroComponent from "../components/InfoLibroComponent";
import libro from "../data/infoFromApi"
import RecomendacionLibroComponent from "../components/RecomendacionLibroComponent";

const infoLibroPage = () => {
  return (
    <>
      <div>
        <h1>Información del Libro</h1>
      </div>
      <hr />
      <InfoLibroComponent ejemplo1 = {"Paso un parametro"} infoLibro = {libro.info} />
      <hr />
      <BuySiteComponent infoTienda = {libro.tiendas}/>
      <ReviewLibroComponent infoReview = {libro.reviews}/>
      <RecomendacionLibroComponent infoRecomendacion = {libro.recomendaciones}/>
    </>
  );
};

export default infoLibroPage;