describe('JavaScript Unicode: Code Units (UTF-16) vs Code Points (Unicode ID)', () => {
  const rocket = '🚀';
  const smile = '😀';

  it('Demonstrates Code Unit vs Code Point access methods', () => {
    // charCodeAt() returns UTF-16 code unit (surrogate pair part)
    expect(rocket.charCodeAt(0).toString(16)).toBe('d83d'); // High surrogate
    expect(rocket.charCodeAt(1).toString(16)).toBe('de80'); // Low surrogate

    // codePointAt() returns actual Unicode code point
    expect(rocket.codePointAt(0).toString(16)).toBe('1f680');
  });

  it('Shows string .length counts UTF-16 Code Units, not characters', () => {
    expect(rocket.length).toBe(2); // 🚀 = 2 code units
    expect(smile.length).toBe(2); // 😀 = 2 code units
    expect('A'.length).toBe(1); // ASCII = 1 code unit

    // Accesses individual code units
    expect(rocket[0]).toBe('\ud83d'); // High surrogate
    expect(rocket[1]).toBe('\ude80'); // Low surrogate
  });

  it('Compares iteration methods: code units vs code points', () => {
    const text = '🚀A';

    // Iterator recognizes surrogate pairs
    expect(Array.from(text)).toEqual(['🚀', 'A']);
    expect([...text]).toEqual(['🚀', 'A']);
    // Legacy behavior breaks surrogate pairs
    expect(text.split('')).toEqual(['\ud83d', '\ude80', 'A']);
  });

  it('Demonstrates safe string reversal with Unicode', () => {
    const text = 'I ❤ 😀';

    const safeReverse = [...text].reverse().join('');
    expect(safeReverse).toBe('😀 ❤ I');

    const brokenReverse = text.split('').reverse().join('');
    expect(brokenReverse).toBe('\ude00\ud83d ❤ I');
  });

  it('Demonstrates "u" (Unicode) flag in Regular Expressions', () => {
    expect(rocket.match(/^.$/u)[0]).toBe('🚀');
    expect(/^.$/u.test(rocket)).toBe(true);
    expect(/^.$/.test(rocket)).toBe(false);
  });
});
