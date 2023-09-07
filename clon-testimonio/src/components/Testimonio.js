import React from 'react';
import '../css/Testimonio.css'

function Testimonio(props) {
    return (

        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio'
                src={require(`../img/${props.imagen}.png`)}
                alt='Foto 1' />

            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'><strong>{props.nombre}</strong></p>
                <p className='cargo-testimonio'><strong>{props.cargo}</strong></p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>

        </div>
    );
}

export default Testimonio;