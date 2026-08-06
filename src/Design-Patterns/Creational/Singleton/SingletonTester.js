class Singleton {
  constructor(options = {}) {
    this.name = 'Singleton';
    this.pointX = options.pointX ?? 0;
    this.pointY = options.pointY ?? 10;
  }
}

let instance;

const SingletonTester = {
  name: 'SingletonTester',
  getInstance(options) {
    if (!instance) {
      instance = new Singleton(options);
    }

    return instance;
  },
};

export default SingletonTester;
