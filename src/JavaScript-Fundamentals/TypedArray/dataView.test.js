describe('DataView API', () => {
  it('View Properties - exposes buffer, byte offset, and byte length', () => {
    const buffer = new ArrayBuffer(4);
    const fullView = new DataView(buffer);
    const subsetView = new DataView(buffer, 2, 2);

    expect(fullView.buffer).toBe(buffer);
    expect(subsetView.buffer).toBe(buffer);

    expect(fullView.byteOffset).toBe(0);
    expect(subsetView.byteOffset).toBe(2);

    expect(fullView.byteLength).toBe(4);
    expect(subsetView.byteLength).toBe(2);
  });

  it('Demonstrates read and write signed and unsigned 8-bit integers', () => {
    const buffer = new ArrayBuffer(2);
    const dataView = new DataView(buffer);

    dataView.setInt8(0, -1);
    dataView.setUint8(1, 255);

    expect(dataView.getInt8(0)).toBe(-1);
    expect(dataView.getUint8(1)).toBe(255);
  });

  describe('Byte Order', () => {
    it('Reads multi-byte values as Big-endian or Little-endian', () => {
      const buffer = new ArrayBuffer(2);
      const dataView = new DataView(buffer);

      dataView.setUint8(0, 0x12);
      dataView.setUint8(1, 0x34);

      expect(dataView.getUint16(0)).toBe(0x1234); // big-endian (default)
      expect(dataView.getUint16(0, true)).toBe(0x3412); // little-endian
    });

    it('Writes multi-byte values according to byte order', () => {
      const buffer = new ArrayBuffer(4);
      const dataView = new DataView(buffer);

      dataView.setUint32(0, 0x12345678);
      expect(Array.from(new Uint8Array(buffer))).toEqual([0x12, 0x34, 0x56, 0x78]);

      dataView.setUint32(0, 0x12345678, true);
      expect(Array.from(new Uint8Array(buffer))).toEqual([0x78, 0x56, 0x34, 0x12]);
    });
  });

  describe('Read/Write Consistency', () => {
    it('Demonstrates return the original value when using the same byte order', () => {
      const buffer = new ArrayBuffer(4);
      const dataView = new DataView(buffer);
      const value = 0x12345678;

      dataView.setUint32(0, value, false);
      expect(dataView.getUint32(0, false)).toBe(value);

      dataView.setUint32(0, value, true);
      expect(dataView.getUint32(0, true)).toBe(value);
    });

    it('Demonstrates return a different value when byte orders do not match', () => {
      const buffer = new ArrayBuffer(2);
      const dataView = new DataView(buffer);

      dataView.setUint16(0, 0x1234);

      expect(dataView.getUint16(0, true)).toBe(0x3412);
    });
  });
});
