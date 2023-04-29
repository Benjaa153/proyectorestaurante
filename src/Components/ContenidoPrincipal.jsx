import React from 'react'
import ImgLogo from '../Img/logo512.png'
import '../Styles/contenidoPrincipal.css'
const ContenidoPrincipal = () => {
  return (
    <div className="ContenidoPrincipal">

      <h1 className="tituloSecundario">
        Contenido Principal
      </h1>
      <div>
        <img className='imgLogo-verde' src={ImgLogo}></img>
        <h1>Imagen logo en color verde</h1>
      </div>

      <div>
        <img className='imgLogo-amarillo' src={ImgLogo}></img>
        <h1>Imagen logo en color amarillo</h1>
      </div>

      <img className='imgLogo-naranja' src={ImgLogo}></img>
      <img className='imgLogo-aqua' src={ImgLogo}></img>

    </div>
  )
}

export default ContenidoPrincipal