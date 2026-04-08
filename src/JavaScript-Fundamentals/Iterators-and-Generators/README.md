# Iterators and Generators

## Iterables and Iterators

1. [Iterables and Iterators](./iterablesAndIterators.test.js)
   - `Symbol.iterator` and the manual `next()` logic that powers `for...of`
   - **Custom Iterables**: Creating objects that can be iterated over
   - **Lazy Evaluation**: Generating values on-demand, useful for infinite sequences

2. [Generator Control Flow](./generatorControlFlow.test.js)
   - Passing arguments into `next()` to update internal generator state
   - **Lifecycle Management**: Using `throw()` to inject errors and `return()` to force early termination
   - **Return Value**: Handling values returned by generators

3. [Collection‑like behavior](./collectionLikeIterable.test.js)
   - Should behave like data: **restartable**, **independent**, **repeatable**
   - Return a new iterator each time

4. [Process‑like behavior](./processLikeIterator.test.js)
   - Should behave like machines: **stateful**, **continuous**, **non‑restartable**
   - Return this

### Collection vs Process Iterables

| Behavior                     | Collection‑like    | Process‑like                  |
| ---------------------------- | ------------------ | ----------------------------- |
| Restartable                  | ✅ Yes             | ❌ No                         |
| New iterator each time       | ✅ Yes             | ❌ No                         |
| Independent consumers        | ✅ Yes             | ❌ No                         |
| Suitable for                 | Arrays, Sets, Maps | Generators, streams, counters |
| `[Symbol.iterator]()` return | A new iterator     | `this`                        |

## Use Cases

1. [Cleanup with finally](./cleanupWithFinally.test.js)

2. [Generator as Resettable State Machine](./resettableStateMachine.test.js)
