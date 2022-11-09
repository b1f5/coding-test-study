const { matchNumbers } = require('../src/game');

describe('matchNumbers -> 정답과 유저의 입력값을 대조하며 결과를 맵핑하는 함수', () => {
  const goal = [2, 5, 6];

  it('정답에 입력값의 요소를 하나도 포함하지 않는다면 undefined을 반환한다.', () => {
    const subject = '179';

    const result = matchNumbers(goal, subject);
    expect(result).toBeUndefined();
  });
  it('정답과 입력값을 비교한 매칭 결과를 가진 맵 구조를 반환한다.', () => {
    const subject = '152';

    const map = matchNumbers(goal, subject);

    const result = {};
    map.forEach((value, key) => {
      result[key] = value;
    });

    expect(result).toHaveProperty('스트라이크', 1);
    expect(result).toHaveProperty('볼', 1);
  });
});
