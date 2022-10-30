/**
 * 한 페이지 숫자를 받아 각각의 자릿수를 더한 값을 return 하는 함수
 *
 * @param {number} page 페이지 숫자
 * @returns {number}
 */
function getPageEachDigitSum(page) {
  return page
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}

/**
 * 한 페이지 숫자를 받아 각각의 자릿수를 곱한 값을 return 하는 함수
 *
 * @param {number} page 페이지 숫자
 * @returns {number}
 */
function getPageEachDigitMultiply(page) {
  return page
    .toString()
    .split('')
    .map(Number)
    .reduce((acc, cur) => acc * cur);
}

/**
 * pobi와 crong의 왼쪽 오른쪽 페이지 쌍을 받아 각각의 최대 점수를 return 하는 함수
 * 
 * @param {number[]} pobi pobi의 [왼쪽, 오른쪽] 페이지
 * @param {number[]} crong crong의 [왼쪽, 오른쪽] 페이지
 * @returns {number[]} pobi와 crong의 최대 점수 return
 */
function getMaxScore(pobi, crong) {
  const [POBI_LEFT_PAGE, POBI_RIGHT_PAGE] = pobi;
  const [CRONG_LEFT_PAGE, CRONG_RIGHT_PAGE] = crong;

  const POBI_LEFT_PAGE_MAX_SCORE = Math.max(
    getPageEachDigitMultiply(POBI_LEFT_PAGE),
    getPageEachDigitSum(POBI_LEFT_PAGE)
  );
  const POBI_RIGHT_PAGE_MAX_SCORE = Math.max(
    getPageEachDigitMultiply(POBI_RIGHT_PAGE),
    getPageEachDigitSum(POBI_RIGHT_PAGE)
  );
  const CRONG_LEFT_PAGE_MAX_SCORE = Math.max(
    getPageEachDigitMultiply(CRONG_LEFT_PAGE),
    getPageEachDigitSum(CRONG_LEFT_PAGE)
  );
  const CRONG_RIGHT_PAGE_MAX_SCORE = Math.max(
    getPageEachDigitMultiply(CRONG_RIGHT_PAGE),
    getPageEachDigitSum(CRONG_RIGHT_PAGE)
  );

  const POBI_MAX_SCORE = Math.max(
    POBI_LEFT_PAGE_MAX_SCORE,
    POBI_RIGHT_PAGE_MAX_SCORE
  );
  const CRONG_MAX_SCORE = Math.max(
    CRONG_LEFT_PAGE_MAX_SCORE,
    CRONG_RIGHT_PAGE_MAX_SCORE
  );

  return [POBI_MAX_SCORE, CRONG_MAX_SCORE];
}

/**
 * 받은 페이지들이 룰에 어긋나지 않고 유효한 쌍인지 확인하는 함수
 *
 * @param {number[]} pobi pobi의 왼쪽, 오른쪽 페이지
 * @param {number[]} crong crong의 왼쪽, 오른쪽 페이지
 * @returns {boolean}
 */
function isValidPage(pobi, crong) {
  const PAGE_LIST = [...pobi, ...crong];
  // 시작 면이나 마지막 면이 나올 경우
  if (PAGE_LIST.includes(1) || PAGE_LIST.includes(400)) return false;

  // 왼쪽과 오른쪽 페이지 쌍이 옳지 않을 경우
  if (pobi[0] + 1 !== pobi[1]) return false;
  if (crong[0] + 1 !== crong[1]) return false;

  return true;
}

function solution() {
  let pobi = [97, 98];
  let crong = [197, 198];
  // let pobi = [131, 132];
  // let crong = [211, 212];
  // let pobi = [99, 102];
  // let crong = [211, 212];

  if (isValidPage(pobi, crong) === false) return -1;

  let result = 0;
  const gameResultObj = {
    POBI_WIN: 1,
    CRONG_WIN: 2,
    DRAW: 0,
  };
  const [POBI_MAX_SCORE, CRONG_MAX_SCORE] = getMaxScore(pobi, crong);

  if (POBI_MAX_SCORE > CRONG_MAX_SCORE) result = gameResultObj.POBI_WIN;
  else if (POBI_MAX_SCORE < CRONG_MAX_SCORE) result = gameResultObj.CRONG_WIN;
  else result = gameResultObj.DRAW;

  return result;
}

const RESULT = solution();
console.log(RESULT);
