// k = 사과의 최대 점수
// m = 한 상자에 들어가는 사과의 수
// score = 사과들의 점수
function solution(k, m, score) {
  let answer = 0;

  // 내림차순으로 정렬
  score.sort((a, b) => b - a);

  for (let i = m - 1; i < score.length; i += m) {
    // m개씩 나눴을 때의 마지막 점수가 최솟값이므로
    // m과 m의 배수 번째의 점수를 곱해줌
    answer += score[i] * m;
  }

  return answer;
}
