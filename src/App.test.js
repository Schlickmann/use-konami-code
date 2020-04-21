const sum = require('./App');

describe('First test suite', () => {
  it('should sum 5 + 2 and return 7', () => {
    const value = sum(5,2);

    expect(value).toBe(7);
  });
});