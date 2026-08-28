describe('.set() and .subarray()', () => {
  describe('.set()', () => {
    it('Demonstrates copy values into an existing typed array', () => {
      const source = new Uint8Array([10, 20, 30]);
      const target = new Uint8Array(3);

      target.set(source);

      expect(target).toEqual(new Uint8Array([10, 20, 30]));
    });

    it('Demonstrates copy values starting at the specified offset', () => {
      const source = new Uint8Array([10, 20]);
      const target = new Uint8Array(4);

      target.set(source, 1);

      expect(target).toEqual(new Uint8Array([0, 10, 20, 0]));
    });
  });

  describe('.subarray()', () => {
    it('Creates a view over part of the typed array', () => {
      const typedArray = new Uint8Array([10, 20, 30, 40]);
      const subset = typedArray.subarray(1, 3);

      expect(subset).toEqual(new Uint8Array([20, 30]));
    });

    it('Shares the underlying memory with the original array', () => {
      const typedArray = new Uint8Array([10, 20, 30, 40]);
      const subset = typedArray.subarray(1, 3);

      subset[0] = 99;

      expect(typedArray).toEqual(new Uint8Array([10, 99, 30, 40]));
    });
  });
});
