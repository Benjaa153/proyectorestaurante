import React from 'react'
import '../Styles/barra.css'

const BarraDeNavegacion = (props) => {
  return (
    <nav className="navbar navbar-expand-custom navbar-mainbg">
        <a className="navbar-brand navbar-logo" href="#">{props.goat.name}</a>
        <button className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <div className="hori-selector"><div className="left"></div><div className="right"></div></div>
                <li className="nav-item">
                    <a className="nav-link" ><i className="fas fa-tachometer-alt"></i>Nosotros</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" ><i className="far fa-address-book"></i>Mas Informacion</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><i className="far fa-clone"></i>Redes Sociales</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><i className="far fa-calendar-alt"></i>Calendario</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><i className="far fa-chart-bar"></i>Charts</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" ><i className="far fa-copy"></i>Documentos</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default BarraDeNavegacion