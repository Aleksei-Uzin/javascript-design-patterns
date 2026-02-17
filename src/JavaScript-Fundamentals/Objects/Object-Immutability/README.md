# Object Immutability in JavaScript

## Cases that Lead to Property Access Errors

### 1. Own Property (Read-Only)

Since `writable` is `false`, any attempt to change the value results in a `TypeError` in strict mode.

### 2. Inherited Property (Shadowing Blocked)

A child object cannot shadow a **read-only property** via simple assignment.

The only way to override this inherited restriction is using `Object.defineProperty`.

### 3. Non-Extensible Object

`Object.preventExtensions()` blocks new properties while still allowing modifications to existing properties.

### 4. Inherited Getter (No Setter)

Properties with only a getter behave like **read-only properties**.

## Comparison Table

| Action                 | preventExtensions | seal   | freeze |
| ---------------------- | ----------------- | ------ | ------ |
| Add new properties     | ❌ No             | ❌ No  | ❌ No  |
| Delete properties      | ✅ Yes            | ❌ No  | ❌ No  |
| Modify values          | ✅ Yes            | ✅ Yes | ❌ No  |
| Reconfigure properties | ✅ Yes            | ❌ No  | ❌ No  |

### Immutability Methods

1. **[Object.preventExtensions()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/preventExtensions)**: The lightest lock. Only prevents adding new properties.

2. **[Object.seal()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)**: Mid-level security. Prevents adding or removing properties, but allows modifying existing property values.

3. **[Object.freeze()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)**: Maximum security level. Makes every property read-only. Once frozen, the object is essentially immutable.
