// @ts-check
/**
 * @param {string} str1 문자열
 * @param {string} str2 문자열
 * @returns {number} 자카드 유사도
 */
function solution(str1, str2) {
  // 자카드 유사도를 1로 할당한다.
  let jaccardSimilarity = 1;
  // 자카드 유사도의 보정값을 할당한다.
  const CALLIBRATION_VALUE = 65536;

  // 문자열을 두 글자씩 자른 집합을 만든다.
  const twoLetters1 = cutByTwoLetters(str1.toLowerCase());
  const twoLetters2 = cutByTwoLetters(str2.toLowerCase());

  // 두 집합이 모두 공집합인지 판별한다.
  const areEmptySet = twoLetters1.length === 0 && twoLetters2.length === 0;

  // 모두 공집합이 아니라면
  if (areEmptySet === false) {
    // 교집합과 합집합 각각의 길이를 구한다.
    const intersectionLength = getIntersectionLength(twoLetters1, twoLetters2);
    const unionLength =
      twoLetters1.length + twoLetters2.length - intersectionLength;

    // 자카드 유사도를 구해서 할당한다.
    jaccardSimilarity = intersectionLength / unionLength;
  }

  // 자카드 유사도를 보정한다.
  const answer = Math.floor(jaccardSimilarity * CALLIBRATION_VALUE);

  return answer;
}

/**
 * @param {string} string 문자열
 * @returns {string[]} 두글자씩 끊은 문자열의 배열
 */
function cutByTwoLetters(string) {
  // 두글자씩 자른 문자열을 넣을 배열을 만들어 놓는다.
  const twoLetters = [];
  const length = string.length - 1;

  for (let i = 0; i < length; i += 1) {
    // 현재 인덱스의 문자열이 알파벳이 아니라면 다음 인덱스로 넘어간다.
    const currentLetter = string[i];
    if (isAlphabet(currentLetter) === false) continue;

    // 현재 인덱스의 다음 문자열이 알파벳이 아니라면 다다음 인덱스로 넘어간다.
    const nextLetter = string[i + 1];
    if (isAlphabet(nextLetter) === false) {
      i += 1;
      continue;
    }

    // 둘 다 알파벳이라면 두 문자열을 합쳐서 배열에 추가한다.
    twoLetters.push(currentLetter + nextLetter);
  }

  return twoLetters;
}

/**
 * @param {string} letter 문자
 * @returns {boolean} 알파벳 여부
 */
function isAlphabet(letter) {
  const alphabetRegExp = /[a-z]/;

  return alphabetRegExp.test(letter);
}

/**
 * @param {string[]} A 집합A
 * @param {string[]} B 집합B
 * @returns {number} 교집합
 */
function getIntersectionLength(A, B) {
  // 교집합의 길이를 0으로 초기화한다.
  let intersectionLength = 0;
  // 두 집합을 길이의 오름차순으로 정렬해서 짧은 쪽을 smallerSet으로 한다.
  const [smallerSet, biggerSet] = [[...A], [...B]].sort(
    (a, b) => a.length - b.length
  );
  const smallerSetLength = smallerSet.length;

  // 작은 집합들의 요소를 순회하면서
  for (let i = 0; i < smallerSetLength; i += 1) {
    // 큰 집합에 해당 요소가 있는지 찾고,
    const matchIndex = biggerSet.findIndex((el) => el === smallerSet[i]);
    // 있으면 교집합의 길이를 1 증가시킨 뒤, 일치한 큰 집합의 요소는 빈문자열 처리한다.
    if (matchIndex !== -1) {
      intersectionLength += 1;
      biggerSet[matchIndex] = "";
    }
  }

  return intersectionLength;
}
