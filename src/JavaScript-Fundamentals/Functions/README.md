# Functions

## Changing this

1. [Function.prototype.call()](./functionPrototypeCall.test.js)
   - invokes a function with a given `this` and individual arguments

2. [Function.prototype.apply()](./functionPrototypeApply.test.js)
   - like `call()`, but arguments are passed as an array

3. [Function.prototype.bind()](./functionPrototypeBind.test.js)
   - returns a new function with `this` and optional arguments pre-bound

4. [Function.prototype.bind() with new](./FunctionPrototypeBindWithNew.test.js)
   - `bind()` cannot change whether a function is constructable; only the target function can enforce constructor-only or function-only usage

5. [Function.prototype.call.bind behavior](./functionPrototypeCallBind.test.js)
   - transforms a method requiring a specific `this` value into a utility function that accepts `this` as a normal parameter
