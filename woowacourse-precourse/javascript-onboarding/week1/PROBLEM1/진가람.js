/**
 * @param {number[]} pobi 포비의 페이지 목록
 * @param {number[]} crong 크롱의 페이지 목록
 * @return {number} 승부 결과
 */
function problem1(pobi, crong) {
  const result = {
    exception: -1,
    tie: 0,
    pobi: 1,
    crong: 2,
  };
  if (!(isValid(pobi) && isValid(crong))) return result.exception;

  const pobiScore = getMaxScore(pobi);
  const crongScore = getMaxScore(crong);

  if (pobiScore === crongScore) return result.tie;

  return pobiScore > crongScore ? result.pobi : result.crong;
}

console.log(problem1([101, 102], [209, 210]));

/* 
왼쪽은 홀수, 오른쪽은 짝수
왼쪽 < 오른쪽
왼쪽은 0, 오른쪽은 400이면 안된다.
배열의 요소는 반드시 이터러블해야 한다.
*/
function isValid(arr) {
  const [left, right] = arr;
  const START_PAGE = 1;
  const END_PAGE = 400;

  if (left >= right) return false;
  if (left === START_PAGE || right === END_PAGE) return false;
  if (!isOdd(left) || isOdd(right)) return false;
  if (!isIterable(left, right)) return false;

  return true;
}

function isIterable(a, b) {
  return a + 1 === b;
}

function isOdd(num) {
  return !!(num % 2);
}

/**
 * 주어진 페이지 넘버 중에서 합 혹은 곱 연산으로 얻는 가장 큰 점수 반환
 * @param {number[]} pages 왼쪽, 오른쪽 두 페이지 숫자를 가진 배열
 * @return {number} 가장 큰 점수
 */
function getMaxScore(pages) {
  const setCases = new Set();
  for (const p of pages) {
    const digits = p.toString().split('').map(Number);
    const sum = digits.reduce((a, b) => a + b, 0);
    const multiply = digits.reduce((a, b) => a * b, 1);
    setCases.add(sum);
    setCases.add(multiply);
  }
  return Math.max(...setCases);
}
