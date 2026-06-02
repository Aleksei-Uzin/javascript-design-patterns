import Observer from '../core/Observer.js';

export default class CheckboxObserver extends Observer {
  update(value) {
    this.element.checked = value;
  }
}
