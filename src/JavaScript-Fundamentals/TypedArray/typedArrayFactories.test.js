describe('TypedArray Factory Methods', () => {
  it('Creates a typed array with TypedArray.from()', () => {
    const typedArray = Uint8Array.from([10, 20, 30]);

    expect(typedArray).toBeInstanceOf(Uint8Array);
    expect(typedArray).toEqual(new Uint8Array([10, 20, 30]));
  });

  it('Creates a typed array with TypedArray.of()', () => {
    const typedArray = Uint8Array.of(10, 20, 30);

    expect(typedArray).toBeInstanceOf(Uint8Array);
    expect(typedArray).toEqual(new Uint8Array([10, 20, 30]));
  });
});
