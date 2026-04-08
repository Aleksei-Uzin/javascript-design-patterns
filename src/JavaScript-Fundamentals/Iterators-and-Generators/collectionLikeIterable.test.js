describe('Collection-like iterable', () => {
  const collection = {
    data: [10, 20, 30],
    [Symbol.iterator]() {
      let index = 0;
      return {
        next: () => ({
          value: this.data[index++],
          done: index > this.data.length,
        }),
      };
    },
  };

  it('Demonstrates each iteration starts from the beginning (Restartable)', () => {
    const arr1 = [...collection];
    const arr2 = [...collection];

    expect(arr1).toEqual([10, 20, 30]);
    expect(arr2).toEqual([10, 20, 30]);
  });

  it('Demonstrates multiple iterators do not interfere with each other', () => {
    const arr1 = collection[Symbol.iterator]();
    const arr2 = collection[Symbol.iterator]();

    expect(arr1.next().value).toBe(10);
    expect(arr2.next().value).toBe(10);
    expect(arr1.next().value).toBe(20);
    expect(arr2.next().value).toBe(20);
  });
});
