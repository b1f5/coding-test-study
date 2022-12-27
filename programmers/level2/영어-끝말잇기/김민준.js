function solution(n, words) {
  let answer = [];
  // 단어가 몇번씩 나왔는지 저장하는 객체
  let countWordObj = {};

  // 맨 앞의 값 1로 초기화
  countWordObj[words[0]] = 1;

  let prevWord, currentWord;
  // [번호, 차례]
  let [number, order] = [0, 0];
  for (let i = 1; i < words.length; i += 1) {
    prevWord = words[i - 1];
    currentWord = words[i];

    // 순회하면서 현재의 단어가 나온 횟수 + 1
    countWordObj[currentWord] = countWordObj[currentWord] + 1 || 1;

    // 이전의 마지막 문자와 현재의 첫번째 문자가 같지 않거나,
    // 현재 단어가 두번 이상 나온 단어일경우,
    if (
      prevWord.at(-1) !== currentWord.at(0) ||
      countWordObj[currentWord] > 1
    ) {
      number = (i % n) + 1;
      order = Math.floor(i / n) + 1;
      break;
    }
  }

  answer = [number, order];
  return answer;
}
