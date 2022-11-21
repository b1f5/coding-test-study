function solution(ingredient) {
  var answer = 0;
  let arrToStr = ingredient.join("");
  // search MDN
  // 정규표현식과 주어진 스트링간에 첫번째로 매치되는 것의 인덱스를 반환한다. 찾지 못하면 -1 를 반환한다.
  while (arrToStr.search("1231") !== -1) {
    // replace MDN
    // pattern이 문자열 인 경우, 첫 번째 문자열만 치환이 되며 원래 문자열은 변경되지 않습니다.
    arrToStr = arrToStr.replace("1231", "");
    answer++;
  }
  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0

/**
 * 테스트 1 〉	통과 (0.04ms, 33.4MB)
 * 테스트 2 〉	통과 (0.04ms, 33MB)
 * 테스트 3 〉	통과 (4205.96ms, 68MB)
 * 테스트 4 〉	실패 (시간 초과)
 * 테스트 5 〉	실패 (시간 초과)
 * 테스트 6 〉	통과 (9808.65ms, 64.7MB)
 * 테스트 7 〉	실패 (시간 초과)
 * 테스트 8 〉	실패 (시간 초과)
 * 테스트 9 〉	통과 (5823.85ms, 69.6MB)
 * 테스트 10 〉	통과 (4.01ms, 34.6MB)
 * 테스트 11 〉	통과 (2989.30ms, 68.9MB)
 * 테스트 12 〉	실패 (시간 초과)
 * 테스트 13 〉	통과 (0.04ms, 33.3MB)
 * 테스트 14 〉	통과 (0.04ms, 33.5MB)
 * 테스트 15 〉	통과 (0.04ms, 33.4MB)
 * 테스트 16 〉	통과 (0.04ms, 33.5MB)
 * 테스트 17 〉	통과 (0.04ms, 33.5MB)
 * 테스트 18 〉	통과 (0.04ms, 33.4MB)
 */
