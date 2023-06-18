import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {BiChevronRight} from 'react-icons/bi';

import OnOffExpansible from './expansibles.js';

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

            
        </>
    )
}