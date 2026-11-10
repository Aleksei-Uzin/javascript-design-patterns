class Singleton {
  constructor(options = {}) {
    this.name = 'SingletonCoords';
    this.pointX = options.pointX ?? 0;
    this.pointY = options.pointY ?? 10;
  }
}

let instance;

const SingletonFactory = {
  getInstance(initialOptions) {
    if (!instance) {
      instance = new Singleton(initialOptions);
    }

    return instance;
  },
};

export default SingletonFactory;
