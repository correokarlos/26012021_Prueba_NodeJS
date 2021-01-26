class Image {

  constructor(path, resolution) {

    this.id = incrementId()
    this.path = path;

    this.resolution = resolution;

  }


  static incrementId() {
    if (!this.latestId) this.latestId = 1;
    else this.latestId++;
    return this.latestId;
  }

}

module.exports = {
  Image
}