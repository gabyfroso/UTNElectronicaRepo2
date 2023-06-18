import { Link, Navigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
function App() {
  
  return (
    <div className="App">
      AppJS
      <h2>Cargando cookies</h2>
      <h3>Size: {cookie.get('Size')} </h3>
      <h3>Theme: {cookie.get('Theme')}</h3>
      <h3>Discapacidad lectora: {cookie.get('Dislexia')}</h3>

      <br/>
      <Navigate to='/inicio'/>
      <Link to={'/inicio'}>1 ¡REDIRECCIONAME! 1</Link>
    </div>
  );
}

export default App;
