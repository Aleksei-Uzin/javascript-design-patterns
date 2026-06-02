import ObserverList from './ObserverList.js';

export default class Subject {
  #observers = new ObserverList();

  addObserver(observer) {
    this.#observers.add(observer);
  }

  removeObserver(observer) {
    this.#observers.remove(observer);
  }

  hasObserver(observer) {
    return this.#observers.has(observer);
  }

  notify(context) {
    this.#observers.forEach(observer => observer.update(context));
  }
}
