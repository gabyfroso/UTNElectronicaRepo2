import react, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

export default () => {

  const corpage = cookie.get('Theme');
  const sizepage = cookie.get('Size');
  const dislexy = cookie.get('Dislexia');
  const simplep = cookie.get('Simple');
  const [n, setN] = useState(0);

  useEffect(() => {
    const sytecont = document.getElementById('SiteCont');

    if (n === 0) {
      setN(1);

      if (String(corpage !== String(sytecont.getAttribute('cor')))) {
        sytecont.setAttribute('cor', corpage);
      }
      if (String(sizepage !== String(sytecont.getAttribute('sz')))) {
        sytecont.setAttribute('sz', sizepage);
      }
      if (String(dislexy !== String(sytecont.getAttribute('dx')))) {
        sytecont.setAttribute('dx', dislexy);
      }
      if (String(sizepage !== String(sytecont.getAttribute('Simple')))) {
        sytecont.setAttribute('Simple', simplep);
      }

      return () => {

      }
    };

  }, [corpage])

  return (<></>)
}