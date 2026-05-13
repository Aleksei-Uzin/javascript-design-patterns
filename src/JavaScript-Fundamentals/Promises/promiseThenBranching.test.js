describe('Multiple then() Handlers on the Same Promise', () => {
  it('Demonstrates each handler receives the same resolved value independently', async () => {
    const promise = Promise.resolve('base value');
    const events = [];

    const p1 = promise.then(value => {
      events.push(`handler A received: ${value}`);
      return 'result A';
    });

    const p2 = promise.then(value => {
      events.push(`handler B received: ${value}`);
      return 'result B';
    });

    expect(p1).not.toBe(promise);
    expect(p2).not.toBe(promise);
    expect(p1).not.toBe(p2);

    const [r1, r2] = await Promise.all([p1, p2]);

    expect(r1).toBe('result A');
    expect(r2).toBe('result B');
    expect(events).toEqual(['handler A received: base value', 'handler B received: base value']);
  });

  it('Demonstrates each chain runs independently without waiting for the other', async () => {
    const promise = Promise.resolve(10);

    const p1 = promise.then(v => v + 1).then(v => v + 1);
    const p2 = promise.then(v => v * 2).then(v => v * 2);

    const [r1, r2] = await Promise.all([p1, p2]);

    expect(r1).toBe(12); // 10 -> 11 -> 12
    expect(r2).toBe(40); // 10 -> 20 -> 40
  });
});
