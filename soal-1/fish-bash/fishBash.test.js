const fishBash = require('./fishBash');

test('fishBash should return correct results', () => {
  expect(fishBash(15)).toEqual([
    1, 2, 'fish', 4, 'bash', 'fish', 7, 8, 'fish', 'bash', 11, 'fish', 13, 14, 'fish bash'
  ]);
});

test('fishBash should handle small numbers correctly', () => {
  expect(fishBash(5)).toEqual([1, 2, 'fish', 4, 'bash']);
});

test('fishBash should return empty array when n is 0', () => {
  expect(fishBash(0)).toEqual([]);
});

test('fishBash should handle single number correctly', () => {
  expect(fishBash(1)).toEqual([1]);
});