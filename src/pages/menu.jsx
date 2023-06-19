import React from 'react';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

import OnOffExpansible from './expansibles.js';

export default () => {
    return (
        <>
            <h1>Sección de Menu</h1>

            <div className='expansible tb1' fc='false' id='Media'>
                <button onClick={() => OnOffExpansible('Media')}>
                    <BiChevronRight />
                    <h1>Media</h1>
                </button>


                <ul>
                    <li>
                        <div className='expansible tb2' fc='false' id='BibliotecaUl'>
                            <button onClick={() => OnOffExpansible('BibliotecaUl')}>
                                <BiChevronRight />
                                <h1>Biblioteca</h1>
                            </button>
                            <ul>
                                <li>
                                    <Link to={'/Media/Biblioteca/StudyGuide'}>
                                        <h3>
                                            Guias de estudios
                                        </h3>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/Media/Biblioteca/More'}>
                                        <h3>
                                            Más
                                        </h3>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {
                        /* Proyectos */
                    }

                    <li>
                        <div className='expansible tb2' fc='false' id='Proyectos'>
                            <button onClick={() => OnOffExpansible('Proyectos')}>
                                <BiChevronRight />
                                <h1>Proyectos</h1>
                            </button>
                            <ul>
                                <li>
                                    <Link to={'/Media/Proyectos/IYD'}>
                                        <h3>
                                            Investigación y desarrollo
                                        </h3>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/Media/Proyectos/PPS'}>
                                        <h3>
                                            Práctica Profesional Supervisada
                                        </h3>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/Media/Proyectos/FinDeCarrera'}>
                                        <h3>
                                            Proyectos de Fin de carrera
                                        </h3>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {
                        /* Publicaciones */
                    }

                    <li>
                        <div className='expansible tb2' fc='false' id='Publicaciones'>
                            <button onClick={() => OnOffExpansible('Publicaciones')}>
                                <BiChevronRight />
                                <h1>Publicaciones</h1>
                            </button>
                            <ul>
                                <li>
                                    <Link to={'/Media/Publicaciones/Academicas'}>
                                        <h3>
                                            Academicas
                                        </h3>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/Media/Publicaciones/Cientificas'}>
                                        <h3>
                                            Cientificas
                                        </h3>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'http://www.edutecne.utn.edu.ar/indices/menu_publicaciones_digitales.html'}>
                                        <h3>
                                            UTN
                                        </h3>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    {
                        /**
                         * 
                         */
                    }
                    <li>
                        <div className='expansible tb2' fc='false' id='Foro'>
                            <button onClick={() => OnOffExpansible('Foro')}>
                                <BiChevronRight />
                                <h1>Foro</h1>
                            </button>
                            <ul>
                                <li>
                                    <Link to={'/Media/Foro/Horarios'}>
                                        <h3>
                                            Horarios
                                        </h3>
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/Media/Foro/Convenios'}>
                                        <h3>
                                            Convenios
                                        </h3>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>



            <div className='expansible tb1' fc='false' id='GuideStdUl'>
                <button onClick={() => OnOffExpansible('GuideStdUl')}>
                    <BiChevronRight />
                    <h2>Contacto</h2>
                </button>
                <ul>
                    <li>
                        <div className='expansible tb2' fc='false' id='Dpto'>
                            <button onClick={() => OnOffExpansible('Dpto')}>
                                <BiChevronRight />
                                <h2>Departamento</h2>
                            </button>
                            <ul>
                                <li>
                                    <Link to={'/Contacto/Dpto/Academico'}>
                                        <h3>Academico</h3>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        target='_blank'
                                        to={'https://www.institucional.frc.utn.edu.ar/sistemas/Areas/Alumnos/PreguntasFrecuentes.asp'}>
                                        <h3>Acerca de la UTN</h3>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to={'/Contacto/Dpto/PPS'}>
                            <h3>Práctica Profesional Supervisada</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Contacto/Reportes'}>
                            <h3>Reportes</h3>
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}