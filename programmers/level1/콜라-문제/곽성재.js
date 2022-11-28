function solution(a, b, n) {
  let answer = 0;
  let restBottle = n;
  while (restBottle >= a) {
    const returnBottle = Math.floor(restBottle / a) * b;
    answer += returnBottle;
    restBottle = (restBottle % a) + returnBottle;
  }
  return answer;
}

console.log(solution(2, 1, 20));
console.log(solution(3, 1, 20));
