import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

import { Cabecera, Footer } from './important-gral/implement.jsx';

import App from './App.js';

import './css/gral.css';

/*  Tools  */
import './css/tool/Cards.css'
import './css/tool/Expand.css'
import './css/tool/classpages.css'

/* Util */
import './css/util/Animation.css';
import './css/util/Colors.css';
import './css/util/Size.css';

/*
PAGES
*/
import Inicio from './pages/Inicio.jsx';
import Directivos from './pages/Directivos';
import Menu from './pages/menu';

//Contacto C_to
import C_to from './pages/Contacto/contacto.jsx'
import C_toMenu from './pages/Contacto/Menu.jsx'

import C_toDptoDpto from './pages/Contacto/Dpto/Dpto.jsx';
import C_toDptoAcademico from './pages/Contacto/Dpto/Academico.jsx';
import C_toDptoPPS from './pages/Contacto/Dpto/PPS.jsx';
import C_toDptoUTN from './pages/Contacto/Dpto/UTN.jsx';

import C_toReportes from './pages/Contacto/Reportes/Reportes.jsx';


//Media M_a
import M_a from './pages/Media/Media';
import M_aMenu from './pages/Media/Menu';

import M_aBiblioteca from './pages/Media/Biblioteca/Biblioteca.jsx';
import M_aBibliotecaStudyGuide from './pages/Media/Biblioteca/StudyGuide.jsx';
import M_aBibliotecaMore from './pages/Media/Biblioteca/More.jsx';

import M_aProyectos from './pages/Media/Proyectos/Proyectos.jsx';
import M_aProyectosIYD from './pages/Media/Proyectos/IYD.jsx';
import M_aProyectosPPS from './pages/Media/Proyectos/PPS.jsx';
import M_aProyectosFinDeCarrera from './pages/Media/Proyectos/FinDeCarrera.jsx';

import M_aPub_es from './pages/Media/Publicaciones/Publicaciones.jsx';
import M_aPub_esAcademicas from './pages/Media/Publicaciones/Academicas.jsx';
import M_aPub_esCientificas from './pages/Media/Publicaciones/Cientificas.jsx';

import M_aForo from './pages/Media/Foro/Foro.jsx';
import M_aForoHorarios from './pages/Media/Foro/Horarios.jsx';
import M_aForoConvenios from './pages/Media/Foro/Convenios.jsx';


import Login from './login';
import Admin from './admin';

const ElementGral= ({Eunico})=>{
  return(
    <>
      <div id='SiteCont'>
        <Cabecera />
        <main>
          <Eunico />
        </main>
        <Footer />
      </div>
    </>
  )
}


const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/inicio/',

    element: <ElementGral Eunico={Inicio} />
  },
  {
    path: '/Directivos',

    element: <ElementGral Eunico={Directivos} />
  },
  {
    path: '/Menu',

    element: <ElementGral Eunico={Menu} />
  },
  /*

  **

    SECCION DE CONTACTO
  
  **

  */
  {
    path: '/Contacto',

    element: <ElementGral Eunico={C_to} />
  },
  {
    path: '/Contacto/Menu',

    element: <ElementGral Eunico={C_toMenu} />
  },
  {
    path: '/Contacto/Dpto',

    element: <ElementGral Eunico={C_toDptoDpto} />
  },
  {
    path: '/Contacto/Dpto/Academico',

    element: <ElementGral Eunico={C_toDptoAcademico} />
  },
  {
    path: '/Contacto/PPS',

    element: <ElementGral Eunico={C_toDptoPPS} />
  },
  {
    path: '/Contacto/UTN',

    element: <ElementGral Eunico={C_toDptoUTN} />
  },

  {
    path: '/Contacto/Reportes',

    element: <ElementGral Eunico={C_toReportes} />
  },
  /*

  **

    SECCION DE MEDIA
  
  **

  */
  {
    path: '/Media',

    element: <ElementGral Eunico={M_a} />
  },
  {
    path: '/Media/Menu',

    element: <ElementGral Eunico={M_aMenu} />
  },
  {
    path: '/Media/Biblioteca',

    element: <ElementGral Eunico={M_aBiblioteca} />
  },
  {
    path: '/Media/Biblioteca/StudyGuide',

    element: <ElementGral Eunico={M_aBibliotecaStudyGuide} />
  },
  {
    path: '/Media/Biblioteca/More',

    element: <ElementGral Eunico={M_aBibliotecaMore} />
  },


  {
    path: '/Media/Proyectos',

    element: <ElementGral Eunico={M_aProyectos} />
  },
  {
    path: '/Media/Proyectos/IYD',

    element: <ElementGral Eunico={M_aProyectosIYD} />
  },
  {
    path: '/Media/Proyectos/PPS',

    element: <ElementGral Eunico={M_aProyectosPPS} />
  },
  {
    path: '/Media/Proyectos/FinDeCarrera',

    element: <ElementGral Eunico={M_aProyectosFinDeCarrera} />
  },


  {
    path: '/Media/Publicaciones',

    element: <ElementGral Eunico={M_aPub_es} />
  },
  {
    path: '/Media/Publicaciones/Academicas',

    element: <ElementGral Eunico={M_aPub_esAcademicas} />
  },
  {
    path: '/Media/Publicaciones/Cientificas',

    element: <ElementGral Eunico={M_aPub_esCientificas} />
  },


  {
    path: '/Media/Foro',

    element: <ElementGral Eunico={M_aForo} />
  },
  {
    path: '/Media/Foro/Horarios',

    element: <ElementGral Eunico={M_aForoHorarios} />
  },
  {
    path: '/Media/Foro/Convenios',

    element: <ElementGral Eunico={M_aForoConvenios} />
  },

  /**
   * Important
   */
  {
    path: '/login/',
    element:<Login/>
  },
  {
    path: '/admin',
    element: <Admin/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />

  </React.StrictMode>
);