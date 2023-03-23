/**
 * 시계방향으로 행렬을 돌려서 돌린 행렬을 반환하는 함수
 *
 * @param {number[][]} matrix 행렬
 * @param {number} x1 시작 행
 * @param {number} y1 시작 열
 * @param {number} x2 끝 행
 * @param {number} y2 끝 열
 * @returns {number[][]} 회전한 행렬
 */
function rotate(matrix, x1, y1, x2, y2) {
  let copyedMatrix = matrix.map((row) => [...row]);
  let [row1, col1, row2, col2] = [x1 - 1, y1 - 1, x2 - 1, y2 - 1];
  // 값의 중복을 피하기 위해서 우상단의 값을 미리 저장해놓음
  let temp = copyedMatrix[row1][col2];

  // 오른쪽으로 밀기(사각형의 윗변)
  for (let col = col2; col > col1; col -= 1) {
    copyedMatrix[row1][col] = copyedMatrix[row1][col - 1];
  }
  // 위로 밀기(사각형의 왼쪽변)
  for (let row = row1; row < row2; row += 1) {
    copyedMatrix[row][col1] = copyedMatrix[row + 1][col1];
  }
  // 왼쪽으로 밀기(사각형의 아랫변)
  for (let col = col1; col < col2; col += 1) {
    copyedMatrix[row2][col] = copyedMatrix[row2][col + 1];
  }
  // 아래로 밀기(사각형의 오른쪽변)
  for (let row = row2; row > row1; row -= 1) {
    copyedMatrix[row][col2] = copyedMatrix[row - 1][col2];
  }

  copyedMatrix[row1 + 1][col2] = temp;

  return copyedMatrix;
}

/**
 * 회전한 값들중에 최솟값을 찾아 반환하는 함수
 *
 * @param {number[][]} matrix 행렬
 * @param {number} x1 시작 행
 * @param {number} y1 시작 열
 * @param {number} x2 끝 행
 * @param {number} y2 끝 열
 * @returns {number} 최솟값
 */
function getMin(matrix, x1, y1, x2, y2) {
  let min = Infinity;
  let [row1, col1, row2, col2] = [x1 - 1, y1 - 1, x2 - 1, y2 - 1];

  // 사각형의 윗변
  for (let col = col2; col > col1; col -= 1) {
    min = Math.min(min, matrix[row1][col]);
  }
  // 사각형의 왼쪽변
  for (let row = row1; row < row2; row += 1) {
    min = Math.min(min, matrix[row][col1]);
  }
  // 사각형의 아랫쪽변
  for (let col = col1; col < col2; col += 1) {
    min = Math.min(min, matrix[row2][col]);
  }
  // 사각형의 오른쪽변
  for (let row = row2; row > row1; row -= 1) {
    min = Math.min(min, matrix[row][col2]);
  }

  return min;
}

function solution(rows, columns, queries) {
  let result = [];
  let matrix = Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, col) => row * columns + col + 1)
  );

  let [x1, y1, x2, y2] = [0, 0, 0, 0];
  let min = 0;
  queries.forEach((query) => {
    [x1, y1, x2, y2] = query;
    matrix = rotate(matrix, x1, y1, x2, y2);
    min = getMin(matrix, x1, y1, x2, y2);
    result.push(min);
  });

  return result;
}
