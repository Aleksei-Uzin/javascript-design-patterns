describe('Function.prototype.bind()', () => {
  function reflect(a, b, c) {
    return [this.label, a, b, c];
  }

  it('Demonstrates binds this and arguments', () => {
    const obj = { label: 'obj' };
    const bound = reflect.bind(obj, 'A');

    expect(bound('B', 'C')).toEqual(['obj', 'A', 'B', 'C']);
    expect(bound.name).toBe('bound reflect');
  });

  it('Demonstrates that rebinding ignores the new thisArg, but prepends new args', () => {
    const obj1 = { label: 'obj1' };
    const obj2 = { label: 'obj2' };

    const bound1 = reflect.bind(obj1, 'A');
    const bound2 = bound1.bind(obj2, 'B');

    expect(bound2('C')).toEqual(['obj1', 'A', 'B', 'C']);
  });
});
