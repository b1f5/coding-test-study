const { Console } = require('@woowacourse/mission-utils');
const { MATCH_STATUS, SIGN, LINES } = require('./config');
const { validateInput, convertToStr, randomGoalNumber } = require('./utils');

/**
 * 게임 기본 루틴 함수
 * @param {array} goal_number 컴퓨터가 생성한 임의의 정답, [3,7,1]
 * @returns {Promise<void>}
 */
const playRoutine = function (goal_number) {
  console.log(goal_number);

  return interactiveMode(LINES.on_progress)
    .then((answer) => {
      const COMPARED_RESULT = matchNumbers(goal_number, answer);
      const MATCH_RESULT = convertToStr(COMPARED_RESULT);

      Console.print(MATCH_RESULT);

      return MATCH_RESULT === MATCH_STATUS.goal
        ? printGameOver()
        : playRoutine(goal_number);
    })
    .catch((err) => {
      throw err;
    });
};

/**
 *
 * @param {string} lines 멘트 문구
 * @param {boolean} flag 유효성 함수 재사용을 위한 플래그
 * @returns {Promise<string>}
 */
function interactiveMode(lines, flag = false) {
  return new Promise((res, rej) => {
    Console.readLine(lines, (answer) => {
      if (!validateInput(answer, flag)) return rej(new Error('입력값 오류'));
      else res(answer);
    });
  });
}

function printGameOver() {
  return interactiveMode(LINES.final, true).then((res) => {
    const RESPONSE = parseInt(res);
    const SIGN_RESTART = 1;
    const SIGN_CLOSE = 2;
    if (RESPONSE === SIGN_RESTART) return playRoutine(randomGoalNumber());
    if (RESPONSE === SIGN_CLOSE) Console.close();
  });
}

/**
 *
 * @param {number[]} goal 컴퓨터가 생성한 임의의 세자리 수
 * @param {string} subject 유저가 제시한 임의의 세자리 수
 * @returns {Map<string, number> | undefined} 스트라이크와 볼의 수
 */
function matchNumbers(goal, subject) {
  const SET_GOAL = new Set(goal);
  const MATCH_RESULT = new Map();

  const MATCH_EXACT = '스트라이크';
  const MATCH_HAS = '볼';

  for (let i = 0; i < subject.length; i++) {
    let TARGET_NUMBER = parseInt(subject[i]);

    if (!SET_GOAL.has(TARGET_NUMBER)) continue;

    TARGET_NUMBER === goal[i]
      ? setMatchResult(MATCH_RESULT, MATCH_EXACT)
      : setMatchResult(MATCH_RESULT, MATCH_HAS);
  }
  return MATCH_RESULT.size ? MATCH_RESULT : undefined;
}

/**
 *
 * @param {Map<string, number>} map 숫자 매칭 결과를 가진 맵 자료구조
 * @param {string} status 스트라이크 혹은 볼
 * @returns {Map<string, number>} status 키값을 증가시킨 결과물
 */
function setMatchResult(map, match_status) {
  return map.set(match_status, map.get(match_status) + 1 || 1);
}

module.exports = {
  playRoutine,
  interactiveMode,
  matchNumbers,
};
