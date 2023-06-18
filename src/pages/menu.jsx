import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {BiChevronRight} from 'react-icons/bi';

import OnOffExpansible from './extra/expansibles.js';

export default () => {
    return (
        <>
            <h1>Sección de Menu</h1>
            <button className='expansible' onClick={() => OnOffExpansible('BibliotecaUl')}>
                <BiChevronRight id='BibliotecaUl' fc='false'/>
                <h1>Biblioteca</h1>
            </button>
            <ul id='BibliotecaUl' className='expansible tb1' fc='false'>
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
            <button className='expansible' onClick={()=> OnOffExpansible('GuideStdUl')}>
                <BiChevronRight id='GuideStdUl' fc='false'/>
                <h2>Guias de Estudio</h2>
            </button>
            
            <ul id='GuideStdUl' className='expansible tb1' fc='false'>
                <li>
                    <Link to={'/libs/GuideStudy_eFRT'}>
                        <h3>Guia de estudios</h3>
                    </Link>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to={'/EeBooks_Externos/'}>
                        <span>eBooks Externos</span> {/*eBooks v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/EeBooks_eFRT/'}>
                        <span>eBooks eFRT</span> {/*eBooks v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/GuideStudy_eFRT/'}>
                        <span>Guías de Estudios eFRT</span> {/*eBooks v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/JornadasAcadem/'}>
                        <span>Jornadas Académicas y Científicas</span> {/*Academ v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/UbiAcadem/'}>
                        <span>Ubicaciones Académicas y Científicas</span> {/*Academ v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/ProyectIyD/'}>
                        <span>Proyectos de Investigación y Desarrollo</span> {/*Proyectos v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/PracticeProfessionalSuperviced/'}>
                        <span>Práctica Profesional Supervisada</span> {/*Academ v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/Pub_eFRT_UTN/'}>
                        <span>Publicaciones eFRT-UTN</span> {/*grados_y_public v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/ProyectFinals/'}>
                        <span>Proyectos Finales</span> {/*Proyectos v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/Posgrados/'}>
                        <span>Posgrados eFRT-UTN</span> {/*Academ v*/}
                    </Link>
                </li>
                <li>
                    <Link to={'/Convenios/'}>
                        <span>Convenios y Transferencias al Medio</span> {/*Academ v*/}
                    </Link>
                </li>
            </ul>
        </>
    )
}