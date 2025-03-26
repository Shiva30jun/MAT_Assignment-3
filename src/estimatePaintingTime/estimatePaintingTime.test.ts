import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  
  test('Verify that the painting time is calculated correctly for positive values of area and painting speed', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });
  
  test('Verify that the painting time returns Infinity when painting speed is 0', () => {
    expect(estimatePaintingTime(100, 0)).toBe(Infinity);
  });

  test('Verify that the painting time is 0 when the area is 0', () => {
    expect(estimatePaintingTime(0, 10)).toBe(0);
  });
  
  test('Verify that the painting time is calculated correctly for small area and painting speed values', () => {
    expect(estimatePaintingTime(0.01, 0.1)).toBeCloseTo(0.1);
  });
  
});

