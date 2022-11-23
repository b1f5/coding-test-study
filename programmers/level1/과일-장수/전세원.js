function solution(k, m, score) {
  var answer = 0;
  const sortScore = score.sort();
  console.log(sortScore);
  const box = Math.floor(score.length / m);
  for (i = 0; i < box; i++) {
    let soldApple = sortScore.splice(-m, m);
    answer += soldApple[0] * m;
  }
  return answer;
}
