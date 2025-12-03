import React from "react";
import ReviewLibroComponent from "../components/ReviewLibroComponent";
import BuySiteComponent from "../components/BuySiteComponent";
import InfoLibroComponent from "../components/InfoLibroComponent";



const infoLibroPage = () => {
  return (
    <>
      <div>
        <h1>Información del Libro</h1>
      </div>
      <hr />
      <InfoLibroComponent/>
      <hr />
      <BuySiteComponent/>
      <ReviewLibroComponent/>
    </>
  );
};

export default infoLibroPage;