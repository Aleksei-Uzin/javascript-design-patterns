import Subject from './core/Subject.js';

export default class TaskSubject extends Subject {
  constructor(element) {
    super();
    this.element = element;
    this.element.onclick = () => {
      this.notify(this.element.checked);
    };
  }
}
