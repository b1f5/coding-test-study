const Utils = require('@woowacourse/mission-utils');
const { interactiveMode } = require('../src/game');

describe('interactiveMode -> 유저의 입력값을 유효성 검사로 필터링한 후 반환하는 함수', () => {
  Utils.Console.readLine = jest.fn();
  const readLine = Utils.Console.readLine;

  beforeEach(() => {
    readLine.mockClear();
  });

  describe('flag(기본값 false)를 받지 않은 경우 -> 게임 중 멘트', () => {
    const input1 = '숫자를 입력해주세요 : ';

    it('정답을 맞추기까지 일반 멘트를 출력한다.', async () => {
      interactiveMode(input1);

      expect(readLine).toBeCalledTimes(1);
      expect(readLine).toBeCalledWith(input1, expect.any(Function));
    });

    it('유저의 입력값이 3자리의 중복없는 숫자로 이루어지지 않은 경우 에러를 반환한다.', () => {
      readLine.mockRejectedValue(new Error('입력값 오류'));

      expect(interactiveMode(input1)).rejects.toThrow('입력값 오류');
    });
    it('유저의 입력값이 3자리의 중복없는 숫자로 이루어진 경우 그대로 반환한다.', async () => {
      const answer = '123';
      readLine.mockResolvedValue(answer);

      expect(interactiveMode(input1)).resolves.toBe(answer);
    });
  });

  describe('flag(true)를 받은 경우 -> 게임 최종 멘트', () => {
    const input1 =
      '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n';
    const input2 = true;

    it('정답을 맞출 시 최종 멘트를 출력한다.', async () => {
      interactiveMode(input1);

      expect(readLine).toBeCalledTimes(1);
      expect(readLine).toBeCalledWith(input1, expect.any(Function));
    });

    it('유저의 입력값이 재실행(1) 혹은 종료(2) 코드로 이루어지지 않은 경우 에러를 반환한다.', () => {
      readLine.mockRejectedValue(new Error('입력값 오류'));

      expect(interactiveMode(input1, input2)).rejects.toThrow('입력값 오류');
    });

    it('유저의 입력값이 재실행(1) 혹은 종료(2) 코드로 이루어진 경우 그대로 반환한다.', async () => {
      const answer = '1';
      readLine.mockResolvedValue(answer);

      expect(interactiveMode(input1, input2)).resolves.toBe(answer);
    });
  });
});
