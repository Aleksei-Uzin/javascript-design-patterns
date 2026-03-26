# Arrays

## Static methods

1. [Array.from()](./arrayFrom.test.js)
   - **Core Conversion:** `Iterables (Map, Set, String) and Array-like objects into Arrays`

   - **Subclassing:** calling `SubClass.from()` returns an instance of `SubClass`

   - **Generic Factory Mechanics**

2. [Array.of()](./arrayOf.test.js)
   - **Core Behavior:** creates an Array regardless of the number or type of arguments

   - **Subclassing:** calling `SubClass.of()` returns an instance of `SubClass`

   - **Generic Factory Mechanics**

## Instance methods

## Universal Quantifier (∀) -> .every()

The **For All** statement. It checks if **every single** element in a set satisfies a condition.

```JavaScript
[11, 15, 20].every(x => x > 10);  // true
[].every(x => x > 10);            // true (vacuous truth)
```

## Existential Quantifier (∃) -> .some()

The **There Exists** statement. It checks if there is **at least one** element in the set that satisfies a condition.

```JavaScript
[5, 8, 12].some(x => x > 10);  // true
[].some(x => x > 10);          // false
```

### Comparison

| Method     | Math Symbol     | Requirement         | Empty Array Result |
| ---------- | --------------- | ------------------- | ------------------ |
| `.every()` | ∀ (Universal)   | Unanimous agreement | `true`             |
| `.some()`  | ∃ (Existential) | Single match        | `false`            |

## Additional Resources

- [humanwhocodes: Why does every() return true for empty arrays?](https://humanwhocodes.com/blog/2023/09/javascript-wtf-why-does-every-return-true-for-empty-array/)
