describe('Property Access Errors', () => {
  // Attempting to set the property will throw an error in strict mode
  // or will fail silently in non-strict mode

  it('Should throw TypeError when assigning to read-only property', () => {
    const obj = {};

    Object.defineProperty(obj, 'readOnlyProp', {
      value: 42,
      writable: false, // makes it READ-ONLY
      enumerable: true,
      configurable: true,
    });

    expect(() => {
      obj.readOnlyProp = 100;
    }).toThrow(TypeError);
    expect(obj.readOnlyProp).toBe(42); // The property remains unchanged
  });

  it('Should prevent shadowing inherited read-only properties', () => {
    const obj = {};

    Object.defineProperty(obj, 'readOnlyProp', {
      value: 42,
      writable: false, // makes it READ-ONLY
      enumerable: true,
      configurable: true,
    });

    const newObj = Object.create(obj);

    expect(() => {
      newObj.readOnlyProp = 100;
    }).toThrow(TypeError);

    Object.defineProperty(newObj, 'readOnlyProp', { value: 100 });

    expect(newObj.readOnlyProp).toBe(100);
    expect(obj.readOnlyProp).toBe(42); // The property remains unchanged
  });

  it('Should throw TypeError when adding properties to non-extensible object', () => {
    const user = { name: 'Aleksei', active: true };

    // Make the object non-extensible
    Object.preventExtensions(user);

    expect(() => {
      user.userId = 1;
    }).toThrow(TypeError);
    expect(Object.isExtensible(user)).toBe(false);

    // But can modify existing properties
    user.name = 'Alex';
    expect(user.name).toBe('Alex');
  });

  it('Should throw TypeError when assigning to getter-only property', () => {
    const objWithGetter = {
      get value() {
        return 'getter value';
      },
    };

    const newObj = Object.create(objWithGetter);

    expect(() => {
      newObj.value = 'try to override the getter';
    }).toThrow(TypeError);

    expect(Object.hasOwn(newObj, 'value')).toBe(false);
    expect(objWithGetter.value).toBe('getter value');
  });
});
