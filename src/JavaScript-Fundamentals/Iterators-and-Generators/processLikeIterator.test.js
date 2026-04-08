describe('Process-like iterator', () => {
  const process = {
    n: 0,
    next() {
      return { value: this.n++, done: false };
    },
    [Symbol.iterator]() {
      return this; // Self-iterating
    },
  };

  it('Demonstrates iterator cannot restart', () => {
    const iterator = process;

    expect(iterator.next().value).toBe(0);
    expect(iterator.next().value).toBe(1);
    expect(iterator.next().value).toBe(2);
  });

  it('Demonstrates call [Symbol.iterator]() does NOT restart', () => {
    const iterator1 = process;

    expect(iterator1.next().value).toBe(3);
    expect(iterator1.next().value).toBe(4);

    const iterator2 = process[Symbol.iterator]();

    expect(iterator2.next().value).toBe(5);
  });
});
