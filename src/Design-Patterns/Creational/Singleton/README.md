# Singleton

A creational pattern that ensures a class has only one instance and provides a global access point to it.

## Implementations

- [Constructor Return](./SingletonConstructorReturn.js) - stores the instance in a module-level variable. The constructor returns it on every subsequent call. [Tests](./__tests__/SingletonConstructorReturn.test.js)

- [Static Private Fields](./SingletonStaticPrivateFields.js) - stores the instance in a static private class field (`static #instance`), keeping the state fully encapsulated within the class. [Tests](./__tests__/SingletonStaticPrivateFields.test.js)

- [Tester (factory object)](./SingletonTester.js) - delegates instantiation to a separate factory object (`SingletonTester`) with a `getInstance()` method, decoupling creation logic from the class itself. [Tests](./__tests__/SingletonTester.test.js)
