const { validateInput } = require('../src/utils');

describe('validateInput', () => {
  describe('isTerminationCode가 주어질 때', () => {
    let input2 = true;

    it('입력값이 게임 재진행(1) 혹은 종료(2) 코드와 일치한다면 true를 반환한다.', () => {
      const input1 = '1';
      const result = validateInput(input1, input2);
      expect(result).toBe(true);
    });
    it('입력값이 게임 재진행(1) 혹은 종료(2) 코드와 불일치한다면 false를 반환한다.', () => {
      const input1 = '3';
      const result = validateInput(input1, input2);
      expect(result).toBe(false);
    });
  });
  describe('isTerminationCode가 없을 때', () => {
    let input2 = false;

    it('입력값이 0부터 9까지의 중복되지 않는 세자리 숫자라면 true를 반환한다.', () => {
      const input1 = '123';
      const result = validateInput(input1, input2);
      expect(result).toBe(true);
    });
    it('입력값이 3자리 숫자가 아니거나 혹은 중복된 값을 가진다면 false를 반환한다.', () => {
      const input1 = '11';
      const result = validateInput(input1, input2);
      expect(result).toBeFalsy();
    });
  });
});
