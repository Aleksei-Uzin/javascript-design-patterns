describe('Promise.resolve()', () => {
  it('Returns the same instance when passed a native Promise', () => {
    const p = Promise.resolve(42);

    expect(Promise.resolve(p)).toBe(p);
  });

  it('Demonstrates wraps Promise subclass instances', () => {
    class CustomPromise extends Promise {}

    const p = new CustomPromise(resolve => resolve(42));

    expect(Promise.resolve(p)).not.toBe(p);
    expect(Promise.resolve(p)).resolves.toBe(42);
  });

  it('Propagates rejection when handler returns a rejected promise', async () => {
    const promise = Promise.resolve().then(() => Promise.reject(new Error('rejection')));

    await expect(promise).rejects.toThrow('rejection');
  });

  it('Demonstrates non-thenable values fulfills immediately with primitive values', async () => {
    await expect(Promise.resolve(42)).resolves.toBe(42);
    await expect(Promise.resolve('text')).resolves.toBe('text');
    await expect(Promise.resolve(null)).resolves.toBeNull();
  });

  describe('Thenable unwrapping', () => {
    it('Demonstrates recursively unwrap nested thenables', async () => {
      const nested = {
        then(resolve) {
          resolve({
            then(innerResolve) {
              innerResolve('value');
            },
          });
        },
      };

      await expect(Promise.resolve(nested)).resolves.toBe('value');
    });

    it('Demonstrates handlers always receive final values - never thenable', async () => {
      const thenable = {
        then(resolve) {
          resolve({ then: r => r('value') });
        },
      };

      const result = await Promise.resolve(thenable).then(v => v);

      expect(result).toBe('value');
      expect(typeof result).not.toBe('object');
    });

    it('Demonstrates unwrap thenable returned from then() handler', async () => {
      const result = await Promise.resolve('start').then(() => ({
        then(resolve) {
          resolve({ then: r => r('deep value') });
        },
      }));

      expect(result).toBe('deep value');
    });
  });
});
