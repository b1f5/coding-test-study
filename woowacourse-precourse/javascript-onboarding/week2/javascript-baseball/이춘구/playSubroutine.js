const { Console } = require("@woowacourse/mission-utils");

const { MESSAGE, GAME } = require("./constant");
const getHint = require("./getHint");
const validateAnswer = require("./validateAnswer");

/**
 * 사용자로부터 입력을 받고 입력값과 컴퓨터의 수를 비교한 뒤 힌트를 만들어 확인하는 걸 반복하는 함수
 * @param {number[]} computerAnswer 컴퓨터의 수
 * @param {string} hint 힌트
 */
function playSubroutine(computerAnswer, hint = "") {
  if (hint === GAME.endCondition) askReplayOrStop();

  Console.readLine(MESSAGE.requireAnswer, (answer) => {
    const isValid = validateAnswer(answer);
    if (!isValid) throw new Error();

    const hint = getHint(computerAnswer, answer);
    Console.print(hint);

    playSubroutine(computerAnswer, hint);
  });
}

module.exports = playSubroutine;
const askReplayOrStop = require("./askReplayOrStop");
