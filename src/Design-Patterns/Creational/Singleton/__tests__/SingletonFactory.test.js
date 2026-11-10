describe('SingletonFactory', () => {
  let Singleton;

  beforeEach(async () => {
    jest.resetModules();

    ({ default: Singleton } = await import('../SingletonFactory.js'));
  });

  it('Demonstrates return the same instance', () => {
    const instanceA = Singleton.getInstance({ pointX: 5 });
    // options supplied after the first call are ignored
    const instanceB = Singleton.getInstance({ pointX: 10 });

    expect(instanceA).toBe(instanceB);
    expect(instanceB.pointX).toBe(5);
    expect(instanceB.pointY).toBe(10);
  });

  it('Demonstrates share state between references', () => {
    const instanceA = Singleton.getInstance({ pointX: 5 });
    const instanceB = Singleton.getInstance();

    instanceB.pointX = 100;

    expect(instanceA.pointX).toBe(100);
  });
});
