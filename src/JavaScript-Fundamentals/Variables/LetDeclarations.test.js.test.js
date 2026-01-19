/* eslint-disable */

describe('JavaScript let Declaration Binding Lists', () => {
  it('Demonstrates binding list syntax vs comma operator', () => {
    // Comma operator in expressions evaluates left-to-right, returns last value
    let x = (1, 2, 3);
    expect(x).toBe(3);

    // Binding list uses commas as Separators, NOT Operators
    // prettier-ignore
    let a = 1, b = 2, c = 3;

    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(c).toBe(3);
  });

  it('Shows initializer vs assignment operator differences', () => {
    /**
     * In a let declaration, the = sign introduces an initializer, not a runtime assignment.
     * The difference is subtle:
     */

    // Initializer in let: creates a new binding and optionally gives it an initial value
    let x = 5;
    expect(x).toBe(5);

    // Assignment operator (=): modifies an existing variable at runtime
    x = 50;
    expect(x).toBe(50);
  });

  it('Demonstrates left-to-right binding evaluation', () => {
    // Earlier variables can be referenced in later bindings
    // prettier-ignore
    let a = 1, b = 2, c = a + b;

    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(c).toBe(3);
  });

  it('Shows Temporal Dead Zone in binding lists', () => {
    // ❌ Cannot reference variables declared later in the same binding list
    expect(() => {
      // prettier-ignore
      let x = y, y = 2; // ReferenceError: Cannot access 'y' before initialization
    }).toThrow(ReferenceError);
  });
});
