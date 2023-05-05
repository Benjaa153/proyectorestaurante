import React from "react";
import "../Styles/contenidoPrincipal.css";
import imgLogo512 from "../Img/logos/logo512.png";

const ContenidoPrincipal = () => {
  return (
    <div className="ContenidoPrincipal">
      <img alt="img de referncia Logo 512" className="imgLogo-rojo" src={imgLogo512}></img>

      <img alt="img de referncia Logo 512" className="imgLogo-verde" src={imgLogo512}></img>

      <img alt="img de referncia Logo 512" className="imgLogo-naranja" src={imgLogo512}></img>

      <img alt="img de referncia Logo 512" className="imgLogo-rosa" src={imgLogo512}></img>
    </div>
  );
};

export default ContenidoPrincipal;
