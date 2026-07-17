describe('Function.prototype.call()', () => {
  function getProductName(label) {
    return `${label}: ${this.productName}`;
  }

  it('Demonstrates bind "this" to the provided object', () => {
    const productA = { productName: 'apple' };
    const productB = { productName: 'banana' };

    expect(getProductName.call(productA, 'product A')).toBe('product A: apple');
    expect(getProductName.call(productB, 'product B')).toBe('product B: banana');
  });

  it('Demonstrates bind "this" to undefined in strict mode when no thisArg is provided', () => {
    // accessing this.productName throws
    expect(() => getProductName.call()).toThrow(TypeError);
  });

  it('Demonstrates call does NOT throw by itself', () => {
    function getThis() {
      return this;
    }

    expect(getThis.call()).toBeUndefined(); // strict mode: this = undefined
  });
});
