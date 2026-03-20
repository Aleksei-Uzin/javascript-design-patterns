describe('Spread syntax (...)', () => {
  describe('Spread in Function Calls', () => {
    it('Should return the maximum value in an array', () => {
      const arr = [1, 2, 3];
      const maxA = Math.max(...arr);
      const maxB = Math.max.apply(null, arr);
      const maxC = Math.max(-1, ...arr, ...[5, 4]);

      expect(maxA).toBe(3);
      expect(maxB).toBe(3);
      expect(maxC).toBe(5);
    });
  });

  describe('Spread in Array Literals', () => {
    it('Should create a Shallow Copy', () => {
      const arrA = [1, 2, 3];
      const copyA = [...arrA];

      expect(copyA).toEqual([1, 2, 3]);

      const arrB = [[1], [2], [3]];
      const copyB = [...arrB];

      // Array arrB is affected as well
      copyB[0].shift();

      expect(arrB).toEqual([[], [2], [3]]);
      expect(copyB).toEqual([[], [2], [3]]);
    });

    it('Should convert iterables into Arrays', () => {
      const set = new Set(['a', 'b', 'c']);
      const str = 'abc';

      expect([...set]).toEqual(['a', 'b', 'c']);
      expect([...str]).toEqual(['a', 'b', 'c']);
    });

    it('Demonstrates conditionally adding values to an array', () => {
      const arr = [1, 2, 3];
      const result = [...arr, ...(arr.length < 5 ? [4, 5] : [])];

      expect(result).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('Spread in Object Literals', () => {
    it('Should merge objects with a "Last One Wins" priority', () => {
      const defaults = { theme: 'light', font: 'Arial' };
      const userPrefs = { theme: 'dark' };

      const final = { ...defaults, ...userPrefs };

      expect(final).toEqual({ theme: 'dark', font: 'Arial' });
    });

    it('Should overwrite properties based on position', () => {
      const base = { x: 1, y: 1 };

      // Position matters
      const overrode = { ...base, x: 5 };
      const ignored = { x: 5, ...base };

      expect(overrode.x).toBe(5);
      expect(ignored.x).toBe(1);
    });

    it('Demonstrates spreading in object literals', () => {
      const arr = [1, 2, 3];
      const obj = { ...arr };

      expect(obj).toEqual({ 0: 1, 1: 2, 2: 3 });
    });
  });
});
