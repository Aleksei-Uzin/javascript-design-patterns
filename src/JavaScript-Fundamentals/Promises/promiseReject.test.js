describe('Promise.reject()', () => {
  it('Demonstrates always returns a new rejected Promise instance', async () => {
    const rejected = Promise.reject(new Error('rejected'));

    expect(rejected).toBeInstanceOf(Promise);
    await expect(rejected).rejects.toThrow('rejected');
  });

  describe('Demonstrates no unwrapping behavior', () => {
    it('Does not reuse or unwrap promise passed as reason', async () => {
      const inner = Promise.resolve(5);
      const rejected = Promise.reject(inner);

      // Different objects
      expect(rejected).not.toBe(inner);

      // Inner promise resolves to 5
      await expect(inner).resolves.toBe(5);

      // Rejected promise rejects with the promise object,
      // NOT with the resolved value (5)
      await expect(rejected).rejects.toBe(inner);
    });

    it('Rejects with thenable as reason without calling then() method', async () => {
      const thenable = {
        then(resolve) {
          resolve('should not be unwrapped');
        },
      };

      const rejected = Promise.reject(thenable);

      await expect(rejected).rejects.toBe(thenable);
    });
  });
});
