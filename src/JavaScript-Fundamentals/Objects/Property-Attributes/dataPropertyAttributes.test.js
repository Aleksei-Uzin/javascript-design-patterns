describe('Data Property Attributes', () => {
  it('[[Writable]] - controls whether assignment to the property succeeds', () => {
    const person = {};

    Object.defineProperty(person, 'name', {
      value: 'Aleksei',
      configurable: true,
      enumerable: true,
      writable: true,
    });

    expect(person.name).toBe('Aleksei');

    Object.defineProperty(person, 'name', { writable: false });

    expect(() => {
      person.name = 'Alex';
    }).toThrow(TypeError);
    expect(person.name).toBe('Aleksei');

    // But, the property is still configurable
    Object.defineProperty(person, 'name', { value: 'Alex' });
    expect(person.name).toBe('Alex');
  });

  it('Boolean attributes default to false when defined via Object.defineProperty', () => {
    const person = {};

    Object.defineProperty(person, 'name', { value: 'Aleksei' });

    expect('name' in person).toBeTruthy();

    const desc = Object.getOwnPropertyDescriptor(person, 'name');
    expect(desc.enumerable).toBe(false);
    expect(desc.writable).toBe(false);
    expect(desc.configurable).toBe(false);

    expect(person.propertyIsEnumerable('name')).toBeFalsy();
    expect(() => delete person.name).toThrow(TypeError);
    expect(() => {
      person.name = 'Alex';
    }).toThrow(TypeError);

    expect(person.name).toBe('Aleksei');
  });
});
