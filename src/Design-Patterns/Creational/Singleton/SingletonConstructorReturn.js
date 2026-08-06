let instance;

const privateVariable = { name: 'Private Value' };

const privateMethod = () => privateVariable;

class Singleton {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.publicProperty = 'Public Value';
    // eslint-disable-next-line no-constructor-return
    return instance;
  }

  // eslint-disable-next-line class-methods-use-this
  publicMethod() {
    return `Public Method accessing ${privateMethod().name}`;
  }
}

export default Singleton;
