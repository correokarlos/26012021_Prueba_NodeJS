/*
Task
Ruta: '/api/task'
*/


const { Router } = require('express');


const { createTask, getState } = require('../controllers/task-controller');


const router = Router();


//Crear nueva tarea
router.post('/',
    createTask
);

router.get('/:taskid', 
    getState
);


/*

//Actualización de un hospital
router.put('/:id', [
        validarJWT, //Despues de este paso siempre tendre el uid del usuario logeado en la request
        check('name', 'El nombre del hospital es obligatorio').not().isEmpty(),
        validarCampos
    ],
    actualizarHospital
);

//Eliminar hospital
router.delete('/:id',
    validarJWT,
    borrarHospital
);

*/


module.exports = router;