import React from "react";
import InfoLibroComponent from "../components/InfoLibroComponent";
import BuySiteComponent from "../components/BuySiteComponent";
import ReviewLibroComponent from "../components/ReviewLibroComponent";

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
