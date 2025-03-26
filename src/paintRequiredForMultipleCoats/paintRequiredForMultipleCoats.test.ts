import paintRequiredForMultipleCoats from './paintRequiredForMultipleCoats';

describe('paintRequiredForMultipleCoats', () => {
  test('Verify that the paint required is calculated correctly for positive values of area, coverage per liter, and coats', () => {
    expect(paintRequiredForMultipleCoats(100, 10, 2)).toBe(20);
    expect(paintRequiredForMultipleCoats(200, 20, 3)).toBe(30);
    expect(paintRequiredForMultipleCoats(150, 15, 4)).toBe(40);
  });
  
  test('Verify that the paint required is 0 when the area is 0', () => {
    expect(paintRequiredForMultipleCoats(0, 10, 2)).toBe(0);
  });
  
});
