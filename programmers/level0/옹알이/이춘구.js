/**
 * 옹알이 중 발음 가능한 옹알이의 개수를 반환하는 함수
 * @param {string[]} babblings 옹알이들의 배열
 * @returns {number} 발음 가능한 옹알이의 개수
 */
function solution(babblings) {
  let answer = 0;
  // 가능한 발음들의 정규표현식
  const pronounceablesRegex = /aya|ye|woo|ma/g;
  // 가능한 발음이 두 번 이상 연속되는 경우의 정규표현식
  const consecutivesRegex = /(aya){2,}|(ye){2,}|(woo){2,}|(ma){2,}/;

  // 가능한 발음이 두 번 이상 연속되는 경우들을 거른다.
  const nonConsecutives = babblings.filter(
    (babbling) => !consecutivesRegex.test(babbling)
  );
  // 가능한 발음들을 빈 문자열로 바꾼다.
  const nonPronounceables = nonConsecutives.map((nonConsecutive) =>
    nonConsecutive.replace(pronounceablesRegex, "")
  );
  // 빈 문자열의 개수를 센다.
  nonPronounceables.forEach((nonPronounceable) => {
    if (nonPronounceable === "") answer += 1;
  });

  return answer;
}

const babblings = [
  "aya",
  "ye",
  "woo",
  "ma",
  "ayaye",
  "wooma",
  "ayayewooma",
  "ayaaya",
  "yeye",
  "woowoo",
  "mama",
  "ayaayaaya",
  "yeyeye",
  "woowoowoo",
  "mamama",
  "uuu",
  "raya",
  "ayar",
  "rayar",
];
console.log(solution(babblings));
