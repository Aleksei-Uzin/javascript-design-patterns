describe('Function.prototype.call.bind behavior', () => {
  it('Creates a function that calls the target with a provided thisArg', () => {
    function getProductName(label) {
      return `${label}: ${this.productName}`;
    }

    const callGetProductName = Function.prototype.call.bind(getProductName);
    const product = { productName: 'apple' };

    expect(callGetProductName(product, 'product A')).toBe('product A: apple');
  });

  it('Turns a method into a standalone utility function', () => {
    const unboundSlice = Array.prototype.slice;
    const slice = Function.prototype.call.bind(unboundSlice);

    function getArrayOfArguments() {
      // eslint-disable-next-line
      return slice(arguments);
    }

    expect(getArrayOfArguments('a', 'b', 'c')).toEqual(['a', 'b', 'c']);
  });

  it('Demonstrates work with built-in methods that depend on this', () => {
    const unboundMap = Array.prototype.map;
    const map = Function.prototype.call.bind(unboundMap);

    const result = map([1, 2, 3], x => x * 2);

    expect(result).toEqual([2, 4, 6]);
  });
});
