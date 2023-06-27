import React, {useState, useEffect} from 'react';
import { Link, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
function App() {
  const [tomenu, setTomenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTomenu(true);
    }, 200);

    setTimeout(() => {
      setTomenu(false);
    }, 800);
  
    return () => {
      
    }
  }, [])
  
  
  return (
    <div className="App">
      AppJS
      <h2>Cargando cookies</h2>
      <h3>Size: {cookie.get('Size')} </h3>
      <h3>Theme: {cookie.get('Theme')}</h3>
      <h3>Discapacidad lectora: {cookie.get('Dislexia')}</h3>

      <br/>
      {
        tomenu && <Navigate to='/inicio'/>
      }
      
      <Link to={'/inicio'}>1 ¡REDIRECCIONAME! 1</Link>
    </div>
  );
}

export default App;
