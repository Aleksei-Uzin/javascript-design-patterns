describe('TypedArray - Iteration', () => {
  const typedArray = new Uint8Array([10, 20, 30]);

  it('Demonstrates support keys(), values(), and entries()', () => {
    expect([...typedArray.keys()]).toEqual([0, 1, 2]);
    expect([...typedArray.values()]).toEqual([10, 20, 30]);
    expect([...typedArray.entries()]).toEqual([
      [0, 10],
      [1, 20],
      [2, 30],
    ]);
  });

  it('Demonstrates support for-of and the spread operator', () => {
    const values = [];

    for (const value of typedArray) {
      values.push(value);
    }

    expect(values).toEqual([10, 20, 30]);
    expect([...typedArray]).toEqual([10, 20, 30]);
  });
});
