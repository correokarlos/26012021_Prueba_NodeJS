
const express = require('express');

const path = require('path');

//npm cors: configuración de mi servidor para que acepte peticiones de diferentes dominios
const cors = require('cors')

//Crear el servidor express
const app = express();

//Configuración CORS. Esta función se ejecutara para todas las lineas que siguen hacia abajo
app.use(cors());

//Lectura y parseo del body
app.use(express.json());


//Directorio publico. Cualquier pesaona podra acceder al contenido de la carpeta public
app.use(express.static('public'));



//RUTAS, API REST
app.use('/api/task', require('./routes/task-route'));




//Si no es ningula de sas rutas. Cualquier otra petición
app.get('*', (req, res) => {
    //Me redireccionara al archivo index.html de la aplicación
    res.sendFile( path.resolve(__dirname, 'public/index.html') )

});


app.listen(process.env.PORT, () => {
    console.log('Servidor express corriendo en puerto: ' + process.env.PORT);
});