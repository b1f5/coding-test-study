// @ts-check
/**
 * @param {string} word 단어 하나
 * @returns {number} 단어가 사전에서 몇 번째 단어인지
 */
function solution(word) {
  // 사전의 알파벳과 그 길이를 구한다.
  const DICT = ["A", "E", "I", "O", "U"];
  const LENGTH = DICT.length;

  // 단어를 알파벳으로 쪼개고 그 길이를 구한다.
  const letters = word.split("");
  const length = letters.length;

  let answer = 0;

  // 알파벳들을 순회하며 해당 알파벳이 현재 위치에서 갖는 값을 구해서 더한다.
  for (let i = 0; i < length; i += 1) {
    const alphabet = letters[i];
    // 사전에서 해당 알파벳의 서수
    const order = DICT.indexOf(alphabet) + 1;
    // 단어가 IAAAA일 때, 첫번째에 위치한 알파벳 I의 값은
    // 3 + 5^1 * 2 + 5^2 * 2 + 5^3 * 2 + 5^4 * 2 이고, 정리하면
    // 3 + 2 * (5^1 + 5^2 + 5^3 + 5^4) 이다. 즉,
    // 사전에서의 I의 서수 order = 3,
    // 사전의 길이 LENGTH = 5,
    // 단어를 역순으로 정렬했을 때 해당 알파벳의 index = LENGTH - 1 - i 일 때,
    // order + (order - 1) * (첫째항과 공비가 LENGTH인 등비수열에서 index번째 항까지의 합) 이다.

    // 등비수열의 합
    const geometricSequenceSum =
      (LENGTH * (Math.pow(LENGTH, LENGTH - 1 - i) - 1)) / (LENGTH - 1);

    answer += order + (order - 1) * geometricSequenceSum;
  }

  return answer;
}
