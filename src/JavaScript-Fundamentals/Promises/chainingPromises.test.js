describe('Chaining Promises', () => {
  it('Demonstrates executor runs synchronously while then() callbacks run asynchronously', async () => {
    const events = [];

    events.push('1. Start of script');

    const promise = new Promise(resolve => {
      events.push('2. Promise executor runs immediately/synchronously');

      resolve('DONE');
    });

    events.push('3. After Promise creation - script continues synchronously');

    const nextPromise = promise.then(value => {
      events.push(`5. Invoked when previous promise is fulfilled with: ${value}`);

      return 'NEXT VALUE';
    });

    events.push('4. End of script');

    // At this moment:
    // - the executor HAS already run
    // - the then callback has NOT run yet
    expect(events).toEqual([
      '1. Start of script',
      '2. Promise executor runs immediately/synchronously',
      '3. After Promise creation - script continues synchronously',
      '4. End of script',
    ]);

    const finalValue = await nextPromise;

    // NOW the then callback has executed.
    expect(events).toEqual([
      '1. Start of script',
      '2. Promise executor runs immediately/synchronously',
      '3. After Promise creation - script continues synchronously',
      '4. End of script',
      '5. Invoked when previous promise is fulfilled with: DONE',
    ]);

    expect(finalValue).toBe('NEXT VALUE');
  });
});
