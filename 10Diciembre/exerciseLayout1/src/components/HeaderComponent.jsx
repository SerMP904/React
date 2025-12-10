import React from "react";
import MenuComponent from "./MenuComponent";

const HeaderComponent = () => {
  return (
    <div>
        <h2>Esto está arriba</h2>
        <span>Esto es un header</span>
        <MenuComponent/>
    </div>
  );
};

export default HeaderComponent;
