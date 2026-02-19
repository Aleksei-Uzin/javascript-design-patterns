describe('The Security Risk: "Prototype Pollution"', () => {
  it('Should treat __proto__ as an internal Setter', () => {
    const obj = { __proto__: { name: 'Aleksei' } };

    expect(Object.hasOwn(obj, '__proto__')).toBe(false);
    expect(Object.getPrototypeOf(obj).name).toBe('Aleksei');
    expect(Object.keys(obj)).toEqual([]);
  });

  it('Should NOT trigger the prototype setter with JSON.parse', () => {
    const json = '{"__proto__": {"name": "Aleksei"}}';
    const obj = JSON.parse(json);

    expect(Object.hasOwn(obj, '__proto__')).toBe(true);
    expect(Object.getPrototypeOf(obj)).toBe(Object.prototype); // Default Prototype
    expect(Object.keys(obj)).toEqual(['__proto__']);
  });

  describe('Protection Strategy', () => {
    it('Should exclude banned keys when using a custom reviver', () => {
      const json = '{"__proto__": {"name": "Aleksei"}, "active": true}';

      const reviver = (key, value) => {
        const BANNED_KEYS = ['__proto__', 'constructor', 'prototype'];

        return BANNED_KEYS.includes(key) ? undefined : value;
      };

      const data = JSON.parse(json, reviver);

      expect(Object.hasOwn(data, '__proto__')).toBe(false);
      expect(Object.getPrototypeOf(data)).toBe(Object.prototype); // Default Prototype
      expect(Object.keys(data)).toEqual(['active']);
    });
  });
});
