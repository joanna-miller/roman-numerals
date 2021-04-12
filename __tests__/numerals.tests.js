const roman = require('./../src/numerals.js');

test('should return an empty string with input of 0', () => {
  expect(roman(0)).toEqual('');
});

test('should return I for a value of 1', () => {
  expect(roman(1)).toEqual('I');
  expect(roman(3)).toEqual('III');
});

test('should return IV for a value of 4', () => {
  expect(roman(4)).toEqual('IV');
});

test('should return V for a value of 5', () => {
  expect(roman(5)).toEqual('V');
});

test('should return IX for a value of 9', () => {
  expect(roman(9)).toEqual('IX');
});

test('should return X for a value of 10', () => {
  expect(roman(10)).toEqual('X');
});

