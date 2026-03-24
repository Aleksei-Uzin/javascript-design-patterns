describe('Array.from()', () => {
  it('Should create a new array from iterables', () => {
    const set = new Set(['a', 'a', 'b', 'c']);
    const map = new Map([
      ['a', 1],
      ['b', 2],
    ]);

    expect(Array.from(set)).toEqual(['a', 'b', 'c']);
    expect(Array.from(map)).toEqual([
      ['a', 1],
      ['b', 2],
    ]);
    expect(Array.from('Hello')).toEqual(['H', 'e', 'l', 'l', 'o']);
  });

  it('Should create a new array from an array-like object', () => {
    const arrLike = { length: 3, 0: 'a', 2: 'c' };

    expect(Array.from(arrLike)).toEqual(['a', undefined, 'c']);
  });

  it('Should return a CustomArray instance that extends Array', () => {
    class CustomArray extends Array {}

    const arr = CustomArray.from([1, 2, 3]);

    // CustomArray inherits from Array, so it is an instance of both
    expect(arr).toBeInstanceOf(CustomArray);
    expect(arr).toBeInstanceOf(Array);
    expect(Array.isArray(arr)).toBe(true);
    expect(arr).toEqual([1, 2, 3]);
  });

  describe('Generic Factory Mechanics', () => {
    function CustomStore(length) {
      this.receivedLength = length;
    }

    it('Should work as a generic factory for array-like objects', () => {
      const fromArrayLike = Array.from.call(CustomStore, { length: 5 });

      expect(fromArrayLike).toBeInstanceOf(CustomStore);
      expect(fromArrayLike.receivedLength).toBe(5);
    });

    it('Should call the constructor with NO arguments for iterable objects', () => {
      const fromIterable = Array.from.call(CustomStore, new Set(['apple', 'banana']));

      expect(fromIterable).toBeInstanceOf(CustomStore);
      expect(fromIterable).toEqual({
        0: 'apple',
        1: 'banana',
        receivedLength: undefined,
        length: 2,
      });
    });

    it('Should fall back to the standard Array constructor if "this" is not a function', () => {
      const result = Array.from.call({}, ['apple', 'banana']);

      expect(Array.isArray(result)).toBe(true);
      expect(result).toEqual(['apple', 'banana']);
    });
  });
});
