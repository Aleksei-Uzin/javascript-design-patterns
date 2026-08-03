# Objects

## Property Attributes

### Common Attributes

- [\[\[Enumerable\]\]](./Property-Attributes/enumerableAttribute.test.js)
- [\[\[Configurable\]\]](./Property-Attributes/configurableAttribute.test.js)

### Data Property Attributes

- [\[\[Value\]\]](./Property-Attributes/dataPropertyAttributes.test.js)
- [\[\[Writable\]\]](./Property-Attributes/dataPropertyAttributes.test.js)

| Attribute      | Applies to      | Description                                                                | Default     |
| -------------- | --------------- | -------------------------------------------------------------------------- | ----------- |
| `configurable` | Data & Accessor | If `false`, the property cannot be deleted or its descriptor changed       | `false`     |
| `enumerable`   | Data & Accessor | If `true`, the property appears in `for...in` loops and `Object.keys()`    | `false`     |
| `value`        | Data only       | The value associated with the property                                     | `undefined` |
| `writable`     | Data only       | If `false`, the value cannot be changed via assignment                     | `false`     |
| `get`          | Accessor only   | A function that serves as a getter; its return value is used as the value  | `undefined` |
| `set`          | Accessor only   | A function that serves as a setter; receives the new value as its argument | `undefined` |

> Mixing `value`/`writable` with `get`/`set` throws a `TypeError`.

---

1. [Object Immutability](./Object-Immutability/)

## Resources

- [The S.O.L.I.D Principles in Pictures](https://medium.com/backticks-tildes/the-s-o-l-i-d-principles-in-pictures-b34ce2f1e898)
