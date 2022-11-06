const { Random } = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER, MATCH_STATUS } = require('./config');

const randomGoalNumber = function () {
  const { from, to, pick } = RANDOM_NUMBER;
  return Random.pickUniqueNumbersInRange(from, to, pick);
};

/**
 * 유저 입력값의 유효성 체크 함수
 * @param {string} inputStr 유저가 제시한 임의의 세자리 수, ex.'245'
 * @param {boolean} isTerminationCode 종료 코드인지 확인하기 위한 플래그
 * @returns {boolean} 유효성 검사 결과
 */
const validateInput = function (inputStr, isTerminationCode) {
  if (isTerminationCode) {
    const RESTART_CODE = 1;
    const CLOSE_CODE = 2;
    const INPUT = parseInt(inputStr, 10);

    return INPUT === RESTART_CODE || INPUT === CLOSE_CODE;
  }
  return inputStr.match('\\d{3}') && new Set(inputStr).size === 3;
};

/**
 *
 * @param {Map<string, number> | undefined} result 스트라이크와 볼의 수 매칭 결과
 * @returns {string} 출력값으로 반환할 게임 결과 문자열
 */
const convertToStr = function (result) {
  if (!result) return MATCH_STATUS.notFound;

  const entries = [...result.entries()];
  const sortedByStatus = entries.sort((a, b) => {
    if (a[0] < b[0]) return -1;
  });

  return sortedByStatus
    .reduce((result, [status, num]) => (result += `${num}${status} `), '')
    .trimEnd();
};

module.exports = {
  randomGoalNumber,
  validateInput,
  convertToStr,
};
