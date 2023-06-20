/**
 * Expand tiene 2 posibilidades
 * 
 * tb: ''
 * link: 'url'
 * si es definitivo
 * 
 * 
 * tb: ''
 * children: []
 * si es un "elemento padre"
 * 
 * tb1,tb2...
 *  Sirve para posicionar así hacer un salto de 
 * línea más lindo y visible para saber cual es
 * el elemento padre.
 *  El elemento padre lo posee.
 */

const pagemenu = [
    {
        id: 0,
        tb: 'tb1',
        title: 'Media',
        children: [

        ]
    },
    {
        id: 1,
        tb: 'tb1',
        title: 'Proyectos',
        children: [

        ]
    },
    {
        id: 2,
        tb: 'tb1',
        title: 'Publicaciones',
        children: [

        ]
    },
    {
        id: 3,
        tb: 'tb1',
        title: 'Foro',
        children: [

        ]
    }
]

export {
    pagemenu
}