# Strings

1. [Unicode String Handling](./unicodeStringHandling.test.js)
   - The differences between code unit and code point based string operations

## Unicode Concepts

| Concept            | Description                               | Example                           |
| ------------------ | ----------------------------------------- | --------------------------------- |
| **Code Unit**      | A single 16-bit UTF-16 unit               | `'🚀'.charCodeAt(0)` → `0xD83D`   |
| **Code Point**     | A unique Unicode character value          | `'🚀'.codePointAt(0)` → `0x1F680` |
| **Surrogate Pair** | Two code units representing one character | `'🚀'.length` → `2`               |

## Code Unit vs Code Point Methods

| Method              | Operates On | Unicode Safe |
| ------------------- | ----------- | ------------ |
| `str.length`        | Code units  | ❌ No        |
| `str[index]`        | Code units  | ❌ No        |
| `str.split('')`     | Code units  | ❌ No        |
| `str.charCodeAt()`  | Code units  | ❌ No        |
| `[...str]`          | Code points | ✅ Yes       |
| `Array.from(str)`   | Code points | ✅ Yes       |
| `str.codePointAt()` | Code points | ✅ Yes       |
