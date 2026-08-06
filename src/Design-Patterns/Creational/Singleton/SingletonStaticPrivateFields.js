class Singleton {
  static #instance;

  #privateVariable = { name: 'Private Value' };

  #privateMethod() {
    return this.#privateVariable;
  }

  constructor() {
    if (!Singleton.#instance) {
      Singleton.#instance = this;
    }

    this.publicProperty = 'Public Value';
    // eslint-disable-next-line no-constructor-return
    return Singleton.#instance;
  }

  publicMethod() {
    return `Public Method accessing ${this.#privateMethod().name}`;
  }
}

export default Singleton;
