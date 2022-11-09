const { convertToStr } = require('../src/utils');

describe('convertToStr -> 매칭 결과를 출력 패턴에 맞게 문자열로 변환하는 함수', () => {
  it('인자가 undefined이라면 "낫싱"을 반환한다.', () => {
    const input = undefined;
    const result = convertToStr(input);

    expect(result).toBe('낫싱');
  });
  it('인자로 스트라이크 혹은 볼의 수를 가진 맵이 전달된다면 값+키 형태의 문자열로 반환한다.', () => {
    const input = new Map().set('스트라이크', 3);
    const result = convertToStr(input);

    expect(result).toBe('3스트라이크');
  });
  it('인자로 스트라이크와 볼의 수를 가진 맵이 전달된다면 중간에 공백으로 나눈 형태의 문자열을 반환한다.', () => {
    const input = new Map().set('스트라이크', 2).set('볼', 1);
    const result = convertToStr(input);

    expect(result).toBe('1볼 2스트라이크');
  });
  it('인자로 스트라이크와 볼의 수를 가진 맵이 전달된다면 볼이 먼저 오도록 정렬한 형태의 문자열을 반환한다.', () => {
    const input = new Map().set('스트라이크', 1).set('볼', 1);
    const result = convertToStr(input);

    expect(result).toBe('1볼 1스트라이크');
  });
});
