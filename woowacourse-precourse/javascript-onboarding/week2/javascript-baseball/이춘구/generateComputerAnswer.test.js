const generateComputerAnswer = require("./generateComputerAnswer");

test("컴퓨터의 수를 생성하는 함수 테스트", () => {
  const result = generateComputerAnswer();

  expect(result).toHaveLength(3);
  expect(result.join("")).toMatch(/^[1-9]+$/);
  expect(Array.from(new Set(result))).toHaveLength(3);
});
