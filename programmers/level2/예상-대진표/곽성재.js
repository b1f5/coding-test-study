function solution(n, a, b) {
  let answer = 1;
  let nextA = a % 2 === 0 ? a / 2 : (a + 1) / 2;
  let nextB = b % 2 === 0 ? b / 2 : (b + 1) / 2;
  while (nextA !== nextB) {
    answer++;
    nextA = nextA % 2 === 0 ? nextA / 2 : (nextA + 1) / 2;
    nextB = nextB % 2 === 0 ? nextB / 2 : (nextB + 1) / 2;
  }
  return answer;
}
