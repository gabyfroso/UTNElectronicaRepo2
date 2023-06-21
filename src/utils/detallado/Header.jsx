import React from 'react'
import {BiMenu} from 'react-icons/bi';
import {icons} from '../../img/controlsimg.js';

import style from '../../css/Cabecera.module.css';

function Lref(ref = '') {
    if (window.location.pathname !== '/' + ref) {
        window.location.pathname = '/' + ref;
    }
}

function Header ({ChangeAsideFc}) {
    return (
        <>
            <header>
                <button onClick={ChangeAsideFc}>
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
        </>
    )
}

export default Header;