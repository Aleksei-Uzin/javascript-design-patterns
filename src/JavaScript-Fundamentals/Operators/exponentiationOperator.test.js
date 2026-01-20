/* eslint-disable */

describe('JavaScript Exponentiation Operator (**)', () => {
  it('Demonstrates basic exponentiation syntax', () => {
    expect(2 ** 3).toBe(8);
    expect(3 ** 2).toBe(9);
    expect(5 ** 0).toBe(1);
    expect(0 ** 0).toBe(1);
  });

  it('Should return NaN for negative base with fractional exponent', () => {
    expect((-2) ** 0.5).toBeNaN();
  });

  it('should return Infinity for large exponent results', () => {
    expect(2 ** 1024).toBe(Infinity);
  });

  it('Demonstrates precedence issues with unary negation', () => {
    expect(() => {
      eval('-2 ** 3');
    }).toThrow(SyntaxError);
  });

  it('Resolves precedence with explicit parentheses', () => {
    expect(-(2 ** 3)).toBe(-8);
    expect((-2) ** 3).toBe(-8);
    expect((-2) ** 2).toBe(4);
  });

  it('Compares with Math.pow() method', () => {
    const base = 3;
    const exponent = 4;

    // ** operator is more concise than Math.pow()
    const usingOperator = base ** exponent;
    const usingMathPow = Math.pow(base, exponent);

    expect(usingOperator).toBe(81);
    expect(usingMathPow).toBe(81);
    expect(usingOperator).toBe(usingMathPow);
  });

  it('Handles fractional and negative exponents', () => {
    // Fractional exponents calculate roots
    expect(9 ** 0.5).toBe(3); // Square root
    expect(8 ** (1 / 3)).toBeCloseTo(2, 10); // Cube root

    // Negative exponents calculate reciprocals
    expect(2 ** -3).toBe(0.125); // 1 / (2^3)
  });
});
