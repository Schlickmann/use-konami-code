const functions = require('./App');

// Fake function simulating a summation function
const sum = jest.fn((a,b) => a + b);

describe('First test suite', () => {
  it('should sum 5 + 2 and return 7', () => {
    const value = sum(5,2);

    expect(value).toBe(7);
    expect(sum).toHaveBeenCalledTimes(1);
    expect(sum).toHaveBeenCalledWith(5, 2);
  });

  it('should return a string with a dolar sign plus shipping and subtotal added together', () => {
    expect(functions.total(5, 43)).toBe("$48");
  });
});