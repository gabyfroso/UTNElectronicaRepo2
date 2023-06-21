import Cookies from 'universal-cookie';

const cookie = new Cookies();

function BeforePage() {

  const corpage = cookie.get('Theme');
  const sizepage = cookie.get('Size');
  const dislexy = cookie.get('Dislexia');
  const simplep = cookie.get('Simple');

  const dateA = new Date();
  const fechaAUnMes = new Date(dateA.getFullYear(),
    dateA.getMonth() + 1);

  if (!corpage && !sizepage && !dislexy && !simplep) {
    cookie.set('Theme', 'Light', fechaAUnMes);
    cookie.set('Size', 2, fechaAUnMes);
    cookie.set('Simple', false, fechaAUnMes);
    cookie.set('Dislexia', false, fechaAUnMes);
  }

  const sytecont = document.getElementById('SiteCont');

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
}

function ChangeAnyPage(Elem = 'Elemento no cambiado', Value = 'Value no cambiado') {
  const sytecont = document.getElementById('SiteCont');

  if (Elem === undefined || Value === undefined) {
    alert('Error en elemento');
    return;
  }

  sytecont.setAttribute(`${Elem}`, `${Value}`);
}

function RemoveAllCookies() {
  cookie.remove('Theme');
  cookie.remove('Size');
  cookie.remove('Dislexia');
  cookie.remove('Simple');
}

export {
  BeforePage, ChangeAnyPage, RemoveAllCookies
}