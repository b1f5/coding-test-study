/**
 * 주어진 점들로 만들 수 있는 직선들의 평행 여부에 따라 1 또는 0을 반환하는 함수
 * @param {number[][]} dots 점들의 배열
 * @returns {1|0} 1 또는 0
 */
function solution(dots) {
  let answer = 0;
  // 네 개의 점을 두 개씩 이을 수 있는 조합(직선)을 전부 구한다.
  const combinations = makeCombinations(dots, 2);
  /* [
      [ [ 1, 4 ], [ 9, 2 ] ],
      [ [ 1, 4 ], [ 3, 8 ] ],
      [ [ 1, 4 ], [ 10, 4 ] ],
      [ [ 9, 2 ], [ 3, 8 ] ],
      [ [ 9, 2 ], [ 10, 4 ] ],
      [ [ 3, 8 ], [ 10, 4 ] ]
     ] */

  // 각 조합(직선)의 기울기를 구한다.
  const gradients = combinations.map((combination) =>
    calculateGradient(combination)
  );
  // [ -0.25, 2, 0, -1, 2, -0.5714285714285714 ]

  // 기울기들의 배열에서 인덱스 0과 5, 1과 4, 2와 3이 비교대상이므로 비교한다.
  // 비교하다가 같은 경우가 나오면 answer에 1을 할당해서 반환한다.
  for (let i = 0; i < gradients.length / 2; i++) {
    if (gradients[i] === gradients.at(-i - 1)) {
      answer = 1;
      return answer;
    }
  }

  return answer;
}

/**
 * 두 점을 이은 직선의 기울기를 구하는 함수
 * @param {number[][]} dots 점1, 점2가 담긴 배열
 * @returns {number} 직선의 기울기
 */
function calculateGradient(dots) {
  // 두 점의 x좌표와 y좌표를 구조분해 한다.
  const [dot1, dot2] = dots;
  const [x1, y1] = dot1;
  const [x2, y2] = dot2;

  // x값과 y값의 변화량을 구한다.
  const diffX = x2 - x1;
  const diffY = y2 - y1;

  // y값의 변화량을 x값의 변화량으로 나눠 기울기를 구한다.
  const gradient = diffY / diffX;

  return gradient;
}

/**
 * 점들을 digit개씩 이을 수 있는 조합을 구해서 반환하는 함수
 * @param {number[][]} array 점들의 배열
 * @param {number} digit 이을 점의 개수
 * @returns {number[][][]} 점들의 조합
 */
function makeCombinations(array, digit) {
  if (digit === 1) return array;

  const combinations = [];
  for (let i = 0; i <= array.length - digit; i++) {
    const fixed = array[i];
    const rest = array.slice(i + 1);
    const subCombinations = makeCombinations(rest, digit - 1);
    const attached = subCombinations.map((sub) => [fixed, sub]);
    combinations.push(...attached);
  }

  return combinations;
}

const dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [10, 4],
];
