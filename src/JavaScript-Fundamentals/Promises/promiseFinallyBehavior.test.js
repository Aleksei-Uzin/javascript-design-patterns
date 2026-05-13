describe('Promise.finally()', () => {
  it('Returns a new pending promise regardless of current promise status', () => {
    const settled = Promise.resolve('value');
    const newPromise = settled.finally(() => {});

    expect(newPromise).toBeInstanceOf(Promise);
    expect(newPromise).not.toBe(settled);
  });

  it('Runs after then() in the promise chain', async () => {
    const events = [];

    const promise = Promise.resolve('value')
      .then(v => {
        events.push('then');
        return v;
      })
      .finally(() => {
        events.push('finally');
      });

    const result = await promise;

    expect(result).toBe('value');
    expect(events).toEqual(['then', 'finally']);
  });

  describe('Demonstrates ignore callback return value', () => {
    it('Passes original fulfillment value or rejection reason when callback returns a plain value', async () => {
      const promiseA = Promise.resolve('value').finally(() => 'ignored');
      const promiseB = Promise.reject(new Error('Rejected')).finally(() => 'ignored');

      await expect(promiseA).resolves.toBe('value');
      await expect(promiseB).rejects.toThrow('Rejected');
    });

    it('Passes original fulfillment value or rejection reason when callback returns a fulfilled promise', async () => {
      const rejected = Promise.reject(new Error('Rejected'));
      const promiseA = Promise.resolve('value').finally(() => Promise.resolve('ignored'));
      const promiseB = rejected.finally(() => Promise.resolve('ignored'));

      await expect(promiseA).resolves.toBe('value');
      await expect(promiseB).rejects.toThrow('Rejected');
    });
  });

  describe('Demonstrates override original value', () => {
    it('Rejects with thrown error when callback throws', async () => {
      const promiseA = Promise.resolve(55).finally(() => {
        throw new Error('Rejected');
      });
      const promiseB = Promise.reject(new Error(55)).finally(() => {
        throw new Error('Rejected');
      });

      await expect(promiseA).rejects.toThrow('Rejected');
      await expect(promiseB).rejects.toThrow('Rejected');
    });

    it('Rejects with reason when callback returns rejected promise', async () => {
      const rejected = Promise.reject(new Error(55));
      const promiseA = Promise.resolve(55).finally(() => Promise.reject(new Error('Rejected')));
      const promiseB = rejected.finally(() => Promise.reject(new Error('Rejected')));

      await expect(promiseA).rejects.toThrow('Rejected');
      await expect(promiseB).rejects.toThrow('Rejected');
    });
  });
});
