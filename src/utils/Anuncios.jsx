import React, { useState, useEffect } from 'react';
import {GrClose} from 'react-icons/gr';
import AnunciosJson from '../json/Anuncios.json';
import Cookies from 'universal-cookie';
import style from '../css/tool/Anuncios.module.css';

import {Filter} from './implement';

const cookie = new Cookies();

const CuadranteAnuncioP = () => {
    const [mostrar, setmostrar] = useState(true);
    const [timeOuts, settimeOuts] = useState(cookie.get('TimeOuts'));

    const nD = new Date();
    const fechaMas8h = new Date(nD.getFullYear(), nD.getMonth(), nD.getDate(), nD.getHours()+8);

    const ChangeMostrar = ()=>{
        cookie.set('TimeOuts', `${timeOuts}-P`, fechaMas8h);

        setmostrar(false);
    }    
    useEffect(() => { 
        if (timeOuts === undefined) {
            cookie.set('TimeOuts', ``, fechaMas8h);
            settimeOuts('');
        };
        
        //Para que no sea un spam, se pone un timeout de 8h
        String(timeOuts).split('-').forEach(Outs=>{
            if (Outs === 'P') {
                setmostrar(false);
            }
        });

    }, [mostrar])

    const SegmentAnuncio = (
        <>
            <nav id={style.Principal}>
                <button id={style.xPrincipal} onClick={ChangeMostrar}>
                    <GrClose/>
                </button>
            </nav>
            {Filter(ChangeMostrar)}
        </>
    )

    return (<>{mostrar && SegmentAnuncio}</>)
}

export {
    CuadranteAnuncioP
};