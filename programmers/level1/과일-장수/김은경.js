function solution(k, m, score) {
  let answer = 0;
  let sortedScore = score.sort();
  while (sortedScore.length >= m) {
    answer = answer + getPrice(sortedScore, m);
  }
  return answer;
}

function getPrice(array, m) {
  const temp = array.splice(array.length - m, m);
  return Math.min(...temp) * m;
}

// expected result : 8
console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));

// expected result : 33
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));
