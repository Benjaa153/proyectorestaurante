import React from 'react'

const Saludar = (props) => {
    return (
        <div>
            <h1 className="datos">

                {`  ${props.datosAlumno.msjpara}
                    ${props.datosAlumno.nombre}
                    ${props.datosAlumno.apellido}
                `}

            </h1>
            <h2>

                {`  
                    EDAD ${props.datosAlumno.edad}
                    Confirmado  ${props.datosAlumno.confirmado}
                `}

            </h2>

            <img
                src={props.datosAlumno.img}
            >

            </img>




        </div>
    )
}

export default Saludar