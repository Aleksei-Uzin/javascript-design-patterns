describe('Array Destructuring with Object Method Extraction', () => {
  it('Extracts array methods using rest destructuring with object pattern', () => {
    const array = [1, 2, 3, 4, 5];

    // Destructure first elements, then extract methods from rest array
    const [a, b, ...{ pop, push }] = array;

    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(typeof pop).toBe('function');
    expect(typeof push).toBe('function');
  });

  it('Demonstrates extracted methods work with call() binding', () => {
    const array = [1, 2, 3, 4, 5];
    const [, , ...{ pop, push }] = array;

    const targetArray = [10, 20, 30];

    // Use extracted pop method on different array
    const popped = pop.call(targetArray);
    expect(popped).toBe(30);
    expect(targetArray).toEqual([10, 20]);

    // Use extracted push method on same array
    push.call(targetArray, 40);
    expect(targetArray).toEqual([10, 20, 40]);
  });

  it('Shows method extraction creates reusable utilities', () => {
    const [, ...{ slice, concat }] = [1, 2, 3, 4, 5];

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    // Reuse extracted methods as utilities
    const sliced = slice.call(arr1, 1);
    const combined = concat.call(arr1, arr2);

    expect(sliced).toEqual([2, 3]);
    expect(combined).toEqual([1, 2, 3, 4, 5, 6]);
    expect(arr1).toEqual([1, 2, 3]); // Original unchanged
  });
});
