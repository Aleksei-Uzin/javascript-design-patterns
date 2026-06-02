# Observer Pattern

A JavaScript implementation of the Observer design pattern.

## Project Structure

| Component / File                                         | Type              | Responsibility                                    |
| -------------------------------------------------------- | ----------------- | ------------------------------------------------- |
| [Subject](./src/core/Subject.js)                         | Abstract          | Manages observers and dispatches notifications    |
| [Observer](./src/core/Observer.js)                       | Abstract          | Defines the update interface                      |
| [ObserverList](./src/core/ObserverList.js)               | Utility           | Stores registered observers                       |
| [Task Subject](./src/TaskSubject.js)                     | Concrete Subject  | Maintains state and notifies observers of changes |
| [Checkbox Observer](./src/observers/CheckboxObserver.js) | Concrete Observer | Updates a checkbox when notified                  |
| [Span Observer](./src/observers/SpanObserver.js)         | Concrete Observer | Updates a span element when notified              |

## Resources

- [geeksforgeeks: Observer Method Design Pattern in Java](https://www.geeksforgeeks.org/system-design/observer-method-design-pattern-in-java/)
- [Refactoring Guru: Observer](https://refactoring.guru/design-patterns/observer)
