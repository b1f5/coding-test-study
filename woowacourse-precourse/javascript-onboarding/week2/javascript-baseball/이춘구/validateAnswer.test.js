const validateAnswer = require("./validateAnswer");

describe("사용자의 입력값 검증 테스트", () => {
  test("빈문자열이 들어온 경우 false 반환", () => {
    const input = "";
    const result = validateAnswer(input);

    expect(result).toBe(false);
  });

  test("1~9가 아닌 값이 섞여 들어온 경우 false 반환", () => {
    const input = "o23";
    const result = validateAnswer(input);

    expect(result).toBe(false);
  });

  test("3글자 이상인 값이 들어온 경우 false 반환", () => {
    const input = "1234";
    const result = validateAnswer(input);

    expect(result).toBe(false);
  });

  test("중복된 값이 포함된 경우 false 반환", () => {
    const input = "113";
    const result = validateAnswer(input);

    expect(result).toBe(false);
  });

  test("1~9 중 중복되지 않은 세자리의 수로 구성된 값이 들어온 경우 true 반환", () => {
    const input = "123";
    const result = validateAnswer(input);

    expect(result).toBe(true);
  });
});
