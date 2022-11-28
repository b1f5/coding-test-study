// @ts-check
/**
 * @param {string} dartResult 점수|보너스|[옵션]으로 이루어진 문자열 3세트
 * @returns {number} 총점수
 */
function solution(dartResult) {
  // 보너스와 옵션의 점수를 각각 할당해놓는다.
  const BONUS = { S: 1, D: 2, T: 3 };
  const OPTION = { "#": -1, "": 1, "*": 2 };

  // 각 세트를 구성하는 정규표현식을 만든다.
  const setRegExp = /(\d{1,2})([SDT])([*#]?)/g;

  // matchAll를 사용해 세트별로 분리하고 각 세트를 점수, 보너스, 옵션으로 분리한 이차원 배열로 만든다.
  // 예) [
  //       [ '1S', '1', 'S', '', index: 0, input: '1S2D*3T', groups: undefined ],
  //       [ '2D*', '2', 'D', '*', index: 2, input: '1S2D*3T', groups: undefined ],
  //       [ '3T', '3', 'T', '', index: 5, input: '1S2D*3T', groups: undefined ]
  //     ]
  const sets = [...dartResult.matchAll(setRegExp)];

  // 점수를 기록할 배열을 만든다.
  const scores = [];

  // 각 세트를 순회한다.
  sets.forEach((set, i) => {
    // 현재 세트에서 점수, 보너스, 옵션에 해당하는 값만 잘라낸다. 예) [ '1', 'S', '' ]
    const [score, bonus, option] = set.slice(1, 4);
    // 현재 점수를 scores 배열에 넣는다.
    scores.push(Number(score));
    // 현재 점수에 보너스와 옵션 점수를 반영한다.
    scores[i] = Math.pow(scores[i], BONUS[bonus]) * OPTION[option];
    // 옵션이 "*"이고 이전 점수가 존재한다면 옵션 점수를 반영한다.
    if (option === "*" && scores[i - 1]) scores[i - 1] *= OPTION[option];
  });

  // 점수들을 전부 더한다.
  const totalScore = scores.reduce((acc, cur) => acc + cur);

  return totalScore;
}
