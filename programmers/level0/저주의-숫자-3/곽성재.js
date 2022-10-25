function solution(n) {
  var answer = 0;
  for (let i = 0; i < n; i++) {
    answer++;
    while (
      answer % 3 === 0 ||
      answer.toString().includes("3")
    ) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(7));
console.log(solution(10));
console.log(solution(12));
console.log(solution(15));
console.log(solution(40));
