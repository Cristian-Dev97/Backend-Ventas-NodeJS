const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql2');
const cors = require('cors');
const myConnection= require('express-myconnection');
const app= express();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};

app.use(cors(
    config.application.cors.server
));



// rutas backend
const empresaRoutes = require('./rutas/empresa');
const sucursalesRoutes = require('./rutas/sucursales');
const proveedorRoutes = require('./rutas/proveedor');
const areastrabajoRoutes = require('./rutas/areastrabajo');
const empleadosRoutes = require('./rutas/empleados');
const usuarioRoutes = require('./rutas/usuario');
const clientesRoutes = require('./rutas/clientes');
const tipoproductoRoutes = require('./rutas/tipoproducto');
const productoRouter = require('./rutas/producto');
const formapagoRouter = require('./rutas/formapago');
const encabezadocompraRouter = require('./rutas/encabezadocompra');
const detallecompraRouter = require('./rutas/detallecompra');
const encabezadoventaRouter = require('./rutas/encabezadoventa');
const detalleventaRouter = require('./rutas/detalleventa');
const cxcobrarRouter = require('./rutas/cxcobrar');
const cxpagarRouter = require('./rutas/cxpagar');
const pagosRouter = require('./rutas/pagos');

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'cristian_dev',
    password:'Cristian01227',
    port:3306,
    database:'ventas'
}, 'single'));
app.use(express.urlencoded({extended: false}));

var bodyParser = require('body-parser');
 // create application/json parser
app.use(bodyParser.json());

//rutas frontend
app.use('/api/empresa', empresaRoutes);


// archivos estaticos frontend
app.use(express.static(path.join(__dirname,'public')));


//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});	
