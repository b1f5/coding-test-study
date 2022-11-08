const getHint = require("./getHint");

describe("사용자의 수와 컴퓨터의 수를 비교해서 힌트를 만드는 함수", () => {
  const computer = [1, 2, 3];

  test("숫자와 위치가 일치하는 값이 하나도 없을 때", () => {
    const user = "456";
    const result = getHint(computer, user);

    expect(result).toBe("낫싱");
  });

  test("숫자는 일치하고 위치는 일치하지 않는 값이 하나 있을 때", () => {
    const user = "451";
    const result = getHint(computer, user);

    expect(result).toBe("1볼");
  });

  test("숫자와 위치가 일치하는 값이 하나 있을 때", () => {
    const user = "156";
    const result = getHint(computer, user);

    expect(result).toBe("1스트라이크");
  });

  test("숫자만 일치하는 값이 하나, 숫자와 위치가 일치하는 값이 하나 있을 때,", () => {
    const user = "152";
    const result = getHint(computer, user);

    expect(result).toBe("1볼 1스트라이크");
  });

  test("모든 값의 숫자와 위치가 일치할 때", () => {
    const user = "123";
    const result = getHint(computer, user);

    expect(result).toBe("3스트라이크");
  });
});
