# Singleton

A creational design pattern that restricts a class to a single instance and provides a global access point to that instance.

## Trade-offs and limitations

- Global mutable state.
- Hidden dependencies.
- Difficult unit testing and isolation.
- Tight coupling to a particular instance.
- Initialization and lifecycle complexity.
- Limited flexibility when multiple instances become necessary.

## Implementations

- [Factory Object](./SingletonFactory.js) - delegates instantiation to a separate factory object `SingletonFactory` with a `getInstance()` method. [Tests](./__tests__/SingletonFactory.test.js)

- [Static Private Field](./SingletonStaticPrivateField.js) - stores the instance in a static private class field `static #instance`, keeping the state fully encapsulated within the class. [Tests](./__tests__/SingletonStaticPrivateField.test.js)

- [TypeScript version](./SingletonTypeScript.ts) - uses a private constructor and a static `getInstance()` method to expose instance. [Tests](./SingletonTypeScript.ts)

## Resources

- [Refactoring.Guru](https://refactoring.guru/design-patterns/singleton/typescript/example) - demonstrates a Singleton implementation using a getter `Singleton.instance` to provide access to the instance.
