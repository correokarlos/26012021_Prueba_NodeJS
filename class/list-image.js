
const Image = require('./image');

listImages[Image] = [];

  
class ListImages {

  constructor() {

    listImages = [];


  }
 
  insertImage(image) {

   this.listImages.push(image);

  }


  getImageById(id) {
      return this.listImages.find(image => image.id === id);
  }

  deleteImage(id) {

      const imageToDelete= this.getImageByPath(id);
      this.listImages = this.listImages.filter(image => {
    return image.id !== id;  //Trabajo por referecnia. Regreso tosdos aquellos usuarios con un id distinto al que se esta borrando
  });

  }

  static getInstance() {
    return this.listImages || (this.listImages = new this()); 

  }
 
 
    
    
 
 }
 
 module.exports = {
  ListImages
 }
 




