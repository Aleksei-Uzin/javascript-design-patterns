import Observer from '../core/Observer.js';

export default class SpanObserver extends Observer {
  update(isChecked) {
    if (isChecked) {
      this.element.classList.add('completed');
    } else {
      this.element.classList.remove('completed');
    }
  }
}
