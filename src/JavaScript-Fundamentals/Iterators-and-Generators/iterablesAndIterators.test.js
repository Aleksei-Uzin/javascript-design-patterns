describe('Iterables and Iterators', () => {
  it('Demonstrates the internal logic of a for...of loop', () => {
    const arr = ['apple', 'banana', 'cherry'];
    const iterator = arr[Symbol.iterator]();
    const fruits = [];

    for (let result = iterator.next(); !result.done; result = iterator.next()) {
      fruits.push(result.value);
    }

    expect(fruits).toEqual(['apple', 'banana', 'cherry']);
  });

  it('Should create Iterable object using a Generator method', () => {
    const fruits = {
      items: ['apple', 'banana', 'cherry'],
      *[Symbol.iterator]() {
        for (const item of this.items) {
          yield item;
        }
      },
    };

    expect([...fruits]).toEqual(['apple', 'banana', 'cherry']);
  });

  it('Demonstrates "Lazy Evaluation" with an infinite generator', () => {
    const infiniteCounter = {
      *[Symbol.iterator]() {
        let n = 1;
        while (true) yield n++;
      },
    };

    const iterator = infiniteCounter[Symbol.iterator]();
    const results = [];

    for (let i = 0; i < 5; i++) {
      results.push(iterator.next().value);
    }

    expect(results).toEqual([1, 2, 3, 4, 5]);
    expect(iterator.next().value).toBe(6);
  });
});
