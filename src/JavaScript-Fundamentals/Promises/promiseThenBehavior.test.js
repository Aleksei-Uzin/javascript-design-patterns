describe('Promise.then()', () => {
  it('Return a new pending promise immediately regardless of current promise status', async () => {
    const settled = Promise.resolve('value');
    const newPromise = settled.then(v => v);

    expect(newPromise).toBeInstanceOf(Promise);
    expect(newPromise).not.toBe(settled);

    const result = await newPromise;
    expect(result).toBe('value');
  });

  it('Fulfills with returned value when handler returns a value', async () => {
    const result = await Promise.resolve().then(() => 'returned value');
    expect(result).toBe('returned value');
  });

  it('Fulfills with undefined when handler returns nothing', async () => {
    const result = await Promise.resolve().then(() => {});
    expect(result).toBeUndefined();
  });

  it('Rejects with thrown error when handler throws', async () => {
    const promise = Promise.resolve().then(() => {
      throw new Error('handler error');
    });

    await expect(promise).rejects.toThrow('handler error');
  });

  it('Fulfills with inner promise value when handler returns fulfilled promise', async () => {
    const result = await Promise.resolve().then(() => Promise.resolve('inner value'));
    expect(result).toBe('inner value');
  });

  it('Rejects with inner promise reason when handler returns rejected promise', async () => {
    const promise = Promise.resolve().then(() => Promise.reject(new Error('inner rejection')));
    await expect(promise).rejects.toThrow('inner rejection');
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

  it('Demonstrates floating promise: missing return (fulfills with undefined)', async () => {
    const fetchData = () => Promise.resolve('https://example.com');

    const promise = fetchData().then(() => {
      Promise.resolve('Response value');
    });

    const result = await promise;
    expect(result).toBeUndefined();
  });
});
