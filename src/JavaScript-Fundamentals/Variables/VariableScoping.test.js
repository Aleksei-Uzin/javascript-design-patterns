/* eslint-disable */

describe('JavaScript Variable Scoping: var vs let/const', () => {
  it('demonstrates var function scope vs let/const block scope', () => {
    function scopeComparison() {
      if (true) {
        var x = 10; // function-scoped
        let y = 20; // block-scoped
        const z = 30; // block-scoped
      }

      expect(x).toBe(10); // var accessible outside block
      expect(() => y).toThrow(ReferenceError); // let throws ReferenceError
      expect(() => z).toThrow(ReferenceError); // const throws ReferenceError
    }

    scopeComparison();
  });

  it('shows var ignores nested block boundaries', () => {
    function deeplyNested() {
      for (let i = 0; i < 1; i++) {
        if (true) {
          var message = 'accessible everywhere';
        }
      }

      // var "bubbles up" through all nested blocks to function scope
      expect(message).toBe('accessible everywhere');
    }

    deeplyNested();
  });

  it('demonstrates var hoisting and variable shadowing', () => {
    var outerVar = 'outer';

    function shadowingExample() {
      // var declaration is hoisted but not initialized (undefined)
      expect(outerVar).toBeUndefined();

      var outerVar = 'inner'; // shadows outer variable
      expect(outerVar).toBe('inner');
    }

    shadowingExample();
  });

  it('demonstrates let Temporal Dead Zone behavior', () => {
    let outerLet = 'outer';

    function temporalDeadZone() {
      // let is hoisted but in Temporal Dead Zone - throws ReferenceError
      expect(() => {
        outerLet; // accessing before declaration
      }).toThrow(ReferenceError);

      let outerLet = 'inner';
      expect(outerLet).toBe('inner');
    }

    temporalDeadZone();
  });
});
