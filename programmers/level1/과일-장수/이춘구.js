// @ts-check
/**
 * @param {number} k 사과의 최대 점수
 * @param {number} m 한 상자에 들어가는 사과의 수
 * @param {number[]} score 사과들의 점수
 * @returns {number} 최대 이익
 */
function solution(k, m, score) {
  const sortedScores = score.sort((a, b) => b - a);

  const boxes = [];
  let box = [];
  for (let i = 0; i < sortedScores.length; i += 1) {
    if (sortedScores.length < m) break;
    box.push(sortedScores[i]);

    if (box.length === m) {
      boxes.push(box);
      box = [];
      continue;
    }
  }

  const answer = boxes.reduce((profit, box) => {
    return profit + box[m - 1] * m;
  }, 0);

  return answer;
}

function solution(k, m, score) {
  const sortedScores = score.sort((a, b) => b - a);
  let answer = 0;

  for (let i = m - 1; i < sortedScores.length; i += m) {
    answer += sortedScores[i] * m;
  }

  return answer;
}
