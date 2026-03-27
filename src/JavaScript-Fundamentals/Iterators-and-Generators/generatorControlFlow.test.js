describe('Generator Control Flow', () => {
  describe('Demonstrates Two-Way Communication - next() with arguments', () => {
    function* generator() {
      const first = yield 'apple';
      const second = yield first;
      yield `${first} and ${second}`;
    }

    it('Demonstrates passing arguments to Iterators', () => {
      const iterator = generator();

      expect(iterator.next()).toEqual({ done: false, value: 'apple' });
      expect(iterator.next('banana')).toEqual({ done: false, value: 'banana' });
      expect(iterator.next('cherry')).toEqual({ done: false, value: 'banana and cherry' });
      expect(iterator.next()).toEqual({ done: true, value: undefined });
    });
  });

  describe('External Control: throw() and return()', () => {
    function* generator() {
      yield 'apple';
      yield 'banana';
    }

    it('Demonstrates throw Error in Iterators', () => {
      const iterator = generator();

      expect(iterator.next()).toEqual({ done: false, value: 'apple' });
      expect(() => iterator.throw(new Error('Interrupted'))).toThrow('Interrupted');
      expect(iterator.next()).toEqual({ value: undefined, done: true });
    });

    it('Demonstrates Generator return statements', () => {
      const iterator = generator();

      expect(iterator.next()).toEqual({ done: false, value: 'apple' });
      expect(iterator.return('Exit')).toEqual({ done: true, value: 'Exit' });
      expect(iterator.next()).toEqual({ done: true, value: undefined });
    });
  });

  describe('Return Values vs. Iteration Consumers', () => {
    function* generatorWithReturn() {
      yield 'apple';
      yield 'banana';
      return 'hidden';
    }

    it('Demonstrates ignore return values during spread and for...of loops', () => {
      const result = [];

      for (const value of generatorWithReturn()) {
        result.push(value);
      }

      expect(result).toEqual(['apple', 'banana']);
      expect([...generatorWithReturn()]).toEqual(['apple', 'banana']);
    });

    it('Demonstrates access to return values via manual iteration', () => {
      const iterator = generatorWithReturn();
      const result = [];
      let next = iterator.next();
      let lastValue = null;

      while (!next.done) {
        result.push(next.value);
        next = iterator.next();
      }

      lastValue = next.value;

      expect(next).toEqual({ done: true, value: 'hidden' });
      expect(result).toEqual(['apple', 'banana']);
      expect(lastValue).toBe('hidden');
    });
  });
});
