import React, {useState, useEffect} from 'react';
import {useRouteError, Link, Navigate} from 'react-router-dom';

function Conteo({n=9}) {
    if (n===0) {
        return(
            <>
                <Navigate to='/inicio'/>
            </>
        )
    } else{
        return(<></>)
    }
}

export default () => {
    const error = useRouteError();

    console.error(error);

    const [Contador, setContador] = useState(10);

    useEffect(() => {
      
    setTimeout(() => {
        setContador(Contador-1);
    }, 1000);
      
    }, [Contador])
    

    return (
        <div id='error-page'>
            <h1>Oops!</h1>
            <p>Lo lamento, un error ha ocurrido</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>

            <h2>Si la página no fue encontrada, serás redireccionado en: {Contador}s </h2>

            <h3>O puedes a travez de este link: <Link to={'/inicio'}>Ir A Inicio</Link> </h3>

            <Conteo n={Contador}/>
        </div>
    );
}