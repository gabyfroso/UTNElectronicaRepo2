import React, { useState, useEffect } from 'react';
import { BiUniversalAccess } from 'react-icons/bi';
import { FaUniversalAccess } from 'react-icons/fa';
import {GrClose} from 'react-icons/gr';
import Cookies from 'universal-cookie';

import style from '../../css/AsideAccessForm.module.css';
const cookie = new Cookies();

function AccessComplete({ ChangeAnyPage }) {

    const [Theme, setThemePage] = useState(`${cookie.get('Theme')}`);
    const [SizeFont, setSizeFont] = useState(`${cookie.get('Size')}`);
    const [SimpleMode, setSimpleMode] = useState(`${cookie.get('Simple')}`);
    const [Dislexia, setDislexiaMode] = useState(`${cookie.get('Dislexia')}`);

    const anychange = (tochange, value, check) => {
        let Elem;
        let val;
        switch (tochange) {
            case 'Theme':
                setThemePage(value);
                cookie.set('Theme', value, new Date() * 1.4);

                Elem = 'cor';
                val = value;


                break;
            case 'Size':
                setSizeFont(value)
                cookie.set('Size', value, new Date() * 1.4);

                Elem = 'sz';
                val = value;


                break;
            case 'Simple':
                setSimpleMode(check);
                cookie.set('Simple', check, new Date() * 1.4);

                Elem = 'simple';
                val = check;


                break;
            case 'Dyslex':
                setDislexiaMode(check);
                cookie.set('Dislexia', check, new Date() * 1.4);

                Elem = 'dx'
                val = check;


                break;
            default:
                alert('Error en elemento')
                console.log('Er:');
                console.log(tochange);
                break;
        }

        ChangeAnyPage(Elem, val);
    }

    useEffect(() => { }, [SimpleMode, SizeFont, Dislexia, Theme]);

    return (
        <nav id={style.Segment}>
            <form onChange={(e) => {
                anychange(e.target.name, e.target.value, e.target.checked);
            }}>
                <ul className={style.Segul}>
                    <li>
                        <h3>Tema</h3>
                        <div>
                            <input type='radio' id='Dark' name='Theme' value={'Dark'} alt='Dark'
                                defaultChecked={Theme === 'Dark'} />
                            <label htmlFor='Dark'>Dark</label>
                            <input type='radio' id='Light' name='Theme' value={'Light'} alt='Light'
                                defaultChecked={Theme === 'Light'} />
                            <label htmlFor='Light'>Light</label>
                        </div>
                    </li>
                    <li>
                        <h3>Tamaño de letra</h3>
                        <div>
                            <input type='range' alt='Size' id='Size' name='Size' min={1} max={5}
                                defaultValue={SizeFont} />
                        </div>
                    </li>
                    <li>
                        <h3>Modo Simple (Sin Animaciones)</h3>
                        <div>
                            <input type='checkbox' id='Simple' name='Simple' alt='SimpleMode'
                                defaultChecked={SimpleMode === true} />
                        </div>
                    </li>
                    <li>
                        <h2>Discapacidad para lectura</h2>
                        <div>
                            <input type='checkbox' id='Dyslex' name='Dyslex' alt='Dyslex'
                                defaultChecked={Dislexia === true} />
                        </div>
                    </li>
                </ul>
            </form>
        </nav>
    )
}

function Accesibility({ vs = false, ChangeAnyPage}) {
    const [AccessBool, setAccessBool] = useState(false);

    const [vs2, setVs2] = useState(true)
    useEffect(() => { }, [AccessBool]);
    const ButtonX = (
        <>
            <button className={style.xAc} onClick={()=> setVs2(false)}>
                <GrClose/>
            </button>
        </>
    )

    const AccessVisible = (
        <>
            {AccessBool && <AccessComplete ChangeAnyPage={ChangeAnyPage} />}
            
            {vs2 && ButtonX}
            <aside id={style.Ac}>
                <button onClick={() => setAccessBool(!AccessBool)}>
                    {
                        AccessBool ? (<FaUniversalAccess />)
                            : (<BiUniversalAccess />)
                    }
                </button>
            </aside>
        </>
    )

    return (
        <>
            {(vs || vs2) && AccessVisible}
        </>
    )
}

export default Accesibility;