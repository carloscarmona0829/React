import React from 'react';
import "./Estilos.css"
import "./Estilos.scss"
import moduleStyles from "./Estilos.module.css"

export default function Estilos() {
    let myStyles={
        borderRadius:".5rem", 
        margin:"2rem auto",
        maxWidth:"50%"
    }
    return (
        <section className='estilos'>
            <h2>Estilos CSS en React</h2>
            <h3 className='bg-react'>Estilos en Hoja CSS Externa</h3>
            <h3 className='bg-react' style={{borderRadius:".25rem", margin:"1rem"}}>Estilos en Línea (atributo style)</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en Línea</h3>
            <h3 className='bg-react' style={myStyles}>Agregando Normalize con @import-normalize;</h3>
            <h3 className={moduleStyles.error}>Estilos con Módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con Módulos</h3>
            <h3 className="bg-sass">Estilos con Sass</h3>
        </section>
    );
}