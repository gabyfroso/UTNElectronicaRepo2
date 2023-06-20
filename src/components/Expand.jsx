import React, { useState, useEffect } from 'react'
import { BiChevronRight } from 'react-icons/bi';

function EnlaceDirecto({ to, tipoh, children, target='_parent' }) {
    switch (tipoh) {
        case 'h1':
            return (
                <a href={to} target={target}>
                    <h1>
                        {children}
                    </h1>
                </a>
            )
            break;
        case 'h2':
            return (
                <a href={to} target={target}>
                    <h2>
                        {children}
                    </h2>
                </a>
            )
            break;
        case 'h3':
            return (
                <a href={to} target={target}>
                    <h3>
                        {children}
                    </h3>
                </a>
            )
            break;
        case 'p':
            return (
                <a href={to} target={target}>
                    <p>
                        {children}
                    </p>
                </a>
            )
            break;

        default:
            return (
                <a href={to} target={target}>
                    <h2>
                        {children}
                    </h2>
                </a>
            )
            break;
    }
}

function Expand({ children = [], title = 'set title', tb = 'tb1' }) {
    const [expandido, setExpandido] = useState(false);

    const changeState = () => {
        setExpandido(!expandido);
    }

    useEffect(() => { }, [expandido]);

    const childrenArray = React.Children.toArray(children);

    const childrenList = childrenArray.map((ch, id) => (
        <li key={id}>{ch}</li>
    ))

    return (
        <>
            <div className={`${tb} expansible`}>
                <button onClick={changeState}>
                    <BiChevronRight fc={expandido.toString()} />
                    <h1> {title} </h1>
                </button>
                {expandido && (
                <ul>
                    {childrenList}
                </ul>
            )}
            </div>
        </>
    )
};

export {
    Expand, EnlaceDirecto
};

/*

        console.log('Children:');
        console.log(children);
        console.log('Link');
        console.log(linkExpand);
*/