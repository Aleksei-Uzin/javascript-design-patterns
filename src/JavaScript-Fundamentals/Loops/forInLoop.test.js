describe('for in loop', () => {
  it('Allows arbitrary expressions as the loop variable', () => {
    const obj = { a: 1, b: 2, c: 3 };
    const keys = [];
    let i = 0;

    // Loop variable can be any assignable expression, not just a simple variable
    for (keys[i++] in obj) /* empty */ ;

    expect(keys).toEqual(['a', 'b', 'c']);
  });
});
