import estimatePaintingTime from './estimatePaintingTime';

describe('estimatePaintingTime', () => {
  
  test('Verify that the painting time is calculated correctly for positive values of area and painting speed', () => {
    expect(estimatePaintingTime(100, 10)).toBe(10);
    expect(estimatePaintingTime(200, 20)).toBe(10);
    expect(estimatePaintingTime(150, 15)).toBe(10);
  });
  
});

