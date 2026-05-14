# Promises

## Contents

### Concepts

- [Promise Execution Order](./promiseExecutionOrder.test.js) - executor vs `then()` scheduling
- [Resolved vs Fulfilled](./resolvedVsFulfilled.test.js) - locked-in vs completed
- [Async/Await Concurrency](./asyncAwaitConcurrency.test.js) - microtasks vs macrotasks

### Instance Methods

- [Promise.then()](./promiseThenBehavior.test.js) - handler return behaviors
- [Promise.then() Branching](./promiseThenBranching.test.js) - multiple handlers on same promise
- [Promise.finally()](./promiseFinallyBehavior.test.js) - cleanup and value pass-through

### Static Methods

- [Promise.resolve()](./promiseResolve.test.js) - thenable unwrapping and identity behavior
- [Promise.reject()](./promiseReject.test.js) - no unwrapping, always new instance

## Additional Resources

- [web.dev: JavaScript Promises: an introduction](https://web.dev/articles/promises?hl=en)
- [MDN: States and Fates](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md)
- [Callback Hell](https://callbackhell.com/)
