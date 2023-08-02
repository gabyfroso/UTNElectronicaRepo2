import React from 'react';
import { icons, page1 } from '../img/controlsimg';
import tpage1 from "../components/cardAll";
import MediaCard from "../components/card";
import styles from '../components/cards.module.css'

function inicio (){
    let contEnter = 0;
    const textAreaAdjust = (elem) => {
        if (elem.code === "Enter") {
            contEnter++;
        }

        if (contEnter > 2 && contEnter < 5) {
            elem.target.style.height = "7em";
        }
    }

    return (
        <>
            <div className='fximg l1'>
                <img src={icons.ilutn} alt='logoUTN' className='title' />
            </div>

            <section id='Reservatorio' className='mainctr c'>
                <h1>Reservatorio Digital eFRT</h1>
                <h3>Departamento Ingeniería Electrónica</h3>
                <div className={styles.boxCards}>
                    {tpage1.Pages.inicio.map((tarjeta) => {
                        return (
                            <MediaCard
                                key={tarjeta.id}
                                img={tarjeta.img}
                                title={tarjeta.title}
                                description={tarjeta.description}
                                link={tarjeta.link}
                            />
                        );
                    })}
                </div>
            </section>
            <section>
                <ul className='album--h'>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>
            </section>
            <section className='c'>
                <h1>Enlaces a bibliotecas externas</h1>
                <ul className='Scard'>
                    <li className='i'>
                        <img src={page1.i1} alt='Dpto Ingeniería Electrónica, supercard' />
                        <div>
                            <h1>
                                DEPARTAMENTO DE INGENIERÍA ELECTRÓNICA FRT - UTN
                            </h1>
                            <h3>
                                Visítanos
                            </h3>
                            <h2>
                                RIVADAVIA 1050 - PISO 1
                            </h2>
                            <h2>
                                SAN MIGUEL DE TUCUMÁN,

                                TUCUMÁN
                            </h2>
                        </div>
                    </li>
                </ul>
            </section>
            <section className='c'>
                <h1>
                    Contáctanos
                </h1>
                <h4>
                    <a href='mailto:dptoelectronica.frt@gmail.com?Subject=Page:%20Depto%20Electronica'>
                        dptoelectronica.frt@gmail.com
                    </a>
                </h4>
                <form className='f class1'>
                    <ul>
                        <li>
                            <div>
                                <label htmlFor='name'>Name</label>

                                <abbr title='Tu nombre o el de tu organización. Campo obligatorio'>
                                    *
                                </abbr>
                            </div>
                            <input id='name' autoComplete='organization' />
                        </li>
                        <li>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <abbr title='email de contacto. Campo obligatorio'>
                                    *
                                </abbr>
                            </div>
                            <input id='email' type='email' autoComplete='email' />
                        </li>
                        <li>
                            <div>
                                <abbr title='resumen titular del tema. Campo obligatorio'>
                                    <label htmlFor='asunto'>Asunto</label>
                                </abbr>
                            </div>
                            <input id='asunto' />
                        </li>
                        <li>
                            <div>
                                <abbr title='puedes detallar todo lo que gustes, esperamos tu respuesta!'>
                                    <label htmlFor='msg'>Mensaje</label>
                                    *
                                </abbr>
                            </div>
                            <textarea id='msg' onKeyUp={(elem) => textAreaAdjust(elem)} />
                        </li>
                        <li>
                            <input type='submit' value='enviar' id='send'/>
                        </li>
                    </ul>
                </form>
            </section>
        </>
    )
}

export default inicio;