export default class ObserverList {
  #observers = [];

  get size() {
    return this.#observers.length;
  }

  add(observer) {
    this.#observers.push(observer);
    return this;
  }

  remove(observer) {
    this.#observers = this.#observers.filter(ob => ob !== observer);
    return this;
  }

  get(index) {
    return this.#observers[index];
  }

  has(observer) {
    return this.#observers.includes(observer);
  }

  forEach(callback) {
    this.#observers.forEach(callback);
  }
}
