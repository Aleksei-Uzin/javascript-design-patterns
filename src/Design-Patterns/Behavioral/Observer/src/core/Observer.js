export default class Observer {
  #element;

  constructor(element) {
    this.#element = element;
  }

  get element() {
    return this.#element;
  }

  update() {
    throw new Error(`${this.constructor.name} must implement update()`);
  }
}
