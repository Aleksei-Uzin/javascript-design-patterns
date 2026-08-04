# Operators and expressions

Executable examples covering JavaScript operators and expression evaluation.

- [Exponentiation Operator (\*\*)](./exponentiationOperator.test.js)
  - Raises left operand to the power of the right
  - More concise alternative to `Math.pow()`
  - Unary negation requires parentheses: `-2 ** 3` throws `SyntaxError`
  - Right-associative: `2 ** 3 ** 2` evaluates as `2 ** (3 ** 2)`

- [Nullish Coalescing (??)](./nullishCoalescingOperator.test.js)
  - Returns the right operand only when the left is `null` or `undefined`.

- [Comparison Operators](./comparisonOperators.test.js)
  - `<=` is defined as `!(left > right)`, `>=` is defined as `!(left < right)`, not using equality
  - `NaN` comparisons always return `false`
  - Type coercion applies when operands have different types

- [Spread Syntax (...)](./spreadSyntax.test.js)
  - Expands iterables into individual elements, creates shallow copies of arrays and objects
  - Converts iterables (Set, Map, String) into arrays
  - In objects, later spread properties override earlier ones
  - Cannot spread non-iterables (plain objects) into arrays

- **Destructuring Assignment**

  _Array Destructuring_
  - [Nested Rest Destructuring](./Destructuring/nestedRestDestructuring.test.js) - `...[a, b]` pattern, traditional vs nested approach
  - [Array Method Extraction](./Destructuring/arrayMethodExtraction.test.js) - extracting methods using rest with object pattern `...{ pop, push }`

  _Object Destructuring_
  - [Dynamic Property Destructuring](./Destructuring/dynamicPropertyDestructuring.test.js) - computed property keys `{ [key]: value }`

- [Expression Side Effects](./expressionSideEffects.test.js)
