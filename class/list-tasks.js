const Task = require('./task');


class ListTasks {

  constructor() {

    listTasks = [];

  }
  

  // Gestión única instacicia de la lsita de tareas
  static getInstance() {
    return this.listTasks || (this.listTasks = new this());

  }

  insertTask(task) {

    this.listTasks.push(task);

  }


  getTaskById(id) {
    return this.listTasks.find(task => task.id === id);
  }

  getState(id) {

    return getTaskById(id).isProcessing();

  }


  deleteTask(id) {

    const taskToDelete = this.getTaskById(id);
    this.listTasks = this.listTasks.filter(task => {
      return task.id !== taskToDelete.id; 
    });

  }

}

module.exports = {
  ListTasks
}