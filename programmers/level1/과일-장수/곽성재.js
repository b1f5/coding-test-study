function solution(k, m, score) {
  var answer = 0;

  const boxCount = Math.floor(score.length / m);

  const sortedArr = score.sort((a, b) => b - a);

  for (let i = 0; i < boxCount * m; i++) {
    if (i % m === m - 1) {
      answer += sortedArr[i] * m;
    }
  }

  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1])); // 8
console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])); // 33

/**
테스트 1 〉	통과 (0.20ms, 33.4MB)
테스트 2 〉	통과 (0.17ms, 33.6MB)
테스트 3 〉	통과 (0.22ms, 33.5MB)
테스트 4 〉	통과 (0.16ms, 33.4MB)
테스트 5 〉	통과 (0.16ms, 33.5MB)
테스트 6 〉	통과 (19.07ms, 42.3MB)
테스트 7 〉	통과 (23.98ms, 40.5MB)
테스트 8 〉	통과 (10.97ms, 37.2MB)
테스트 9 〉	통과 (23.72ms, 40.4MB)
테스트 10 〉	통과 (31.94ms, 41.7MB)
테스트 11 〉	통과 (240.17ms, 96.6MB)
테스트 12 〉	통과 (238.21ms, 97.4MB)
테스트 13 〉	통과 (267.64ms, 96.6MB)
테스트 14 〉	통과 (275.11ms, 97.5MB)
테스트 15 〉	통과 (278.63ms, 97.4MB)
테스트 16 〉	통과 (0.07ms, 33.5MB)
테스트 17 〉	통과 (0.15ms, 33.4MB)
테스트 18 〉	통과 (0.32ms, 33.5MB)
테스트 19 〉	통과 (0.22ms, 33.6MB)
테스트 20 〉	통과 (0.34ms, 33.6MB)
테스트 21 〉	통과 (0.16ms, 33.4MB)
테스트 22 〉	통과 (0.16ms, 33.4MB)
테스트 23 〉	통과 (0.22ms, 33.5MB)
테스트 24 〉	통과 (0.17ms, 33.5MB)
 */
