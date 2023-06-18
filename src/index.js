import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

import { Cabecera, Footer } from './important-gral/implement.jsx';

import App from './App.js';

import './css/gral.css';

/*  Tools  */

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

//Contacto
import Contacto from './pages/Contacto/contacto'
import ContactoMenu from './pages/Contacto/Menu'
import ContactoDpto from './pages/Contacto/Dpto';
import ContactoReportes from './pages/Contacto/Reportes';

//Media
import Media from './pages/Media/Media';
import MediaMenu from './pages/Media/Menu';
import MediaBiblioteca from './pages/Media/Biblioteca';
import MediaProyectos from './pages/Media/Proyectos';
import MediaPublicaciones from './pages/Media/Publicaciones';
import MediaForo from './pages/Media/Foro';


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

    element: <ElementGral Eunico={Contacto} />
  },
  {
    path: '/Contacto/Menu',

    element: <ElementGral Eunico={ContactoMenu} />
  },
  {
    path: '/Contacto/Dpto',

    element: <ElementGral Eunico={ContactoDpto} />
  },
  {
    path: '/Contacto/Reportes',

    element: <ElementGral Eunico={ContactoReportes} />
  },
  /*

  **

    SECCION DE MEDIA
  
  **

  */
  {
    path: '/Media',

    element: <ElementGral Eunico={Media} />
  },
  {
    path: '/Media/Menu',

    element: <ElementGral Eunico={MediaMenu} />
  },
  {
    path: '/Media/Biblioteca',

    element: <ElementGral Eunico={MediaBiblioteca} />
  },
  {
    path: '/Media/Proyectos',

    element: <ElementGral Eunico={MediaProyectos} />
  },
  {
    path: '/Media/Publicaciones',

    element: <ElementGral Eunico={MediaPublicaciones} />
  },
  {
    path: '/Media/Foro',

    element: <ElementGral Eunico={MediaForo} />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />

  </React.StrictMode>
);