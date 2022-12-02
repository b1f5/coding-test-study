/**
 * 문자열을 받아서 알파벳으로만 이루어진 문자열인지 확인하는 함수
 * @param {string} str
 * @returns {boolean} 알파벳으로만 이루어졌다면 true, 그 외 false
 */
function isAlphabet(str) {
  const REGEX = /^[a-z|A-Z]+$/;

  return REGEX.test(str);
}

/**
 * 문자열을 받아서 두 글자씩 잘라서 반환하는 함수
 * @param {string} str
 * @returns {string[]} 두 글자씩 자른 문자열을 담은 array
 */
function getTwoLettersList(str) {
  let twoLettersList = [];

  for (let i = 0; i < str.length - 1; i += 1) {
    const WORD = str.slice(i, i + 2);

    if (isAlphabet(WORD) === false) continue;
    twoLettersList.push(WORD);
  }

  return twoLettersList;
}

/**
 * 문자열 각각 두 글자씩 자른 배열 두개를 받아서 교집합의 개수를 구하는 함수
 * @param {Set} TWO_LETTERS_SET
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {number} 교집합의 개수
 */
function getIntersection(TWO_LETTERS_SET, arr1, arr2) {
  let intersection = 0;

  TWO_LETTERS_SET.forEach((str) => {
    let countArr1Has = arr1.filter((el) => el === str).length;
    let countArr2Has = arr2.filter((el) => el === str).length;

    intersection += Math.min(countArr1Has, countArr2Has);
  });

  return intersection;
}

/**
 * 문자열 각각 두 글자씩 자른 배열 두개를 받아서 합집합의 개수를 구하는 함수
 * @param {Set} TWO_LETTERS_SET
 * @param {string[]} arr1
 * @param {string[]} arr2
 * @returns {number} 합집합의 개수
 */
function getUnion(TWO_LETTERS_SET, arr1, arr2) {
  let union = 0;

  TWO_LETTERS_SET.forEach((str) => {
    let countArr1Has = arr1.filter((el) => el === str).length;
    let countArr2Has = arr2.filter((el) => el === str).length;

    union += Math.max(countArr1Has, countArr2Has);
  });

  return union;
}

function solution(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  const SEPERATED_STR1 = getTwoLettersList(str1);
  const SEPERATED_STR2 = getTwoLettersList(str2);

  const TWO_LETTERS_SET = new Set([...SEPERATED_STR1, ...SEPERATED_STR2]);

  let intersection = getIntersection(
    TWO_LETTERS_SET,
    SEPERATED_STR1,
    SEPERATED_STR2
  );
  let union = getUnion(TWO_LETTERS_SET, SEPERATED_STR1, SEPERATED_STR2);

  const BIAS = 65536;
  let answer = union === 0 ? BIAS : Math.floor((intersection / union) * BIAS);

  return answer;
}
