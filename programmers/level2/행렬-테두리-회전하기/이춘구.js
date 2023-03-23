// @ts-check
/**
 * @param {number} rows
 * @param {number} columns
 * @param {number[][]} queries
 * @returns
 */
function solution(rows, columns, queries) {
  const answer = [];
  const queriesLength = queries.length;

  // 행렬 만들기
  const matrix = makeMatrix(rows, columns);

  queries.forEach((query, index) => {
    // 회전시켜야할 숫자들의 좌표 구하기
    const coords = findCoords(query);

    // 좌표에 해당하는 숫자들 구하기
    const numbers = [];
    coords.forEach((coord) => {
      const [x, y] = coord;
      numbers.push(matrix[x][y]);
    });

    // 숫자들 중 제일 작은 수 구하기
    answer.push(Math.min(...numbers));

    // 회전시키기
    const rotatedNumbers = [numbers.pop(), ...numbers];

    // 마지막 회전이 아니라면 회전시킨 값 행렬에 넣기
    if (index !== queriesLength) {
      coords.forEach((coord, i) => {
        const [r, c] = coord;
        matrix[r][c] = rotatedNumbers[i];
      });
    }
  });

  return answer;
}

/**
 * 행렬 만들고 숫자 채우기
 * @param {number} rows
 * @param {number} columns
 * @returns {number[][]}
 */
function makeMatrix(rows, columns) {
  const matrix = [];
  let number = 1;

  for (let r = 0; r < rows; r += 1) {
    const row = [];
    for (let c = 0; c < columns; c += 1) {
      row.push(number);
      number += 1;
    }
    matrix.push(row);
  }

  return matrix;
}

/**
 * 회전 시켜야할 값들의 좌표 찾기
 * @param {number[]} query
 * @returns {number[][]}
 */
function findCoords(query) {
  const [r1, c1, r2, c2] = query.map((v) => v - 1);
  const width = c2 - c1;
  const height = r2 - r1;
  let r = r1;
  let c = c1;
  const coords = [[r, c]];

  for (let i = 0; i < width; i += 1) {
    c += 1;
    coords.push([r, c]);
  }
  for (let i = 0; i < height; i += 1) {
    r += 1;
    coords.push([r, c]);
  }
  for (let i = 0; i < width; i += 1) {
    c -= 1;
    coords.push([r, c]);
  }
  for (let i = 0; i < height - 1; i += 1) {
    r -= 1;
    coords.push([r, c]);
  }

  return coords;
}
