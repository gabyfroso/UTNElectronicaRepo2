function Expansibles(id = '') {
    const forul = 'ul#'+id;
    const ulexpand = document.querySelector(forul);

    ulexpand.getAttribute('fc') == 'false'? 
    ulexpand.setAttribute('fc', true) : ulexpand.setAttribute('fc', false);

    const forboxicon = 'svg#'+id;
    const icondexpand = document.querySelector(forboxicon);

    icondexpand.getAttribute('fc') == 'false'? 
    icondexpand.setAttribute('fc', true) : icondexpand.setAttribute('fc', false);
}

export default Expansibles;