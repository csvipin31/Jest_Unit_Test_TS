import { calculateInterest } from '../calculateInterest'; 

describe('calculateInterest Function Tests', () => {

  test('calculates interest with positive principal and interest rates', () => {
    expect(calculateInterest(1000, 0.05)).toBeCloseTo(50, 2);
    expect(calculateInterest(5000, 0.02)).toBeCloseTo(100, 2);
    expect(calculateInterest(10000, 0.035)).toBeCloseTo(350, 2);
  });


  test('returns 0 for 0% interest rate', () => {
    expect(calculateInterest(1000, 0)).toBeCloseTo(0, 2);
  });

  test('returns 0 for 0 principal amount', () => {
    expect(calculateInterest(0, 0.04)).toBeCloseTo(0, 2);
  });

  test('calculates interest with small principal and interest rate', () => {
    expect(calculateInterest(10, 0.0001)).toBeCloseTo(0.001, 3);
    expect(calculateInterest(1, 0.0005)).toBeCloseTo(0.0005, 4);
  });

  test('handles negative principal or interest rate', () => {
    expect(calculateInterest(-1000, 0.05)).toBeCloseTo(-50, 2); 
    expect(calculateInterest(1000, -0.05)).toBeCloseTo(-50, 2);
    expect(calculateInterest(-1000, -0.05)).toBeCloseTo(50, 2);
  });

  test('handles large principal and high interest rate', () => {
    expect(calculateInterest(1000000000, 0.10)).toBeCloseTo(100000000, 2);
    expect(calculateInterest(500000000, 0.12)).toBeCloseTo(60000000, 2);
  });

  test('handles near 100% and higher interest rates', () => {
    expect(calculateInterest(1000, 99.99)).toBeCloseTo(99990, 2);
    expect(calculateInterest(5000, 100)).toBeCloseTo(500000, 2);
    expect(calculateInterest(2000, 99.999)).toBeCloseTo(199998, 2);
    expect(calculateInterest(100, 99.9999)).toBeCloseTo(9999.99, 3);
  });

  test('handles floating-point precision issues', () => {
    expect(calculateInterest(0.1, 0.2)).toBeCloseTo(0.02, 5);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 5); 
  });

  test('correctly rounds the result to two decimal places', () => {
    expect(calculateInterest(100, 0.05)).toBeCloseTo(5.00, 2);
    expect(calculateInterest(1.005, 0.0005)).toBeCloseTo(0.001, 3);
  });
});
