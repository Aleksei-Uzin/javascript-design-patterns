/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-throw-literal */

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
      const promiseB = Promise.reject('Rejected').finally(() => 'ignored');

      await expect(promiseA).resolves.toBe('value');
      await expect(promiseB).rejects.toBe('Rejected');
    });

    it('Passes original fulfillment value or rejection reason when callback returns a fulfilled promise', async () => {
      const promiseA = Promise.resolve('value').finally(() => Promise.resolve('ignored'));
      const promiseB = Promise.reject('Rejected').finally(() => Promise.resolve('ignored'));

      await expect(promiseA).resolves.toBe('value');
      await expect(promiseB).rejects.toBe('Rejected');
    });
  });

  describe('Demonstrates override original value', () => {
    it('Rejects with thrown error when callback throws', async () => {
      const promiseA = Promise.resolve(55).finally(() => {
        throw 'Interrupted';
      });
      const promiseB = Promise.reject(55).finally(() => {
        throw 'Interrupted';
      });

      await expect(promiseA).rejects.toBe('Interrupted');
      await expect(promiseB).rejects.toBe('Interrupted');
    });

    it('Rejects with reason when callback returns rejected promise', async () => {
      const promiseA = Promise.resolve(55).finally(() => Promise.reject('Rejected'));
      const promiseB = Promise.reject(55).finally(() => Promise.reject('Rejected'));

      await expect(promiseA).rejects.toBe('Rejected');
      await expect(promiseB).rejects.toBe('Rejected');
    });
  });
});
