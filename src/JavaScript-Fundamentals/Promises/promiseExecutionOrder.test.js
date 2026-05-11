describe('Promise Execution Order', () => {
  it('Demonstrates executor runs synchronously while then() callbacks are queued as microtasks', async () => {
    const events = [];

    events.push('1. script starts');

    const promise = new Promise(resolve => {
      events.push('2. executor runs synchronously');
      resolve('DONE');
    });

    events.push('3. script continues synchronously');

    const nextPromise = promise.then(value => {
      events.push(`5. then() callback runs with: ${value}`);
      return 'NEXT VALUE';
    });

    events.push('4. end of script');

    // Synchronous phase complete:
    // - executor HAS run - synchronous
    // - then() callback has NOT run yet - queued as microtask
    expect(events).toEqual([
      '1. script starts',
      '2. executor runs synchronously',
      '3. script continues synchronously',
      '4. end of script',
    ]);

    const finalValue = await nextPromise;

    // Microtask phase complete: then() callback has now executed
    expect(events).toEqual([
      '1. script starts',
      '2. executor runs synchronously',
      '3. script continues synchronously',
      '4. end of script',
      '5. then() callback runs with: DONE',
    ]);

    expect(finalValue).toBe('NEXT VALUE');
  });
});
