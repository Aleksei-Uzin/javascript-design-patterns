describe('Singleton - Static Private Fields', () => {
  let Singleton;

  beforeEach(async () => {
    jest.resetModules();

    ({ default: Singleton } = await import('../SingletonStaticPrivateFields.js'));
  });

  it('Demonstrates return the same instance', () => {
    const single = new Singleton();
    const anotherSingle = new Singleton();

    expect(single).toBe(anotherSingle);
  });

  it('Demonstrates share state between references', () => {
    const single = new Singleton();
    const anotherSingle = new Singleton();

    single.publicProperty = 'Updated';

    expect(anotherSingle.publicProperty).toBe('Updated');
  });

  it('Exposes the expected public API', () => {
    const singleton = new Singleton();

    expect(singleton.publicMethod()).toBe('Public Method accessing Private Value');
  });
});
