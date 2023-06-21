import React from 'react';
import { icons, page1 } from '../img/controlsimg';
import { tpage1 } from "../components/cardAll";
import MediaCard from "../components/card";
import styles from '../components/cards.module.css'

export default () => {

    return (
        <>
            <div className='fximg l1'>
                <img src={icons.ilutn} className='title' />
            </div>

            <section id='Reservatorio' className='mainctr'>
                <h1>Reservatorio Digital eFRT</h1>
                <h3>Departamento Ingeniería Electrónica</h3>
                <div className={styles.boxCards}>
                    {tpage1.map((tarjeta) => {
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
                <form className='classic--1'>
                    <ul>
                        <li>
                            <span>Nombre *</span>
                            <input />
                        </li>
                        <li>
                            <span>Email *</span>
                            <input type='email' />
                        </li>
                        <li>
                            <span>Asunto</span>
                            <input />
                        </li>
                        <li>
                            <span>Mensaje *</span>
                            <input type='text' />
                        </li>
                    </ul>
                </form>
            </section>
        </>
    )
}