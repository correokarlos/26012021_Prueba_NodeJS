const Image = require('../class/image');
const ListImages = require('../class/list-image');

// Importar módulo para gestionar los archivos
const fs = require('fs');
// Importar módula para construir un path completo
const pathCompleto = require('path');
// Importar módulo para asignar un nombre de archivo único (binario)
const uuidv4 = require('uuid');


const generateVariant = async (pathOrigin, resolution) => {

    try {

        // Apuntar al archivo según path
        // const file = req.files.imagen;

        //  Crear un nuevo archivo seún resolución


        // Obtener la extensión del archivo original
        const nameParts = file.name.split('.');
        const nameOrigin = nameParts[0]; // Sabemos que el nombre del fichero no tiene '.' 
        const extension = nameParts[nameParts.length - 1];


        // Generar un nombre para la nueba imagen aleatoria y único
        const nameFile = `${ uuidv4() }.${ extension }`;

        //Construir el path completo del archivo a cargar
        const pathNew = pathCompleto.join(__dirname, `../output/${nameOrigin}/${resolution}/${nameFile}`);

        // Method mv() for place the file somewhere on your server
        file.mv(pathNew, (err) => {

            if (err) {
                console.log('error:', err);
                return res.status(500).json({
                    ok: false,
                    msg: 'Error al crear la imagen'

                });
            }

            // Crear un nuevo objeto de Imagen
            const image = new Image(pathNew, resolution)
            // Añadirmo a la lista de imagenes
            const listImeges = ListImages.getInstance();
            listImeges.insertImage(image);


            // Devulve una respuesta al cliente satisfactoria
            res.json({
                ok: true,
                msg: 'Archivo subido',
                nombreArchivo

            });
        });

        return true;


    } catch (error) {

        console.log(error);
        return false;

    }
}

module.exports = {
    generateVariant
}