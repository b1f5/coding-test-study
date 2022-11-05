const { Random } = require("@woowacourse/mission-utils");

/**
 * 컴퓨터의 수를 생성하는 함수
 * @returns {number[]} 1부터 9까지 서로 다른 수로 이루어진 3자리의 수
 */
function generateComputerAnswer() {
  const LENGTH = 3;
  const START_INCLUSIVE = 1;
  const END_INCLUSIVE = 9;
  const computerAnswer = [];

  while (computerAnswer.length < LENGTH) {
    const number = Random.pickNumberInRange(START_INCLUSIVE, END_INCLUSIVE);
    if (!computerAnswer.includes(number)) {
      computerAnswer.push(number);
    }
  }

  return computerAnswer;
}

module.exports = generateComputerAnswer;
