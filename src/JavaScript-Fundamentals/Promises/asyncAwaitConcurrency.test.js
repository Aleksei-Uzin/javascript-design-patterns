describe('Async/Await Concurrency & Scheduling', () => {
  it('Demonstrates await pauses only the current function', async () => {
    const result = [];

    async function A() {
      result.push('A1');
      // eslint-disable-next-line no-promise-executor-return
      await new Promise(resolve => setTimeout(resolve, 0)); // Macrotask
      result.push('A2');
    }

    async function B() {
      result.push('B1');
      await Promise.resolve(); // Microtask
      result.push('B2');
    }

    const promiseA = A();
    const promiseB = B();
    result.push('sync');

    await Promise.all([promiseA, promiseB]);

    expect(result).toEqual(['A1', 'B1', 'sync', 'B2', 'A2']);
  });

  it('Demonstrates Microtasks run before Macrotasks', async () => {
    const result = [];

    Promise.resolve().then(() => result.push('microtask'));

    setTimeout(() => result.push('macrotask'), 0);

    result.push('sync');

    // eslint-disable-next-line no-promise-executor-return
    await new Promise(resolve => setTimeout(resolve, 0));

    expect(result).toEqual(['sync', 'microtask', 'macrotask']);
  });
});
