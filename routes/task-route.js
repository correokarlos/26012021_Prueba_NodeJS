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

// Preguntar por el estado de una tarea
router.get('/:taskid', 
    getState
);



module.exports = router;