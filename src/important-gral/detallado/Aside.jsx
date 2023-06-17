import React from 'react'
import {BiUniversalAccess} from 'react-icons/bi';
import {FaUniversalAccess} from 'react-icons/fa';
import FormularioAccesibilidad from './AccessForm.jsx';

import style from '../../css/Aside.module.css';

function Lref(ref = '') {
    if (window.location.pathname !== '/' + ref) {
        window.location.pathname = '/' + ref;
    }
}

export default () => {
    const ChangeMenuAccess = () => {        
        const iNsolid = document.getElementById(`${style.nosolid}`);
        const isolid = document.getElementById(`${style.solid}`);
        const fset = document.querySelector(`.${style.fset}`);
        
        isolid.getAttribute('fc') == 'true' ? 
        isolid.setAttribute('fc', 'false') : isolid.setAttribute('fc', true);

        iNsolid.getAttribute('fc') == 'true' ? 
        iNsolid.setAttribute('fc', 'false') : iNsolid.setAttribute('fc', true);
    
        fset.getAttribute('fc') == 'true' ?
        fset.setAttribute('fc', false) : fset.setAttribute('fc', true);
    }

    return (
        <>
            <aside id={style.Alternativo} fc='false'>
                <nav>
                    <ul>
                        <li>
                            <button onClick={() => Lref('inicio')}>Inicio</button>
                        </li>
                        <li>
                            <button onClick={() => Lref('menu')}>Menu</button>
                        </li>
                        <li>
                            <button onClick={() => Lref('Contacto')}>Contacto</button></li>

                        <li>
                            <button onClick={() => Lref('media/Biblioteca')}> MultyMedia</button>
                        </li>
                        <li>
                            <button onClick={() => Lref('Contacto/reportes')}> Reporte de fallos</button>
                        </li>
                    </ul>
                </nav>
            </aside>

            <aside id={style.Accesibility} vs={'false'}>
                <BiUniversalAccess fc={'true'} id={style.nosolid} />
                <FaUniversalAccess fc={'false'} id={style.solid} />
                <button id={style.iconAccess} onClick={() => ChangeMenuAccess()} />
                <fieldset className={style.fset} fc={'false'} >
                    <legend>ACCESIBILIDAD</legend>
                    <FormularioAccesibilidad />
                </fieldset>
            </aside>
        </>
    )
}