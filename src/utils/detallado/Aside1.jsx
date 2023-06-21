import React from 'react'
import style from '../../css/Aside.module.css';

function Lref(ref = '') {
    if (window.location.pathname !== '/' + ref) {
        window.location.pathname = '/' + ref;
    }
}

function Aside({ vs = false }) {
    const LinksRef = (
        <aside id={style.Alternativo}>
            <nav>
                <ul className={style.linksA}>
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
    )

    return (
        <>
            {
                vs && LinksRef
            }
        </>
    )
}

export default Aside;