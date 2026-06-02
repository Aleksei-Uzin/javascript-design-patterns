export default function createObservedElement(tagName, Observer, subject, setup) {
  const element = document.createElement(tagName);
  const observer = new Observer(element);

  if (setup) {
    setup(element);
  }

  subject.addObserver(observer);

  return element;
}
