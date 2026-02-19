describe('JSON.parse with Reviver', () => {
  it('Should transform values contextually using the "this" reference', () => {
    const json = '{"type": "date", "payload": "2026-01-01"}';

    function reviver(key, value) {
      if (key === 'payload' && this.type === 'date') {
        return new Date(value);
      }
      return value;
    }

    const data = JSON.parse(json, reviver);

    expect(data.payload).toBeInstanceOf(Date);
    expect(data.payload.getFullYear()).toBe(2026);
  });

  describe('JSON.parse Context Parameter', () => {
    it('Should provide the raw context string for Primitive Values', () => {
      const json = '{"amount": 12345678901234567890}';

      const data = JSON.parse(json, (key, value, context) => {
        if (key === 'amount') {
          // Rounded / Incorrect
          // eslint-disable-next-line no-loss-of-precision
          expect(value).toBe(12345678901234568000);

          // The exact original string
          expect(context.source).toBe('12345678901234567890');
          return BigInt(context.source);
        }
        return value;
      });

      expect(data.amount).toBe(12345678901234567890n);
    });

    it('Should NOT provide context.source for for structural nodes (objects / arrays)', () => {
      const json = '{"data": [[], [], []]}';

      const data = JSON.parse(json, (key, value, context) => {
        expect(context.source).toBeUndefined();
        return value;
      });

      expect(data).toEqual({ data: [[], [], []] });
    });
  });
});
