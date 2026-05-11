describe('Floating Promises', () => {
  it('Demonstrates return undefined when inner promise is not returned from then()', async () => {
    const fetchData = () => Promise.resolve('https://example.com');

    const promise = fetchData().then(() => {
      Promise.resolve('Response value');
    });

    const result = await promise;

    expect(result).toBeUndefined();
  });

  it('Demonstrates resolve with inner promise value when returned from then()', async () => {
    const fetchData = () => Promise.resolve('https://example.com');

    const promise = fetchData().then(() => {
      return Promise.resolve('Response value');
    });

    const result = await promise;

    expect(result).toBe('Response value');
  });
});
