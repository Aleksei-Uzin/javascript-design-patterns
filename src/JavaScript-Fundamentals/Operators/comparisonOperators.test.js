/* eslint-disable */

describe('JavaScript Relational Operators (<= and >=)', () => {
  /**
   * Resource:
   * https://stackoverflow.com/questions/60786413/can-someone-explain-me-what-is-the-leftfirst-boolean-flag-they-have-defined-in?utm_source=copilot.com
   */
  it('Demonstrates <= as "not greater than" logic', () => {
    // <= is defined as !(left > right), NOT using equality operators
    expect(2 <= 2).toBe(true); // !(2 > 2) → !(false) → true
    expect(3 <= 2).toBe(false); // !(3 > 2) → !(true) → false
    expect(1 <= 2).toBe(true); // !(1 > 2) → !(false) → true
  });

  it('Demonstrates >= as "not less than" logic', () => {
    // >= is defined as !(left < right), not using equality operators
    expect(2 >= 2).toBe(true); // !(2 < 2) → !(false) → true
    expect(2 >= 3).toBe(false); // !(2 < 3) → !(true) → false
    expect(2 >= 1).toBe(true); // !(2 < 1) → !(false) → true
  });

  it('Shows type coercion in relational comparisons', () => {
    // String "2" is coerced to number 2 for comparison
    expect(2 <= '2').toBe(true); // 2 <= 2 after coercion
    expect('2' >= 2).toBe(true); // 2 >= 2 after coercion
    expect('5' >= 3).toBe(true); // 5 >= 3 after coercion
  });

  it('Contrasts relational vs equality operator behavior', () => {
    const num = 2;
    const str = '2';

    // Equality operators have different coercion rules
    expect(num == str).toBe(true); // Loose equality with coercion
    expect(num === str).toBe(false); // Strict equality, no coercion

    // Relational operators use their own coercion rules
    expect(num <= str).toBe(true); // Relational comparison with coercion
    expect(num >= str).toBe(true); // Both evaluate to 2 <= 2 and 2 >= 2
  });

  it('Demonstrates object coercion in relational comparisons', () => {
    const obj = {
      valueOf() {
        return 2;
      },
    };

    const result = obj >= 2;

    expect(result).toBe(true);
  });

  it('Shows edge cases with NaN comparisons', () => {
    // NaN comparisons always return false except for !=
    expect(NaN <= 5).toBe(false);
    expect(NaN >= 5).toBe(false);
    expect(5 <= NaN).toBe(false);
    expect(5 >= NaN).toBe(false);
  });
});
