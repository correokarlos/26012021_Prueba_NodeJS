
const Image = require('../class/image');
const ListImages = require('../class/list-image');

// Importar módulo para gestionar los archivos que se suben al servidor 
const fs = require('fs');
// Importar módula para construir un path completo
const pathCompleto = require('path');
// Importar módulo para asignar un nombre de archivo único
const uuidv4 = require('uuid');






const generateVariant  = async(pathOrigin, resolution) => {

    try {

        // Apuntar al archivo según path
        // const file = req.files.imagen;
        // TODO: Prata por definir la carga del archivo
        const file = TODO;

        // Convertir resolución


        // Obteern la extensión del archivo
        const nameParts = file.name.split('.');
        const nameOrigin = nameParts[0]; // Sabemos que el nombre del fichero no tiene '.' 
        const extension = nameParts[nameParts.length - 1];



        // Generar un nombre para el archivo aleatorio y único
        const nameFile = `${ uuidv4() }.${ extension }`;

        //Construir el path completo del archivo a cargar
        const pathNew = pathCompleto.join(__dirname, `../output/${nameOrigin}/${resolution}/${nameFile}`);

        // Method mv() for place the file somewhere on your server
        file.mv(pathNew, (err) => {
            
            if (err) {
                console.log('error:',err);
                return res.status(500).json({
                    ok: false,
                    msg: 'Error al crear la imagen'

                });
            }

            // Crear Imagen
            const image = new Image(pathNew, resolution)
            const listImeges= ListImages.getInstance();
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