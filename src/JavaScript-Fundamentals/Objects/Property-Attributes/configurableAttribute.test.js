describe('[[Configurable]] attribute', () => {
  it('Prevents a property from being deleted or reconfigured', () => {
    const person = { name: 'Aleksei' };

    expect('name' in person).toBeTruthy();
    delete person.name;
    expect('name' in person).toBeFalsy();

    Object.defineProperty(person, 'name', {
      configurable: false,
      value: 'Alex',
      writable: true,
    });

    person.name = 'Aleksei';
    expect(person.name).toBe('Aleksei');

    expect(() => delete person.name).toThrow();
    expect(() => Object.defineProperty(person, 'name', { configurable: true })).toThrow();
  });

  it('Allows narrowing writable from true to false, but not back', () => {
    const person = {};

    Object.defineProperty(person, 'name', {
      configurable: false,
      value: 'Aleksei',
      writable: true,
    });

    Object.defineProperty(person, 'name', { writable: false }); // Allowed

    expect(() => Object.defineProperty(person, 'name', { writable: true })).toThrow();
    expect(() => {
      person.name = 'Alex';
    }).toThrow();
  });
});
