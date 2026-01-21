/* eslint-disable */

describe('Nullish Coalescing Operator (??)', () => {
  it('Should return right operand when left is null or undefined', () => {
    expect(null ?? 'default').toBe('default');
    expect(undefined ?? 'default').toBe('default');
    expect(null ?? undefined ?? 'default').toBe('default');
  });

  it('Should preserve falsy values that are not nullish', () => {
    expect(0 ?? 'default').toBe(0);
    expect(false ?? 'default').toBe(false);
    expect('' ?? 'default').toBe('');
    expect(NaN ?? 'default').toBeNaN();
  });

  it('requires parentheses when mixed with && or ||', () => {
    const a = null;
    const b = 'middle';
    const c = 'last';

    expect((a ?? b) || c).toBe('middle'); // ?? first, then ||
    expect(a ?? (b || c)).toBe('middle'); // || first, then ??

    // This would be a SyntaxError without parentheses:
    // a ?? b || c  // SyntaxError: parentheses required
  });
});
