describe('JSON Custom Serialization', () => {
  it('Should serialize RegExp object', () => {
    const data = { search: /[a-z]+/i };

    const json = JSON.stringify(data, (key, value) => {
      if (value instanceof RegExp) {
        return { source: value.source, flags: value.flags, _type: 'RegExp' };
      }
      return value;
    });

    expect(json).toBe('{"search":{"source":"[a-z]+","flags":"i","_type":"RegExp"}}');
  });

  it('Should serialize BigInt as a string by default', () => {
    const data = { amount: 12345678901234567890n };

    BigInt.prototype.toJSON = function serializeBigInt() {
      return this.toString();
    };

    const json = JSON.stringify(data);

    expect(json).toBe('{"amount":"12345678901234567890"}');
  });

  it('Should preserve BigInt precision using JSON.rawJSON', () => {
    const data = { amount: 12345678901234567890n };

    BigInt.prototype.toJSON = function serializeBigInt() {
      return JSON.rawJSON(this.toString());
    };

    const json = JSON.stringify(data);

    expect(json).toBe('{"amount":12345678901234567890}');

    const parsed = JSON.parse(json, (key, value, context) => {
      if (key === 'amount') return BigInt(context.source);
      return value;
    });

    expect(parsed.amount).toBe(12345678901234567890n);
  });
});
