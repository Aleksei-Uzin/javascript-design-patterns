describe('Array.of()', () => {
  it('Should create a new array with the given arguments as elements', () => {
    expect(Array.of()).toEqual([]);
    expect(Array.of(1)).toEqual([1]);
    expect(Array.of(1, 2)).toEqual([1, 2]);
    expect(Array.of(1, 2, 3)).toEqual([1, 2, 3]);
  });

  it('Should return a CustomArray instance that extends Array', () => {
    class CustomArray extends Array {}

    const arr = CustomArray.of(1, 2, 3);

    // CustomArray inherits from Array, so it is an instance of both
    expect(arr).toBeInstanceOf(CustomArray);
    expect(arr).toBeInstanceOf(Array);
    expect(Array.isArray(arr)).toBe(true);
    expect(arr).toEqual([1, 2, 3]);
  });

  it('Should work as a generic factory for non-Array constructor functions', () => {
    function NotArray(length) {
      this.initialLength = length;
    }

    const result = Array.of.call(NotArray, 'apple', 'banana');

    expect(result).toEqual({ 0: 'apple', 1: 'banana', initialLength: 2, length: 2 });
    expect(result).toBeInstanceOf(NotArray);
  });

  it('Should fall back to the standard Array constructor if "this" is not a constructor', () => {
    const result = Array.of.call({}, 'apple', 'banana');

    expect(Array.isArray(result)).toBe(true);
    expect(result).toEqual(['apple', 'banana']);
  });
});
