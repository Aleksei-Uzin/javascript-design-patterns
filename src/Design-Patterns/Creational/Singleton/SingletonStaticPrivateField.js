class Singleton {
  static #instance;

  static #token = Symbol('Singleton construction token');

  constructor(constructionToken) {
    if (constructionToken !== Singleton.#token) {
      throw new TypeError('Use Singleton.getInstance()');
    }

    this.publicProperty = 'Public Value';
  }

  static getInstance() {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton(Singleton.#token);
    }

    return Singleton.#instance;
  }
}

export default Singleton;
