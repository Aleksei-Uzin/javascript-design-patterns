describe('[[Enumerable]] attribute', () => {
  it('Controls whether a property appears in for...in loops and Object.keys()', () => {
    const person = { name: 'Aleksei' };

    expect(person.propertyIsEnumerable('name')).toBeTruthy();
    expect('name' in person).toBeTruthy();
    expect(Object.keys(person)).toEqual(['name']);

    const seenBefore = [];

    for (const prop in person) {
      if (Object.hasOwn(person, prop)) {
        seenBefore.push(prop);
      }
    }

    expect(seenBefore).toEqual(['name']);

    // Make the property non-enumerable
    Object.defineProperty(person, 'name', { enumerable: false });

    expect(person.propertyIsEnumerable('name')).toBeFalsy();
    // Still exists, but no longer enumerable
    expect('name' in person).toBeTruthy();
    expect(Object.keys(person)).toEqual([]);

    const seenAfter = [];

    for (const prop in person) {
      if (Object.hasOwn(person, prop)) {
        seenAfter.push(prop);
      }
    }

    expect(seenAfter).toEqual([]);
  });
});
