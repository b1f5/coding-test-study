const { HINT } = require("./constant");

/**
 * 컴퓨터의 수와 사용자의 수를 비교해 힌트를 만들어 반환하는 함수
 * @param {number[]} computerAnswer 컴퓨터의 수
 * @param {string} userAnswer 사용자의 수
 * @returns {string} 힌트
 */
function getHint(computerAnswer, userAnswer) {
  const matches = { ball: 0, strike: 0, nothing: 0 };
  const userNumbers = userAnswer.split("").map(Number);

  userNumbers.forEach((userNumber, userNumberIndex) => {
    const matchingIndex = computerAnswer.indexOf(userNumber);

    const isBall = matchingIndex !== userNumberIndex && matchingIndex !== -1;
    const isStrike = matchingIndex === userNumberIndex;
    const isNothing = matchingIndex === -1;

    if (isBall) matches.ball += 1;
    if (isStrike) matches.strike += 1;
    if (isNothing) matches.nothing += 1;
  });

  const ball = matches.ball !== 0 ? matches.ball + HINT.ball : "";
  const strike = matches.strike !== 0 ? matches.strike + HINT.strike : "";
  const space = ball !== "" && strike !== "" ? " " : "";
  const nothing = matches.nothing === userNumbers.length ? HINT.nothing : "";

  const hint = `${ball + space + strike + nothing}`;

  return hint;
}

module.exports = getHint;
