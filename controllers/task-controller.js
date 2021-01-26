/*Colección de controladores para la gestión de hospitales 
(funciones exportadas)*/

const { response } = require('express');

const Task = require('../class/task');
const ListTasks = require('../class/list-tasks');
const { generateVariant } = require('../helpers/helpers-image');


const createTask = async(req, res = response) => {

    
    const path = req.path;
    const resolution  = req.resolution;


    try {

    const task = new Task(path, resolution);

    task.processImage(true);
    const listTask= ListTasks.getInstance();

    listTask.insertTask(task);

    if (await generateVariant(path, this.resolution)) {

    task.processImage(false);

    listTask.deleteTask(task.id);
    





    }
    else {

        res.json({
            ok: false,
            msg: 'Error inesperado'

        });

    }

  


    

        task.processImage();

        

        res.json({
            ok: true,
            task

        });


    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'

        });

    }




};


const getState = async(req, res = response) => {

    const id = req.id;

    const state = listTasks.getState(id);








    res.json({
        ok: true,
        state

    });

};




module.exports = {
    createTask,
    getState,

}