import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import '../../css/AsideAccessForm.css';

const cookie = new Cookies();

//Define los valores al inicio si no los tiene, el siguiente los nombra
const DefCookiesUndefineds = (SizeFont, setSizeFont, Theme, setThemePage, SimpleMode, setSimpleMode, Dislexia, setDislexiaMode) => {

    let changes = [];

    //Tamaño
    if (SizeFont === undefined) {
        cookie.set('Size', '2', Date.now() * 1.4);
        setSizeFont(2);
        changes.push('Size');
    }

    //Tema
    if (Theme === undefined) {
        cookie.set('Theme', 'Light', Date.now() * 1.4);
        setThemePage('Dark');
        changes.push('Theme');
    }

    //Modo simple
    if (SimpleMode === undefined) {
        cookie.set('Simple', false, Date.now() * 1.4);
        setSimpleMode(false);
        changes.push('Modo Simple');
    }

    //Modo discapacidad para lectura
    if (Dislexia === undefined) {
        cookie.set('Dislexia', false, Date.now() * 1.4);
        setDislexiaMode(false);
        changes.push('Modo para Dislexicos')
    }

    if (changes.length !== 0) {
        console.log('Cambios');
        console.log(changes);
        window.location.reload();
    }
}
const SayCookiesValues = (SizeFont, Theme, SimpleMode, Dislexia) => {
    const values = [
        {
            noCookie_Sizefont: SizeFont,
            Cookie: cookie.get('Size')
        },
        {
            noCookie_ThemePage: Theme,
            Cookie: cookie.get('Theme')
        },
        {
            noCookie_SimpleMode: SimpleMode,
            Cookie: cookie.get('Simple')
        },
        {
            noCookie_Dislex: Dislexia,
            Cookie: cookie.get('Dislexia')
        }
    ];
}

export default () => {
    const [SizeFont, setSizeFont] = useState(cookie.get('Size'));
    const [Theme, setThemePage] = useState(cookie.get('Theme'));
    const [SimpleMode, setSimpleMode] = useState(cookie.get('Simple'));
    const [Dislexia, setDislexiaMode] = useState(cookie.get('Dislexia'));

    const ChangeValues = (target = document.getElementById('Light')) => {
        const sytecont = document.getElementById('SiteCont');

        const Type = target.name;

        if (Type === 'Theme') {
            cookie.set('Theme', target.value, new Date() * 1.4);
            setThemePage(target.value);
            sytecont.setAttribute('cor', target.value);
        }

        if (Type === 'Size') {
            cookie.set('Size', target.value, new Date() * 1.4);
            setSizeFont(target.value);
            sytecont.setAttribute('sz', target.value);
        }

        if (Type === 'Simple') {
            cookie.set('Simple', target.checked, new Date() * 1.4);
            setSimpleMode(target.checked);
            sytecont.setAttribute('Simple', target.checked);
        }

        if (Type === 'Dyslex') {
            cookie.set('Dislexia', target.checked, new Date() * 1.4);
            setDislexiaMode(target.checked);
            sytecont.setAttribute('dx', target.checked);
        }
    }

    const Visible = ()=>{
        document.querySelectorAll('#temas input').forEach(Xtema=>{
            if (Xtema.value === cookie.get('Theme')) {
                Xtema.checked = true;
            }
        });

        document.getElementById('Size').value = cookie.get('Size');

        if (String(cookie.get('Simple')) === 'true') {
            document.getElementById('SimpleMode').checked = true;
        }
        if (String(cookie.get('Dislexia')) === 'true') {
            document.getElementById('Dyslex').checked = true
        }
    }


    useEffect(() => {
        //Si las cookies no estuvieron presentes, se las va a declarar
        DefCookiesUndefineds(SizeFont, setSizeFont, Theme, setThemePage, SimpleMode, setSimpleMode, Dislexia, setDislexiaMode);
        SayCookiesValues(SizeFont, Theme, SimpleMode, Dislexia);

        Visible();

    }, [SizeFont, Theme, SimpleMode, Dislexia])

    const ClearCookies = () => {
        cookie.remove('Size');
        cookie.remove('Theme');
        cookie.remove('Simple');
        cookie.remove('Dislexia');

        window.location.reload();
    }

    return (
        <form id='FormAccess'
            onChange={(e) => {
                ChangeValues(e.target);
            }}
            onSubmit={e => e.preventDefault()}>
            <ul>
                <li className='theme'>
                    <div id='temas'>
                        Tema:
                        <input type='radio' id='Dark' name='Theme' value={'Dark'} />
                        <label htmlFor='Dark'>Dark</label>
                        <input type='radio' id='Light' name='Theme' value={'Light'} />
                        <label htmlFor='Light'>Light</label>
                    </div>
                </li>
                <li className='FontSize'>
                    Tamaño de letra
                    <input type='range' id='Size' name='Size' min={1} max={5} defaultValue={2} />
                </li>
                <li className='ModoSimple'>
                    Modo Simple (Sin Animaciones) <br/>
                    <input type='checkbox' name='Simple' id='SimpleMode' />
                </li>
                <li className='ModoDyslex'>
                    Discapacidad para lectura <br/>
                    <input type='checkbox' name='Dyslex' id='Dyslex' />
                </li>
            </ul>
        </form>
    )
}