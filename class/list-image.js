const Image = require('./image');


class ListImages {

  constructor() {

    listImages = [];

  }

  // Gestión única instancia de la clase 
  static getInstance() {
    return this.listImages || (this.listImages = new this());

  }

  insertImage(image) {

    this.listImages.push(image);

  }


  getImageById(id) {

    return this.listImages.find(image => image.id === id);

  }

  deleteImage(id) {

    const imageToDelete = this.getImageByPath(id);
    this.listImages = this.listImages.filter(image => {
      return image.id !== imageToDelete.id; //Trabajo por refereciia. Regresa todos las tareas con un id distinto.
    });

  }



}

module.exports = {
  ListImages
}