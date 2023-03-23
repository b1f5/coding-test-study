/**
 *
 * @param {number[]} answers
 * @returns {number[]}
 */
function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5]; // 5 => 0 ~ 4
  const second = [2, 1, 2, 3, 2, 4, 2, 5]; // 8 => 0 ~ 7
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10 => 0 ~ 9
  const score = [0, 0, 0];
  let score_first = 0;
  let score_second = 0;
  let score_third = 0;
  answers.forEach((v, i, arr) => {
    const answer = v;
    console.log(i % 5, i % 8, i % 10);
    if (answer === first[i % 5]) {
      score_first += 1;
    }
    if (answer === second[i % 8]) {
      score_second += 1;
    }
    if (answer === third[i % 10]) {
      score_third += 1;
    }
  });
  console.log(score_first, score_second, score_third);
  console.log(Math.max(score_first, score_second, score_third));
  const best = Math.max(score_first, score_second, score_third);
  if (best === score_first) answer.push(1);
  if (best === score_second) answer.push(2);
  if (best === score_third) answer.push(3);
  return answer;
}

// 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
// 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
// 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5,

console.log(solution([1, 2, 3, 4, 5]));
