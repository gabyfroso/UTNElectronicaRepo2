import React from 'react';
import {icons, page1} from '../controlsimg';

function Lref (ref=''){
    if(window.location.pathname !== '/' + ref){
        window.location.pathname= '/'+ref;
    }
}

export default () => {

    return (
        <>
            <div className='fximg l1'>
                <img src={icons.ilutn} className='title' />
            </div>

            <section id='Reservatorio' className='mainctr'>
                <h1>Reservatorio Digital eFRT</h1>
                <h3>Departamento Ingeniería Electrónica</h3>
                <nav>
                    <ul className='cards'>
                        <li>
                            <button onClick={() => Lref('/media/Biblioteca')}>
                                <img src={page1.i1} alt='Biblioteca de Consultas' />
                                <h1>Biblioteca de consultas</h1>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => Lref('/media/')}>
                                <img src={page1.i2}  alt='E-books Dpto. Electrónica FRT' />
                                <h1>E-books Dpto. Electrónica FRT</h1>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => Lref('/Academico/JornadasAcadem/')}>
                                <img src={page1.i3}  alt='Jornadas Académicas y Científicas
                                Dpto. Electrónica - FRT' />
                                <h1>Jornadas Académicas y Científicas
                                    Dpto. Electrónica - FRT</h1>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={page1.i4}  alt='Publicaciones Académicas y Científicas
                                Dpto. Electrónica - FRT' />
                                <h1>Publicaciones Académicas y Científicas
                                    Dpto. Electrónica - FRT</h1>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={page1.i5}  alt='Posgrados
                                Dpto. Electrónica - FRT' />
                                <h1>Posgrados
                                    Dpto. Electrónica - FRT</h1>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={page1.i6}  alt='Proyectos de Investigación y Desarrollo PID
                                Dpto. Electrónica - FRT' />
                                <h1>
                                    Proyectos de Investigación y Desarrollo PID
                                    Dpto. Electrónica - FRT</h1>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={page1.i7}  alt='Práctica Profesional Supervisada PPS
                                Dpto. Electrónica - FRT' />
                                <h1>Práctica Profesional Supervisada PPS
                                    Dpto. Electrónica - FRT</h1>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={icons.ilutn}  alt='Proyectos de Fin de Carrera
                                Dpto. Electrónica - FRT' />
                                <h1>Proyectos de Fin de Carrera
                                    Dpto. Electrónica - FRT</h1>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={page1.i9}  alt='Convenios y Transferencias al Medio
                                Dpto. Electrónica - FRT' />
                                <h1>Convenios y Transferencias al Medio
                                    Dpto. Electrónica - FRT</h1>
                            </button>
                        </li>
                        <li>
                            <button>
                                <img src={page1.i10}  alt='Guías de Estudios
                                Dpto. Electrónica - FRT' />
                                <h1>Guías de Estudios
                                    Dpto. Electrónica - FRT</h1>
                            </button>
                        </li>
                    </ul>
                </nav>
            </section>
            <section>
                <ul className='album--h'>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </section>
            <section className='c'>
                <h1>Enlaces a bibliotecas externas</h1>
                <ul className='Scard'>
                    <li className='i'>
                        <img src={page1.i1}  alt='Dpto Ingeniería Electrónica, supercard' />
                        <div>
                            <h1>
                                DEPARTAMENTO DE INGENIERÍA ELECTRÓNICA FRT - UTN
                            </h1>
                            <h3>
                                Visítanos
                            </h3>
                            <h2>
                                RIVADAVIA 1050 - PISO 1
                            </h2>
                            <h2>
                                SAN MIGUEL DE TUCUMÁN,

                                TUCUMÁN
                            </h2>
                        </div>
                    </li>
                </ul>
            </section>
            <section className='c'>
                <h1>
                    Contáctanos
                </h1>
                <h4>
                    <a href='mailto:dptoelectronica.frt@gmail.com?Subject=Page:%20Depto%20Electronica'>
                        dptoelectronica.frt@gmail.com
                    </a>
                </h4>
                <form className='classic--1'>
                <ul>
                    <li>
                        <span>Nombre *</span>
                        <input/>
                    </li>
                    <li>
                        <span>Email *</span>
                        <input type='email' />
                    </li>
                    <li>
                        <span>Asunto</span>
                        <input/>
                    </li>
                    <li>
                        <span>Mensaje *</span>
                        <input type='text'/>
                    </li>
                </ul>
                </form>
            </section>
        </>
    )
}