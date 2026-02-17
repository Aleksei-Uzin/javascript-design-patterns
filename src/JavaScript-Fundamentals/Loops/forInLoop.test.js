describe('for...in loop', () => {
  it('Should iterate over enumerable properties and ignore non-enumerable properties', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = [];

    // toString not enumerable
    expect(obj.propertyIsEnumerable('toString')).toBe(false);

    // eslint-disable-next-line guard-for-in
    for (const key in obj) {
      keys.push(key);
    }

    expect(keys).toEqual(['a', 'b', 'c']);
  });

  it('Should exclude inherited enumerable properties', () => {
    const user = { name: 'Aleksei', active: true };
    const obj = Object.create(user, {
      a: { value: 1, enumerable: true },
      b: { value: 2, enumerable: true },
      c: { value: 3, enumerable: true },
    });
    const keys = [];

    for (const key in obj) {
      if (Object.hasOwn(obj, key)) {
        keys.push(key);
      }
    }

    expect(keys).toEqual(['a', 'b', 'c']);
  });

  it('Allows arbitrary expressions as the loop variable', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = [];
    let i = 0;

    // Loop variable can be any assignable expression, not just a simple variable
    for (keys[i++] in obj) /* empty */ ;

    expect(keys).toEqual(['a', 'b', 'c']);
  });
});
