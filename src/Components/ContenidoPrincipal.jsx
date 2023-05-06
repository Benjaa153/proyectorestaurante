import React from "react";
import "../Styles/contenidoPrincipal.css";
import imgLogo512 from "../Img/logos/logo512.png";

const ContenidoPrincipal = () => {
  return (
    <div className="ContenidoPrincipal">
      <img alt="img de referncia Logo 512" className="imgLogo-rojo" src={imgLogo512}></img>

<<<<<<< HEAD
      <h1 className="tituloSecundario">
        Contenido Principal
      </h1>
        <img className='imgLogo-verde' src={ImgLogo}></img>

        <img className='imgLogo-amarillo' src={ImgLogo}></img>

      <img className='imgLogo-naranja' src={ImgLogo}></img>


      <img className='imgLogo-aqua' src={ImgLogo}></img>
=======
      <img alt="img de referncia Logo 512" className="imgLogo-verde" src={imgLogo512}></img>

      <img alt="img de referncia Logo 512" className="imgLogo-naranja" src={imgLogo512}></img>
>>>>>>> 62aa53fcaafc4110d48fa9aef0cb4abe32e1f735

      <img alt="img de referncia Logo 512" className="imgLogo-rosa" src={imgLogo512}></img>
    </div>
  );
};

export default ContenidoPrincipal;
