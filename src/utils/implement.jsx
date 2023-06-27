import React, { useState, useEffect } from 'react'
import { BeforePage, ChangeAnyPage } from './ControlCookies.js';
import { icons } from '../img/controlsimg.js';

import { AiOutlineBars, AiOutlineBorderlessTable } from 'react-icons/ai';


import Header from './detallado/Header.jsx';
import Aside1 from './detallado/Aside1.jsx';
import AsideAccesibility from './detallado/AsideAccesibility.jsx';
import Map from "./detallado/Map.jsx";
import styleFooter from '../css/Footer.module.css';

import { CuadranteAnuncioP } from './Anuncios.jsx';

const Filter = (ChangeAny) => (<button id={'Filter'} onClick={ChangeAny} />)

function Cabecera() {
  const [vsAside, setVsAside] = useState(false);

  const ChangeAsideFc = () => {
    setVsAside(!vsAside);
  }

  useEffect(() => { BeforePage() }, [vsAside]);



  return (
    <>
      <Header ChangeAsideFc={ChangeAsideFc} />
      <CuadranteAnuncioP />

      {vsAside && Filter(ChangeAsideFc)}
      <Aside1 vs={vsAside} />
      <AsideAccesibility vs={vsAside}
        ChangeAnyPage={ChangeAnyPage} />
    </>
  )
}

/**
 * 
 * @returns Footer, va al último en las páginas, necesita mejorarse
 */
const Footer = () => {
  const [vs, setvs] = useState(false);

  const changeVs = () => {
    setvs(!vs);
  }

  const LiConst = (
    <>
      <ul>
        <li>
          Encuentranos en
        </li>
        <li>
        <a href='https://goo.gl/maps/ytr2hrftZFWe8F586' alt='utn-frt'>
            <b>Universidad Tecnológica Nacional <br/> Facultad Regional Tucumán</b>
          </a>
        </li>
      </ul>
    </>
  )

  return (
    <footer id='Here'>
      <div>
        <a type='button' href='https://www.utn.edu.ar/es/' value='utn' target='_blanc'>
          <img src={icons.ilcomplete2} alt='UTN' />
        </a>
        <nav className={styleFooter.allmapdec}>
          <button onClick={changeVs}>
            <AiOutlineBars />/<AiOutlineBorderlessTable />
            <button id={styleFooter.dec} ><button vs={String(vs)} /></button>
          </button>
        </nav>
      </div>

      <div className={styleFooter.midfooter}>
        {!vs && LiConst}
        {vs && <nav id={styleFooter.UTNmap}><Map/></nav>}
      </div>
      
      <div>
        <span>
          ©2022 por Dpto. Ingeniería Electrónica FRT-UTN
        </span>
      </div>
    </footer>
  )
}

export {
  Footer, Cabecera, Filter
}