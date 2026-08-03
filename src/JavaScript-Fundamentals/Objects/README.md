# Objects

## Property Attributes

| Attribute                                                             | Applies to      | Description                                                                | Default     |
| --------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------- | ----------- |
| [`configurable`](./Property-Attributes/configurableAttribute.test.js) | Data & Accessor | If `false`, the property cannot be deleted or its descriptor changed       | `false`     |
| [`enumerable`](./Property-Attributes/enumerableAttribute.test.js)     | Data & Accessor | If `true`, the property appears in `for...in` loops and `Object.keys()`    | `false`     |
| [`value`](./Property-Attributes/dataPropertyAttributes.test.js)       | Data only       | The value associated with the property                                     | `undefined` |
| [`writable`](./Property-Attributes/dataPropertyAttributes.test.js)    | Data only       | If `false`, the value cannot be changed via assignment                     | `false`     |
| `get`                                                                 | Accessor only   | A function that serves as a getter; its return value is used as the value  | `undefined` |
| `set`                                                                 | Accessor only   | A function that serves as a setter; receives the new value as its argument | `undefined` |

> If a descriptor has none of `value`, `writable`, `get`, or `set`, it is treated as a data descriptor. Mixing `value`/`writable` with `get`/`set` throws a `TypeError`.

---

1. [Object Immutability](./Object-Immutability/)
