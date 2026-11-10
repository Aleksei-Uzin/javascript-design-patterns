describe('Singleton - TypeScript', () => {
  let Singleton: typeof import('../SingletonTypeScript.ts').default;

  beforeEach(async () => {
    jest.resetModules();

    ({ default: Singleton } = await import('../SingletonTypeScript.ts'));
  });

  it('Demonstrates return the same instance', () => {
    const instanceA = Singleton.getInstance();
    const instanceB = Singleton.getInstance();

    expect(instanceA).toBeInstanceOf(Singleton);
    expect(instanceA).toBe(instanceB);
  });
});
