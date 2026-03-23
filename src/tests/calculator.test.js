/**
 * Unit tests for calculator.js
 *
 * Covers all four basic arithmetic operations:
 *   - add      (Addition)
 *   - subtract (Subtraction)
 *   - multiply (Multiplication)
 *   - divide   (Division)
 *
 * Includes image-based examples and edge cases.
 */

const { add, subtract, multiply, divide } = require('../calculator');

// --- Addition ---
describe('add', () => {
  // Example from image: 2 + 3 = 5
  test('2 + 3 = 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds floating point numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4.0);
  });
});

// --- Subtraction ---
describe('subtract', () => {
  // Example from image: 10 - 4 = 6
  test('10 - 4 = 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracting a larger number gives a negative result', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  test('subtracting a negative number increases the value', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts floating point numbers', () => {
    expect(subtract(5.5, 2.5)).toBeCloseTo(3.0);
  });
});

// --- Multiplication ---
describe('multiply', () => {
  // Example from image: 45 * 2 = 90
  test('45 * 2 = 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(99, 0)).toBe(0);
  });

  test('multiplying by one returns the same number', () => {
    expect(multiply(8, 1)).toBe(8);
  });

  test('multiplies two negative numbers to get a positive', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and negative number to get a negative', () => {
    expect(multiply(6, -5)).toBe(-30);
  });

  test('multiplies floating point numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10.0);
  });
});

// --- Division ---
describe('divide', () => {
  // Example from image: 20 / 5 = 4
  test('20 / 5 = 4', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('dividing by one returns the same number', () => {
    expect(divide(7, 1)).toBe(7);
  });

  test('divides to produce a decimal result', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides negative numbers', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers to get a positive', () => {
    expect(divide(-15, -3)).toBe(5);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Division by zero is not allowed');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero is not allowed');
  });
});
