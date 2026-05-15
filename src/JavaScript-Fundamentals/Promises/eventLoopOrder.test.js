function flushAllAsync() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}

describe('JavaScript Event Loop — Predict the Order', () => {
  xtest('1: Microtasks inside Microtasks', async () => {
    const result = [];

    result.push(1);

    Promise.resolve().then(() => {
      result.push(2);
      Promise.resolve().then(() => result.push(3));
    });

    setTimeout(() => result.push(4));

    result.push(5);

    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });

  xtest('2: Microtasks inside Macrotasks', async () => {
    const result = [];

    result.push(1);

    setTimeout(() => {
      result.push(2);
      Promise.resolve().then(() => result.push(3));
    }, 0);

    Promise.resolve().then(() => {
      result.push(4);
      setTimeout(() => result.push(5));
    });

    result.push(6);

    await flushAllAsync();
    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });

  xtest('3: resolved-but-not-settled trap', async () => {
    const result = [];

    const p = Promise.resolve().then(() => result.push(1));

    Promise.resolve(p).then(() => result.push(2));

    p.then(() => result.push(3));

    result.push(4);

    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });

  xtest('4: multiple .then() on same promise', async () => {
    const result = [];

    const p = Promise.resolve();

    p.then(() => {
      result.push(1);
      return Promise.resolve().then(() => result.push(2));
    });

    p.then(() => result.push(3));

    setTimeout(() => result.push(4), 0);

    result.push(5);

    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });

  xtest('5: interleaving Microtasks from two Macrotasks', async () => {
    const result = [];

    result.push(1);

    setTimeout(() => {
      result.push(2);
      Promise.resolve().then(() => result.push(3));
      result.push(4);
    }, 0);

    Promise.resolve().then(() => {
      result.push(5);
      setTimeout(() => {
        result.push(6);
        Promise.resolve().then(() => result.push(7));
      }, 0);
    });

    result.push(8);

    await flushAllAsync();
    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });

  xtest('6: async/await illusion', async () => {
    const result = [];

    result.push(1);

    async function foo() {
      result.push(2);
      await null;
      result.push(3);
    }

    foo();

    Promise.resolve().then(() => result.push(4));

    setTimeout(() => result.push(5));

    result.push(6);

    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });

  xtest('7: double Microtask trap', async () => {
    const result = [];

    Promise.resolve()
      .then(() => {
        result.push(1);
        return Promise.resolve().then(() => {
          result.push(2);
        });
      })
      .then(() => {
        result.push(3);
      });

    result.push(4);

    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });

  xtest('8: synchronously resolved outer promise', async () => {
    const result = [];

    let resolveOuter;

    const outer = new Promise(res => {
      resolveOuter = res;
    });

    Promise.resolve().then(() => result.push(1));

    outer
      .then(() => {
        result.push(2);
        return Promise.resolve().then(() => result.push(3));
      })
      .then(() => result.push(4));

    result.push(5);

    resolveOuter();

    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });

  xtest('9: three layers of async', async () => {
    const result = [];

    result.push(1);

    setTimeout(() => {
      result.push(2);
      Promise.resolve().then(() => {
        result.push(3);
        setTimeout(() => result.push(4));
      });
    }, 0);

    Promise.resolve()
      .then(() => {
        result.push(5);
        return Promise.resolve().then(() => {
          result.push(6);
          setTimeout(() => result.push(7));
        });
      })
      .then(() => result.push(8));

    result.push(9);

    await flushAllAsync();
    await flushAllAsync();

    const expected = [
      // Fill in your predicted order
    ];

    expect(result).toEqual(expected);
  });
});
