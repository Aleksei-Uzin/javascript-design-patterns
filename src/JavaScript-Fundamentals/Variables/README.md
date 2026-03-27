# Variables

## Declaration Types Comparison

| Feature         | `var`                | `let`     | `const`   |
| --------------- | -------------------- | --------- | --------- |
| Scope           | Function             | Block     | Block     |
| Hoisting        | Yes (as `undefined`) | Yes (TDZ) | Yes (TDZ) |
| Re-declaration  | ✅ Yes               | ❌ No     | ❌ No     |
| Re-assignment   | ✅ Yes               | ✅ Yes    | ❌ No     |
| Global property | ✅ Yes               | ❌ No     | ❌ No     |

> **TDZ (Temporal Dead Zone):** The period between entering a scope and the variable declaration being evaluated. Accessing a variable in TDZ throws a `ReferenceError`.

1. [Variable Scoping](./variableScoping.test.js)
   - The key differences between `var`, `let`, and `const` scoping behavior.

2. [Let Declarations](./letDeclarations.test.js)
   - The specific syntax and behavior of `let` declarations

   - Binding list uses commas as separators, not the comma operator

   - `=` in `let` is an initializer, not an assignment operator

   - Binding list is evaluated left-to-right

   - Referencing a later binding in the same list throws a `ReferenceError`
