describe('Function.prototype.apply()', () => {
  it('Demonstrates invoking a function with arguments provided as an array', () => {
    const numbers = [10, 20, 30];

    numbers.push.apply(numbers, [40, 50, 60]);
    expect(numbers).toEqual([10, 20, 30, 40, 50, 60]);

    const max = Math.max.apply(null, numbers);
    const min = Math.min.apply(null, numbers);

    expect(max).toBe(60);
    expect(min).toBe(10);
  });

  it('Demonstrates that this is undefined in strict mode when no thisArg is provided', () => {
    function getProductName(label) {
      return `${label}: ${this.productName}`;
    }

    // accessing this.productName throws
    expect(() => getProductName.apply()).toThrow(TypeError);
  });
});
