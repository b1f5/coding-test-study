const { Random } = require('@woowacourse/mission-utils');
const { RANDOM_NUMBER } = require('./config');

const randomGoalNumber = function () {
  const { from, to, pick } = RANDOM_NUMBER;
  return Random.pickUniqueNumbersInRange(from, to, pick);
};

/**
 * 유저 입력값의 유효성 체크 함수
 * 오로지 숫자로 이루어진 중복없는 세자리 수
 * @param {string} inputStr 유저가 제시한 임의의 세자리 수, ex.'245'
 * @returns {boolean} 유효성 검사 결과
 */
const validateInput = function (inputStr) {
  return inputStr.match('\\d{3}') && new Set(inputStr).size === 3;
};

/**
 *
 * @param {Map<string, number>} result 스트라이크와 볼의 수 매칭 결과
 * @returns {string} 출력값으로 반환할 게임 결과 문자열
 */
const convertToStr = function (result) {
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
