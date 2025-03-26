import calculateTotalCost from './calculateTotalCost';

describe('calculateTotalCost', () => {
  test('Verify that the total cost is calculated correctly for positive paint and labor costs', () => {
    expect(calculateTotalCost(100, 50)).toBe(150);
    expect(calculateTotalCost(200, 75)).toBe(275);
    expect(calculateTotalCost(150, 100)).toBe(250);
  });

  test('Verify that the total cost returns 100 the paint cost is 100 and labor cost is 0', () => {
    expect(calculateTotalCost(100, 0)).toBe(100);
  });
  
    test('Verify that the total cost returns 0 when both paint and labor costs are 0', () => {
    expect(calculateTotalCost(0, 0)).toBe(0);   
  } );
    
  test('Verify that the total cost returns -50 when the paint cost is -100 and labor cost is 50', () => {
    expect(calculateTotalCost(-100, 50)).toBe(-50);
  });
});
