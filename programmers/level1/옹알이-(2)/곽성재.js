function solution(babbling) {
  const POSSIBLES = ["aya", "ye", "woo", "ma"];
  const IMPOSSIBLES = POSSIBLES.map((el) => el + el);

  const convert = babbling.map((babbling) => {
    for (const impossible of IMPOSSIBLES) {
      if (babbling.includes(impossible)) {
        return 0;
      }
    }
    for (const possible of POSSIBLES) {
      babbling = babbling.replaceAll(possible, " ");
    }
    if (babbling.trim().length === 0) return 1;
    return 0;
  });
  return convert.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2

/**
테스트 1 〉	통과 (0.11ms, 33.4MB)
테스트 2 〉	통과 (0.22ms, 33.5MB)
테스트 3 〉	통과 (0.22ms, 33.6MB)
테스트 4 〉	통과 (0.11ms, 33.5MB)
테스트 5 〉	통과 (0.11ms, 33.5MB)
테스트 6 〉	통과 (0.11ms, 33.5MB)
테스트 7 〉	통과 (0.12ms, 33.4MB)
테스트 8 〉	통과 (0.10ms, 33.5MB)
테스트 9 〉	통과 (0.24ms, 33.4MB)
테스트 10 〉	통과 (0.25ms, 33.4MB)
테스트 11 〉	통과 (0.24ms, 33.5MB)
테스트 12 〉	통과 (0.29ms, 33.4MB)
테스트 13 〉	통과 (0.39ms, 33.5MB)
테스트 14 〉	통과 (0.35ms, 33.5MB)
테스트 15 〉	통과 (0.26ms, 33.6MB)
테스트 16 〉	통과 (0.37ms, 33.6MB)
테스트 17 〉	통과 (0.33ms, 33.5MB)
테스트 18 〉	통과 (0.24ms, 33.4MB)
테스트 19 〉	통과 (0.27ms, 33.5MB)
테스트 20 〉	통과 (0.30ms, 33.5MB)
 */
