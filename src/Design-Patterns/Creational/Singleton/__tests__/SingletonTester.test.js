describe('SingletonTester', () => {
  let Singleton;

  beforeEach(async () => {
    jest.resetModules();

    ({ default: Singleton } = await import('../SingletonTester.js'));
  });

  it('Demonstrates return the same instance', () => {
    const single = Singleton.getInstance({ pointX: 5 });
    // options only matter on first call
    const anotherSingle = Singleton.getInstance({ pointX: 10 });

    expect(single).toBe(anotherSingle);
    expect(anotherSingle.pointX).toBe(5);
  });

  it('Demonstrates share state between references', () => {
    const single = Singleton.getInstance({ pointX: 5 });
    const anotherSingle = Singleton.getInstance();

    single.pointX = 100;

    expect(anotherSingle.pointX).toBe(100);
  });
});
