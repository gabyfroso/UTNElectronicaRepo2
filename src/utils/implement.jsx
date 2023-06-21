import React, { useState, useEffect } from 'react'
import { BeforePage, ChangeAnyPage } from './ControlCookies.js';

import Header from './detallado/Header.jsx';
import Aside1 from './detallado/Aside1.jsx';
import AsideAccesibility from './detallado/AsideAccesibility.jsx';
import {CuadranteAnuncioP} from './Anuncios.jsx';

const Filter = (ChangeAny)=>(<button id={'Filter'} onClick={ChangeAny} />)

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
  return (
    <footer>
      <h1>
        footer
      </h1>
    </footer>
  )
}

export {
  Footer, Cabecera, Filter
}