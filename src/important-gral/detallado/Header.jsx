import React from 'react'
import {BiMenu} from 'react-icons/bi';
import {icons} from '../../controlsimg';

import style from '../../css/Cabecera.module.css';
import style_Aside from '../../css/Aside.module.css';

function Lref(ref = '') {
    if (window.location.pathname !== '/' + ref) {
        window.location.pathname = '/' + ref;
    }
}

export default () => {
    const changeAside = () => {
        const xAside = document.getElementById(style_Aside.Alternativo);
        const xAccess = document.getElementById(style_Aside.Accesibility);
        const xFilter = document.getElementById(style.filter);
        const xUserMenu = document.getElementById(style.login);

        xAside.getAttribute('fc') === 'true' ?
        xAside.setAttribute('fc', false) : xAside.setAttribute('fc', true);
        
        xAccess.getAttribute('vs') === 'true' ?
        xAccess.setAttribute('vs', false) : xAccess.setAttribute('vs', true);
        
        xFilter.getAttribute('vs') === 'true' ?
        xFilter.setAttribute('vs', false) : xFilter.setAttribute('vs', true);
        
        xUserMenu.getAttribute('fc') === 'true' ?
        xUserMenu.setAttribute('fc', false) : xUserMenu.setAttribute('fc', true);
    }

    return (
        <>
            <header>
                <button onClick={() => changeAside()}>
                    <BiMenu/>
                </button>
                <nav className={`${style.principal}`}>
                    <button className={style.logo}>
                        <img src={icons.ilcomplete} alt='IconoUTN'/>
                    </button>
                    <a href='./login' id={style.login} fc='false'>
                        Login
                    </a>
                </nav>

                <nav className={style.links}>
                    <ul>
                        <li className='Inicio1'>
                            <button onClick={() => Lref('inicio')}>Inicio</button>
                        </li>
                        <li className='Directivos1'>
                            <button onClick={() => Lref('directivos')}>Directivos</button>
                        </li>
                        <li className='Here1'>
                            <button><a href='#Here'>Visítanos</a></button>
                        </li>
                        <li className='Contacto1'>
                            <button onClick={() => Lref('Contacto')}>Contacto</button></li>
                    </ul>
                </nav>
            </header>

            <button id={style.filter} vs='false' onClick={() => changeAside()} />
        </>
    )
}