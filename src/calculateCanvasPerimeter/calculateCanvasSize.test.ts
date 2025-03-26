import calculateCanvasSize from "./calculateCanvasSize";

describe("calculateCanvasSize", () => {
  test("returns correct result", () => {
    const result = calculateCanvasSize("10", "100");

    expect(result).toEqual(1000);
  })

    test("calculates area correctly for given length and width", () => {
    const result = calculateCanvasSize("5", "5"); //  
    expect(result).toEqual(25);

    })

});
