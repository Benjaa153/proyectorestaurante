import React from 'react'
import '../Styles/header.css'
import BarraDeNavegacion from './BarraDeNavegacion'

const goat = {

    name: 'Michael Jordan',

    team: 'Chicago Bulls',

    number: 23,

}
const Header = () => {


    return (
        <>
            <BarraDeNavegacion goat={goat}></BarraDeNavegacion>
            <h1 className="titulo">PAGINA OFICIAL</h1>
        </>
    )
}

export default Header