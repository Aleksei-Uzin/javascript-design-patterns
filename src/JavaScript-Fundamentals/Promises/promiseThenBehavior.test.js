describe('Promise.then()', () => {
  it('Returns a new pending promise regardless of current promise status', async () => {
    const settled = Promise.resolve('value');
    const newPromise = settled.then(v => v);

    expect(newPromise).toBeInstanceOf(Promise);
    expect(newPromise).not.toBe(settled);

    const result = await newPromise;
    expect(result).toBe('value');
  });

  it('Fulfills with returned value or undefined', async () => {
    const promiseA = Promise.resolve().then(() => 'value');
    const promiseB = Promise.resolve().then(() => {});

    await expect(promiseA).resolves.toBe('value');
    await expect(promiseB).resolves.toBeUndefined();
  });

  it('Fulfills or rejects based on returned inner promise state', async () => {
    const fulfilled = Promise.resolve().then(() => Promise.resolve('inner value'));
    const rejected = Promise.resolve().then(() => Promise.reject(new Error('inner rejection')));

    await expect(fulfilled).resolves.toBe('inner value');
    await expect(rejected).rejects.toThrow('inner rejection');
  });

  it('Rejects with thrown error when handler throws', async () => {
    const promise = Promise.resolve().then(() => {
      throw new Error('handler error');
    });

    await expect(promise).rejects.toThrow('handler error');
  });

  it('Stays pending until inner promise resolves when handler returns pending promise', async () => {
    const events = [];

    const innerPromise = new Promise(resolve => {
      setTimeout(() => {
        events.push('inner resolved');
        resolve('pending inner value');
      }, 1);
    });

    const promise = Promise.resolve().then(() => {
      events.push('handler runs');
      return innerPromise;
    });

    const result = await promise;

    expect(result).toBe('pending inner value');
    expect(events).toEqual(['handler runs', 'inner resolved']);
  });

  it('Demonstrates floating promise: missing return fulfills with undefined', async () => {
    const fetchData = () => Promise.resolve('https://example.com');

    const promise = fetchData().then(() => {
      Promise.resolve('Response value');
    });

    await expect(promise).resolves.toBeUndefined();
  });
});
