describe('Function.prototype.bind() with new', () => {
  it('Demonstrates "must be called with new"', () => {
    function OnlyWithNew() {
      if (new.target === undefined) {
        throw new TypeError('Must be called with new');
      }
    }

    const Bound = OnlyWithNew.bind(null);
    const instance = new Bound();

    expect(instance).toBeInstanceOf(OnlyWithNew);
    expect(() => Bound()).toThrow(TypeError);
  });

  it('Demonstrates callable only without new', () => {
    function OnlyWithoutNew() {
      if (new.target) {
        throw new TypeError('Cannot be used as a constructor');
      }
    }

    const Bound = OnlyWithoutNew.bind(null);

    expect(() => Bound()).not.toThrow();
    expect(() => new Bound()).toThrow(TypeError);
  });

  it('Demonstrates normal functions allow both new and direct call', () => {
    function Foo() {}

    const Bound = Foo.bind(null);

    expect(() => new Bound()).not.toThrow();
    expect(() => Bound()).not.toThrow();
  });

  describe('Classes automatically enforce "only with new"', () => {
    class Product {
      constructor(name, price) {
        this.name = name;
        this.price = price;
        this.constructedBy = new.target.name;
      }
    }

    it('Ignores bound thisArg when constructed', () => {
      // The thisArg's value doesn't matter because it's ignored
      const BoundProduct = Product.bind({ ignored: true }, 'apple');
      const p = new BoundProduct(5);

      expect(p.name).toBe('apple');
      expect(p.price).toBe(5);
      expect(p.constructedBy).toBe('Product');

      expect(p).toBeInstanceOf(BoundProduct);
      expect(p).toBeInstanceOf(Product); // correct prototype chain

      // Cannot call without new
      expect(() => BoundProduct()).toThrow(TypeError);
    });

    it('Demonstrates working with multiple layers of binding', () => {
      const Bound1 = Product.bind(null, 'apple');
      const Bound2 = Bound1.bind(null, 5);

      const p = new Bound2();

      expect(p.name).toBe('apple');
      expect(p.price).toBe(5);
      expect(p.constructedBy).toBe('Product');
    });

    it('Bound class constructor name is prefixed with "bound "', () => {
      const BoundProduct = Product.bind(null);
      expect(BoundProduct.name).toBe('bound Product');
    });
  });
});
