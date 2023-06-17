import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Cabecera, Footer } from './important-gral/implement.jsx';

import App from './App.js';
import Inicio from './pages/Inicio.jsx';

import './css/gral.css';

/*
Tools
*/
import './css/tool/classpages.css'

import './css/util/Animation.css';
import './css/util/Colors.css';

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
    element: <App />
  },
  {
    path: '/inicio',
    element:<ElementGral Eunico={Inicio}/>
  }
])

/*
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
    path: '/menu/',
    element: <ElementGral Eunico={Menu}/>
  },
  {
    path: '/directivos/',
    element:<ElementGral Eunico={Directivos} />
  },
  {
    path: '/media/',
    element:<ElementGral Eunico={Media} />
  },
  {
    path: '/media/Biblioteca',
    element:<ElementGral Eunico={Biblioteca} />
  },
  {
    path: '/Consultas/SubForoConsultas/',
    element:<ElementGral Eunico={SubForoConsultas} />
  },
  {
    path: '/contacto/',
    element:<ElementGral Eunico={Contacto} />
  },
  {
    path: '/contacto/reportes',
    element:<ElementGral Eunico={Reportes} />
  },
  {
    path: '/Academico/JornadasAcadem/',
    element:<ElementGral Eunico={JornadasAcadem} />
  },
  {
    path: '/Academico/PracticeProfessionalSuperviced/',
    element:<ElementGral Eunico={PracticeProfessionalSuperviced} />
  },
  {
    path: '/Academico/ProyectIyD/',
    element:<ElementGral Eunico={ProyectIyD} />
  },
  {
    path: '/Academico/ProyectFinals/',
    element:<ElementGral Eunico={ProyectFinals} />
  },
  {
    path: '/libs/EeBooks_Extras/',
    element:<ElementGral Eunico={EeBooks_Extras} />
  },
  {
    path: '/libs/EeBooks_Principales/',
    element:<ElementGral Eunico={EeBooks_Principales} />
  },
  {
    path: '/media/PrivatedLibrery/',
    element:<ElementGral Eunico={PrivatedLibrery} />
  },
  {
    path: '/libs/GuideStudy_eFRT/',
    element:<ElementGral Eunico={GuideStudy_eFRT} />
  }
])
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />

  </React.StrictMode>
);