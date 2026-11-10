describe('Singleton - Static Private Field', () => {
  let Singleton;

  beforeEach(async () => {
    jest.resetModules();

    ({ default: Singleton } = await import('../SingletonStaticPrivateField.js'));
  });

  it('Allows instance creation only through Singleton.getInstance()', () => {
    expect(() => new Singleton()).toThrow(new TypeError('Use Singleton.getInstance()'));

    expect(Singleton.getInstance()).toBeInstanceOf(Singleton);
  });

  it('Demonstrates return the same instance and share state', () => {
    const instanceA = Singleton.getInstance();
    const instanceB = Singleton.getInstance();

    expect(instanceA).toBe(instanceB);

    instanceB.publicProperty = 'Updated';

    expect(instanceA.publicProperty).toBe('Updated');
  });
});
