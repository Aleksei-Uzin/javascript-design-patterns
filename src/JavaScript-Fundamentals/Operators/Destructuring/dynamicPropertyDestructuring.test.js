describe('Computed Property Name Destructuring', () => {
  it('Should extract properties using dynamic keys', () => {
    const obj = { name: 'Aleksei', role: 'Frontend Engineer', active: true };
    const key = 'role';
    const { [key]: extractedValue } = obj;

    expect(extractedValue).toBe('Frontend Engineer');
  });

  it('Should support default values when property is missing', () => {
    const obj = { name: 'Aleksei', active: true };
    const key = 'role';
    const { [key]: role = 'Software Engineer' } = obj;

    expect(role).toBe('Software Engineer');
  });

  it('Compares destructuring vs bracket notation', () => {
    const obj = { name: 'Aleksei', role: 'Frontend Engineer', active: true };
    const key = 'role';

    // Traditional bracket notation
    const traditionalValue = obj[key];
    // Dynamic destructuring approach
    const { [key]: destructuredValue } = obj;

    expect(traditionalValue).toBe('Frontend Engineer');
    expect(destructuredValue).toBe('Frontend Engineer');
    expect(traditionalValue).toBe(destructuredValue);
  });

  it('Shows practical use in functions', () => {
    function getProperty(obj, propertyName) {
      const { [propertyName]: value } = obj;
      return value;
    }

    const user = { id: 42, username: 'aleksei_dev', active: true };

    expect(getProperty(user, 'id')).toBe(42);
    expect(getProperty(user, 'username')).toBe('aleksei_dev');
    expect(getProperty(user, 'nonexistent')).toBeUndefined();
  });

  it('Works with multiple computed properties', () => {
    const config = { apiUrl: 'https://api.example.com', timeout: 5000, retries: 3 };
    const urlKey = 'apiUrl';
    const timeoutKey = 'timeout';

    // Extract multiple properties using computed keys
    const { [urlKey]: url, [timeoutKey]: maxTimeout } = config;

    expect(url).toBe('https://api.example.com');
    expect(maxTimeout).toBe(5000);
  });
});
