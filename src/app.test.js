const sum = require('./app');

test('properly adds two numbers together', () => {
  expect(sum(1, 2)).toBe(3);
});
