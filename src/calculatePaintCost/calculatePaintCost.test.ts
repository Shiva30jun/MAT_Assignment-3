import calculatePaintCost from './calculatePaintCost';

describe('calculatePaintCost', () => {
  test('should calculate paint cost correctly for positive values', () => {
    expect(calculatePaintCost(10, 5)).toBe(50);
    expect(calculatePaintCost(20, 7.5)).toBe(150);
    expect(calculatePaintCost(15, 10)).toBe(150);
  });

  test('should return 0 when paint required is 0', () => {
    expect(calculatePaintCost(0, 5)).toBe(0);
  });

  test('should return 0 when cost per liter is 0', () => {
    expect(calculatePaintCost(10, 0)).toBe(0);
  });

  test('should handle negative values correctly', () => {
    expect(calculatePaintCost(-10, 5)).toBe(-50);
    expect(calculatePaintCost(10, -5)).toBe(-50);
    expect(calculatePaintCost(-10, -5)).toBe(50);
  });

  test("Verify that the paint cost is 0 when both paint required and cost per liter are 0", () => {
    expect(calculatePaintCost(0, 0)).toBe(0);
  });

  test('Verify that the paint cost is calculated correctly for fractional values of paint required and cost per liter', () => {
    expect(calculatePaintCost(2.5, 4.5)).toBe(11.25);
  });
  
});
