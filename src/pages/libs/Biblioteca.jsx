import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Biblioteca() {
    return (
        <>
            <h1>eBooks: </h1>
            <ul>
                <li>
                    <Link to={'/libs/EeBooks_Principales'}>
                        <h3>eBooks Principales</h3>
                    </Link>
                </li>
                <li>
                    <Link to={'/libs/EeBooks_Extras'}>
                        <h3>eBooks Extras</h3>
                    </Link>
                </li>
            </ul>
            <h2>Guias de Estudio</h2>
            <ul>
                <li>
                    <Link to={'/libs/GuideStudy_eFRT'}>
                        <h3>Guia de estudios</h3>
                    </Link>
                </li>
            </ul>
        </>
    )
}

function EeBooks_Principales() {
    //Más importantes para la carrera
    //ejemplo: Cuidados principales, transistores, codigo de colores, etc.

    return (
        <>
            <h1>eBooks Externos</h1>
        </>
    )
}
function EeBooks_Extras() {
    //Ejemplo, guías de utilización de herramientas, uso correcto de epp

    return (
        <>
            <h1>eBooks Externos</h1>
        </>
    )
}
function GuideStudy_eFRT() {

    return (
        <>
            <h1>Guías de Estudios eFRT</h1>
        </>
    )
}

export {
    EeBooks_Principales, EeBooks_Extras, GuideStudy_eFRT, Biblioteca
}