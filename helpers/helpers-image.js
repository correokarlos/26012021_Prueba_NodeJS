const Image = require('../class/image');
const ListImages = require('../class/list-image');

// Importar módulo para gestionar los archivos
const fs = require('fs');
// Importar módula para construir un path completo
const pathCompleto = require('path');
// Importar módulo para asignar un nombre de archivo único (binario)
const uuidv4 = require('uuid');



fs = require('fs')
fs.readFile('folder1/image.png', function (err, data) {
    if (err) throw err;
    fs.writeFile('folder2/image.png', data, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
});




const generateVariant = async (pathOrigin, resolution) => {

    try {

        // Apuntar al archivo según path
        fs.readFile(pathOrigin, function (err, data) {
            if (err) return false;

            //  Crear un nuevo archivo según resolución
            

            // Obtener la extensión del archivo original
            const nameParts = file.name.split('.');
            const nameOrigin = nameParts[0]; // Sabemos que el nombre del fichero no tiene '.' 
            const extension = nameParts[nameParts.length - 1];


            // Generar un nombre para la nueba imagen aleatoria y único
            const nameFile = `${ uuidv4() }.${ extension }`;

            //Construir el path completo del archivo a cargar
            const pathNew = pathCompleto.join(__dirname, `../output/${nameOrigin}/${resolution}/${nameFile}`);


            fs.writeFile(pathNew, data, function (err) {
                if (err) return false;
            });


            // Crear un nuevo objeto de Imagen
            const image = new Image(pathNew, resolution)
            // Añadirmo a la lista de imagenes
            const listImeges = ListImages.getInstance();
            listImeges.insertImage(image);

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