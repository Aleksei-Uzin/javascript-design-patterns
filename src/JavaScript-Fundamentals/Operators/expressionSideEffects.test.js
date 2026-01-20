describe('JavaScript Side Effects in Expressions', () => {
  it('Demonstrates function calls with state mutation', () => {
    let counter = 1;

    const increment = () => counter++; // Returns old value, then increments
    const getValue = () => counter; // Returns current value

    const result = increment() + getValue();

    expect(result).toBe(3); // 1 + 2 = 3
    expect(counter).toBe(2); // Counter was incremented
  });

  it('Shows side effects in array access with increment', () => {
    const numbers = [10, 20, 30];
    let index = 0;

    const result = numbers[index++] + numbers[index];

    expect(result).toBe(30); // numbers[0] + numbers[1] = 10 + 20
    expect(index).toBe(1); // Index was incremented
  });
});
