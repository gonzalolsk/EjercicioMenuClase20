// Acá nos falta nuestra fuente de datos ¿?
let menu = [ 
    
    { nombre:'Carpaccio fresco',
    descripcion: 'Entrada Carpaccio de salmón con cítricos',
    descripcionLarga: true ,
    precio: 'U$S 65.50' ,
    imagen:'../images/Carpaccio-de-salmon.jpg',
    id: 1},
    
    { nombre:'Risotto de berenjena',
    descripcion: 'Risotto de berenjena y queso de cabra', 
    descripcionLarga: false ,
    precio: 'U$S 47.00',
    imagen:'../images/Risotto-berenjena-queso-cabra.jpg',
    id: 2 },
    
    {nombre:'Mousse de arroz', 
    descripcion: 'Mousse de arroz con leche y aroma de azahar', 
    descripcionLarga: false ,
    imagen:'../images/Mousse-de-arroz-con-leche.jpg',
    precio: 'U$S 27.50',
    id: 3 }, 
    
    {nombre:'Espárragos blancos', 
    descripcion:'Espárragos blancos con vinagreta de verduras y jamón ibérico', 
    descripcionLarga: false ,
    imagen:'../images/esparragos.jpg',
    precio: 'U$S37.50',
    id: 4} 
    
    ]   
// Acá nos falta un objeto literal con las acciones para cada ruta
const controller = {
    home: (req,res) => {res.render('index', {'lista': menu})},    

    detalleMenu: (req, res) => { res.render('includes/detalleMenu', {idMenu: menu.filter( (plato)=>{
        let id = req.params.id;
        return plato.id == id
    } ) })
    }}
// Acá exportamos el resultado
module.exports = controller;