describe('TypedArray vs Regular Arrays', () => {
  describe('Type and Inheritance', () => {
    it('Demonstrates that a typed array is not a regular Array', () => {
      const typedArray = new Uint8Array([10, 20, 30]);

      expect(Array.isArray(typedArray)).toBe(false);
      expect(typedArray).not.toBeInstanceOf(Array);
      expect(typedArray).toBeInstanceOf(Uint8Array);
    });
  });

  describe('Element Access', () => {
    it('Supports index access but does not allow adding elements', () => {
      const typedArray = new Uint8Array([10, 20, 'hi']);

      expect(typedArray[0]).toBe(10);
      expect(typedArray[1]).toBe(20);
      // Zero is used in place of any invalid values
      expect(typedArray[2]).toBe(0);

      typedArray[10] = 100;

      expect(typedArray[10]).toBeUndefined();
      expect(typedArray.length).toBe(3);
    });

    it('Enforces the Uint8 value range', () => {
      const typedArray = new Uint8Array(1);

      typedArray[0] = 255;
      expect(typedArray[0]).toBe(255);

      typedArray[0] = 256;
      expect(typedArray[0]).toBe(0);

      typedArray[0] = -1;
      expect(typedArray[0]).toBe(255);
    });
  });

  it('Demonstrates that a typed array has a fixed length', () => {
    const typedArray = new Uint8Array(3);

    expect(() => {
      typedArray.length = 5;
    }).toThrow(TypeError);

    expect(typedArray.length).toBe(3);
  });
});
