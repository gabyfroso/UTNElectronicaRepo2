function Expansibles(id = '') {
    const div = document.getElementById(id);

    div.getAttribute('fc') == 'false' ? 
    div.setAttribute('fc', 'true') : div.setAttribute('fc', 'false');
}

export default Expansibles;