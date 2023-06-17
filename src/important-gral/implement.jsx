import React from 'react'
import BeforePage from './detallado/BeforePage.jsx';
import Header from './detallado/Header.jsx';
import Aside from './detallado/Aside.jsx';

const Cabecera = ()=>{
  return (
    <>
        <BeforePage/>
        <Header/>
        <Aside/>
    </>
  )
}

const Footer=()=>{
  return(
    <footer>
      <h1>
        footer
      </h1>
    </footer>
  )
}

export {
  Footer, Cabecera
}