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

test('should return XL for a value of 40', () => {
  expect(roman(40)).toEqual('XL');
});

test('should return L for a value of 50', () => {
  expect(roman(50)).toEqual('L');
});

test('should return XC for a value of 90', () => {
  expect(roman(90)).toEqual('XC');
});

test('should return C for a value of 100', () => {
  expect(roman(100)).toEqual('C');
});

test('should return CD for a value of 400', () => {
  expect(roman(400)).toEqual('CD');
});

test('should return D for a value of 500', () => {
  expect(roman(500)).toEqual('D');
});

test('should return CM for a value of 900', () => {
  expect(roman(900)).toEqual('CM');
});