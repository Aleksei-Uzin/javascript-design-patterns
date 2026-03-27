# Loops

## [for...in Loop](./forInLoop.test.js)

Iterates over all **enumerable properties** of an object, including inherited ones.

- Iterates over enumerable own and inherited properties
- Use `Object.hasOwn()` to filter inherited properties
- Skips non-enumerable and Symbol properties
- Iterates array indices as strings - avoid using with arrays

> `for...of` for arrays and iterables, `for...in` is best suited for plain objects.
