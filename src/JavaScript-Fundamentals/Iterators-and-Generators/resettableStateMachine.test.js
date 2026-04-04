describe('Generator as Resettable State Machine', () => {
  function* counter() {
    let n = 0;
    let state = 'normal';

    while (true) {
      if (state === 'reset') {
        state = 'normal';
        n = 0;
        yield null;
      }

      try {
        yield n++;
      } catch (error) {
        if (error === 'reset') state = 'reset';
        else throw error;
      }
    }
  }

  it('Should reset counter state when throw() is called with "reset" signal', () => {
    const count = counter();

    const beforeResetA = Array.from({ length: 3 }, () => count.next().value);
    expect(beforeResetA).toEqual([0, 1, 2]);

    const beforeResetB = Array.from({ length: 3 }, () => count.next().value);
    expect(beforeResetB).toEqual([3, 4, 5]);

    count.throw('reset');

    const afterReset = Array.from({ length: 3 }, () => count.next().value);
    expect(afterReset).toEqual([0, 1, 2]);
  });

  it('Should throw an error', () => {
    const count = counter();
    count.next();

    expect(() => count.throw(new Error('Interrupted'))).toThrow('Interrupted');
  });
});
