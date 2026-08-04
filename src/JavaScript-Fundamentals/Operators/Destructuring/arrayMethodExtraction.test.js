describe('Array Destructuring with Object Method Extraction', () => {
  it('Should extract array methods using rest destructuring', () => {
    const array = [1, 2, 3, 4, 5];
    const [a, b, ...{ pop, push }] = array;

    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(typeof pop).toBe('function');
    expect(typeof push).toBe('function');
  });

  it('Should allow extracted methods to operate on other arrays via call() binding', () => {
    const [, , ...{ pop, push }] = [1, 2, 3, 4, 5];
    const targetArray = [10, 20, 30];

    expect(pop.call(targetArray)).toBe(30);
    expect(targetArray).toEqual([10, 20]);

    push.call(targetArray, 40);
    expect(targetArray).toEqual([10, 20, 40]);
  });

  it('Should handle extraction from empty array', () => {
    const [...{ slice, concat }] = [];
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    expect(slice.call(arr1, 1)).toEqual([2, 3]);
    expect(concat.call(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arr1).toEqual([1, 2, 3]); // Original unchanged
  });
});
