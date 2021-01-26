
class Task {

   constructor(path, resolution) {

       this.id = incrementId()
       this.path = path;
       this.resolution = resolution;

       this.timeStanpUpdate = new Date();
       this.timeStanp = new Date();
       this.processing  = false;
       // Prueba git

   }

   setTimeStampUpdate() {

    this.timeStanpUpdate = new Date();

   }


   setProcessing(processing) {

    this.processing = processing;

   }

   isProcessing() {
       return this.processing;
   }

 



   static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }




}






module.exports = {
    Task
}





