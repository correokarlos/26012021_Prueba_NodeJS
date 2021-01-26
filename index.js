//Importaciones desde node
//Referecnia al archivo que define las variables de entrono (extensión '.env')
require('dotenv').config();

const path = require('path');

const express = require('express');

//npm cors: configuración de mi servidor para que acepte peticiones de diferentes dominios
const cors = require('cors')

//Importación del archivo de configuracion ( desestructuración a la constante 'dbConnection'  --> conexión ala BD)
const { dbConnection } = require('./database/config');

//Crear el servidor express
const app = express();

//Configuración CORS. Esta función se ejecutara para todas las lineas que siguen hacia abajo
app.use(cors());

//Lectura y parseo del body (info que s emanda por ejemplo con las peticiones POST). Esto hay que colocar en el index antes de las rutas
app.use(express.json());

//LLamada a la función que estable la conexión con la Base de datos
dbConnection();

//Directorio publico. Cualquier pesaona podra acceder al contenido de la carpeta public
app.use(express.static('public'));



//RUTAS, peticiones RestFull


// Rutas 
app.use('/api/task', require('./routes/task-route'));




//Si no es ningula de sas rutas. Cualquier otra petición
app.get('*', (req, res) => {
    //Me redireccionara al archivo index.html de la aplicación
    res.sendFile( path.resolve(__dirname, 'public/index.html') )

});



//Arranque de la aplicación en el puerto 3200. Retorna un Callback que se va a ejecutar despues del arranque de la aplicación
//Optenemos el puerto de escucha a traves de la variable de entrono PORT
app.listen(process.env.PORT, () => {
    console.log('Servidor express corriendo en puerto: ' + process.env.PORT);
});