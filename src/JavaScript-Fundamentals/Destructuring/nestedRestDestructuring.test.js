describe('Nested Rest Destructuring Patterns', () => {
  it('Demonstrates nested destructuring with rest operator', () => {
    const array = [1, 2, 3, 4, 5, 6];

    // Rest operator collects remaining elements, then immediately destructures them
    const [a, b, ...[c, d]] = array;

    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(c).toBe(3);
    expect(d).toBe(4);
  });

  it('Handles missing elements gracefully', () => {
    const array = [1, 2];

    // Missing elements become undefined
    const [a, b, ...[c, d]] = array;

    expect(a).toBe(1);
    expect(b).toBe(2);
    expect(c).toBeUndefined();
    expect(d).toBeUndefined();
  });

  it('Shows practical use in function parameters', () => {
    function parseTableData([header, type, ...[firstRow, secondRow]]) {
      return { header, type, firstRow, secondRow };
    }

    const result = parseTableData(['ID', 'User', { id: 1 }, { id: 2 }, { id: 3 }]);

    expect(result.header).toBe('ID');
    expect(result.type).toBe('User');
    expect(result.firstRow).toEqual({ id: 1 });
    expect(result.secondRow).toEqual({ id: 2 });
  });

  it('Compares nested syntax to traditional two-step approach', () => {
    const array = [1, 2, 3, 4, 5, 6];

    // Traditional approach: two separate destructuring steps
    const [a, b, ...rest] = array;
    const [c, d] = rest;

    // Nested approach: single destructuring step
    const [x, y, ...[z, w]] = array;

    expect(a).toBe(x); // 1
    expect(b).toBe(y); // 2
    expect(c).toBe(z); // 3
    expect(d).toBe(w); // 4
  });
});
