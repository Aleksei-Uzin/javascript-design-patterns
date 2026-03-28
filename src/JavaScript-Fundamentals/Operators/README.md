# Operators

1. [Exponentiation Operator](./exponentiationOperator.test.js)
   - The `**` operator raises the left operand to the power of the right operand.
   - More concise alternative to `Math.pow()`
   - Unary negation requires parentheses: `-2 ** 3` throws `SyntaxError`
   - Right-associative: `2 ** 3 ** 2` evaluates as `2 ** (3 ** 2)`

2. [Nullish Coalescing](./nullishCoalescingOperator.test.js)
   - The `??` operator returns the right operand only when the left is `null` or `undefined`.

3. [Comparison Operators](./comparisonOperators.test.js)
   - `<=` is defined as `!(left > right)`, not using equality
   - `>=` is defined as `!(left < right)`, not using equality
   - `NaN` comparisons always return `false`
   - Type coercion applies when operands have different types

4. [Expression Side Effects](./expressionSideEffects.test.js)

5. [Spread Syntax](./spreadSyntax.test.js)
   - The `...` operator expands iterables into individual elements.
   - Creates shallow copies of arrays and objects
   - Converts iterables (Set, Map, String) into arrays
   - In objects, later spread properties override earlier ones
   - Cannot spread non-iterables (plain objects) into arrays
