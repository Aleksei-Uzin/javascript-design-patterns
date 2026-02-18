describe('JSON.stringify Replacer Parameter', () => {
  describe('When provided as an Array', () => {
    it('Should only include properties that match the allowed keys', () => {
      const userProfile = {
        id: 101,
        username: 'Aleksei',
        email: 'aleksei@example.com',
        password_hash: 's3cr3t_hash_99',
        preferences: {
          theme: 'dark',
          notifications: true,
        },
        [Symbol('internal_id')]: 'ABC-123',
      };

      const allowedProps = ['username', 'email', 'preferences', 'theme'];
      const json = JSON.stringify(userProfile, allowedProps);

      expect(json).toBe(
        '{"username":"Aleksei","email":"aleksei@example.com","preferences":{"theme":"dark"}}',
      );
    });
  });

  describe('when provided as a Function', () => {
    it('Should use "this" context to access parent object properties', () => {
      const order = [
        { name: 'Laptop', price: 1200, isGift: false },
        { name: 'Headphones', price: 150, isGift: true },
      ];

      // 'this' refers to the object containing the current property
      const giftReplacer = function (key, value) {
        if (key === 'price' && this.isGift) {
          return 'Free';
        }
        return value;
      };

      const json = JSON.stringify(order, giftReplacer);

      expect(json).toBe(
        '[{"name":"Laptop","price":1200,"isGift":false},{"name":"Headphones","price":"Free","isGift":true}]',
      );
    });
  });
});
