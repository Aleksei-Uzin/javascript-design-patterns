class Singleton {
  static #instance: Singleton | undefined;

  publicProperty = 'Public Value';

  private constructor() {}

  static getInstance(): Singleton {
    if (!Singleton.#instance) {
      Singleton.#instance = new Singleton();
    }

    return Singleton.#instance;
  }
}

export default Singleton;
