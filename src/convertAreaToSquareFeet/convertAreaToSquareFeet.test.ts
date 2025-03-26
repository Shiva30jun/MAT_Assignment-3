import convertAreaToSquareFeet from './convertAreaToSquareFeet';

describe('convertAreaToSquareFeet', () => {
  test('Verify that the area is correctly converted to square feet for positive values', () => {
    expect(convertAreaToSquareFeet(100)).toBeCloseTo(1076.39);
    expect(convertAreaToSquareFeet(200)).toBeCloseTo(2152.78);
    expect(convertAreaToSquareFeet(150)).toBeCloseTo(1614.585);
  });
  

  test('Verify that the area is 0 when the input area is 0', () => {
    expect(convertAreaToSquareFeet(0)).toBe(0);
  });
  

  test('should handle negative values correctly', () => {
    expect(convertAreaToSquareFeet(-100)).toBeCloseTo(-1076.39);
    expect(convertAreaToSquareFeet(-200)).toBeCloseTo(-2152.78);
    expect(convertAreaToSquareFeet(-150)).toBeCloseTo(-1614.585);
  });
});
