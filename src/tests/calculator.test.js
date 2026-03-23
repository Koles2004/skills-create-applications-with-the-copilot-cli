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

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

// --- Modulo ---
describe('modulo', () => {
  // Example from image: 5 % 2 = 1
  test('5 % 2 = 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('returns zero when a is exactly divisible by b', () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test('modulo with a negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with a negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('modulo where a is smaller than b', () => {
    expect(modulo(3, 10)).toBe(3);
  });

  // Edge case: modulo by zero
  test('throws an error when dividing by zero', () => {
    expect(() => modulo(5, 0)).toThrow('Division by zero is not allowed');
  });
});

// --- Power ---
describe('power', () => {
  // Example from image: 2 ^ 3 = 8
  test('2 ^ 3 = 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('any number to the power of 0 returns 1', () => {
    expect(power(99, 0)).toBe(1);
  });

  test('any number to the power of 1 returns itself', () => {
    expect(power(7, 1)).toBe(7);
  });

  test('raises a negative base to an even exponent gives positive result', () => {
    expect(power(-2, 4)).toBe(16);
  });

  test('raises a negative base to an odd exponent gives negative result', () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test('fractional exponent (square root via power)', () => {
    expect(power(9, 0.5)).toBeCloseTo(3);
  });
});

// --- Square Root ---
describe('squareRoot', () => {
  // Example from image: √16 = 4
  test('√16 = 4', () => {
    expect(squareRoot(16)).toBe(4);
  });

  test('√9 = 3', () => {
    expect(squareRoot(9)).toBe(3);
  });

  test('√0 = 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('√2 returns an irrational number approximately 1.414', () => {
    expect(squareRoot(2)).toBeCloseTo(1.414, 3);
  });

  test('√1 = 1', () => {
    expect(squareRoot(1)).toBe(1);
  });

  // Edge case: square root of a negative number
  test('throws an error for negative input', () => {
    expect(() => squareRoot(-1)).toThrow('Cannot compute square root of a negative number');
  });

  test('throws an error for large negative input', () => {
    expect(() => squareRoot(-100)).toThrow('Cannot compute square root of a negative number');
  });
});
