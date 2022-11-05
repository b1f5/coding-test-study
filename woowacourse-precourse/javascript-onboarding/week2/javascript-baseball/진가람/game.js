const { Console } = require('@woowacourse/mission-utils');
const { MATCH_STATUS, SIGN } = require('./config');
const { validateInput, convertToStr, randomGoalNumber } = require('./utils');

const playRoutine = function (goal_number) {
  console.log(goal_number);

  Console.readLine('숫자를 입력해주세요 : ', (answer) => {
    if (!validateInput(answer)) throw new Error('입력값 오류');

    const comparedResult = matchNumbers(goal_number, answer);

    const { goal, notFound } = MATCH_STATUS;
    let match_result;
    if (!comparedResult) match_result = notFound;
    else match_result = convertToStr(comparedResult);

    Console.print(match_result);
    match_result === goal ? printGameOver() : playRoutine(goal_number);
  });
};

function printGameOver() {
  Console.readLine(
    '3개의 숫자를 모두 맞히셨습니다! 게임 종료\n게임을 새로 시작하려면 1, 종료하려면 2를 입력하세요.\n',
    (answer) => {
      const { restart, close } = SIGN;
      if (parseInt(answer) === restart) return playRoutine(randomGoalNumber());
      if (parseInt(answer) === close) Console.close();
      else throw new Error('입력값 오류');
    }
  );
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

  const { exact, has } = MATCH_STATUS;

  for (let i = 0; i < subject.length; i++) {
    let TARGET_NUMBER = parseInt(subject[i]);

    if (!SET_GOAL.has(TARGET_NUMBER)) continue;

    TARGET_NUMBER === goal[i]
      ? setMatchResult(MATCH_RESULT, exact)
      : setMatchResult(MATCH_RESULT, has);
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
};
