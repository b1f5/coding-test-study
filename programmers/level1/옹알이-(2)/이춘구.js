// @ts-check
/**
 * @param {string[]} babblings 문자열 배열
 * @returns 발음할 수 있는 단어의 개수
 */
function solution(babblings) {
  // 발음 가능성을 검사해서 발음 가능한 단어들만 거른다.
  const pronounceables = babblings.filter((babbling) =>
    checkPronounceablity(babbling)
  );

  // 발음 가능한 단어들의 개수를 센다.
  const count = pronounceables.length;

  return count;
}

/**
 * 발음 가능성을 검사해서 결과를 반환하는 함수
 * @param {string} word 검사 단어
 * @returns {boolean} 발음 가능성
 */
function checkPronounceablity(word) {
  // 같은 발음이 연속으로 나온다면 false를 반환한다.
  const consecutivesRegExp = /(aya|ye|woo|ma)\1+/;
  const hasConsecutives = consecutivesRegExp.test(word);
  if (hasConsecutives) return false;

  // 발음 가능한 단어들을 빈문자열로 대체하고 남은 문자열이 있다면 false를 반환한다.
  const pronounceablesRegExp = /aya|ye|woo|ma/g;
  const hasNonPronounceables = !!word.replaceAll(pronounceablesRegExp, "");
  if (hasNonPronounceables) return false;

  // 그 외의 경우는 true를 반환한다.
  return true;
}
