import React from 'react'
import Img512 from '../Img/logo512.png'
import '../Styles/header.css'
const Header = () => {
    return (
        <>
            <div>Header</div>

            <img
                src={Img512}
                className='img512-rojo'
            >
            </img>

            <img
                src={Img512}
                className='img512-negro'
            ></img>
            <img
                src={Img512}
                className='img512-verde'
            ></img>

            <img
                src={Img512}
                className='img512-azul'
            ></img>
        </>
    )
}

export default Header