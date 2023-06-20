import React from 'react';
import { Expand, EnlaceDirecto as Edir } from '../components/Expand.jsx';
import { pagemenu } from '../components/expandAll.js';

function Menu() {
    return (
        <>
            <h1>Sección de Menu</h1>
            <div className='SuperE'>
                <Expand title='Media' tb='tb1'>

                    <Expand title='Biblioteca' tb='tb2'>

                        <Edir to={'/Media/Biblioteca/StudyGuide'}>
                            Guias de estudios
                        </Edir>
                        <Edir to={'/Media/Biblioteca/More'}>
                            Más
                        </Edir>

                    </Expand>
                    <Expand title='Proyectos' tb='tb2'>

                        <Edir to={'/Media/Proyectos/IYD'}>
                            Investigación y desarrollo
                        </Edir>
                        <Edir to={'/Media/Proyectos/PPS'}>
                            Práctica Profesional Supervisada
                        </Edir>
                        <Edir to={'/Media/Proyectos/FinDeCarrera'}>
                            Proyectos de Fin de carrera
                        </Edir>

                    </Expand>
                    <Expand title='Publicaciones' tb='tb2'>

                        <Edir to={'/Media/Publicaciones/Academicas'}>
                            Academicas
                        </Edir>
                        <Edir to={'/Media/Publicaciones/Cientificas'}>
                            Cientificas
                        </Edir>
                        <Edir
                            to={'http://www.edutecne.utn.edu.ar/indices/menu_publicaciones_digitales.html'}
                            target='_blank'>
                            UTN
                        </Edir>

                    </Expand>
                    <Expand title='Foro' tb='tb2'>

                        <Edir to={'/Media/Foro/Horarios'}>
                            Horarios
                        </Edir>
                        <Edir to={'/Media/Foro/Convenios'}>
                            Convenios
                        </Edir>

                    </Expand>
                </Expand>

                <Expand title='Contacto'>

                    <Expand title='Departamento'>

                        <Edir to={'/Contacto/Dpto/Academico'}>
                            Academico
                        </Edir>
                        <Edir to={'/Contacto/Dpto/PPS'}>
                            Práctica Profesional Supervisada
                        </Edir>
                        <Edir target='_blank'
                            to={'https://www.institucional.frc.utn.edu.ar/sistemas/Areas/Alumnos/PreguntasFrecuentes.asp'}>
                            Acerca de la UTN (PreguntasFrecuentes)
                        </Edir>

                    </Expand>

                    <Expand title='Reportes'>
                        <p>
                            Fallos de página, reporte de bugs, de pdf (©), etc.
                        </p>
                        <Edir to={'/Contacto/Reportes'}>
                            Reportes y errores
                        </Edir>
                    </Expand>
                </Expand>
            </div>

            <br />
        </>
    )
}

export default Menu;