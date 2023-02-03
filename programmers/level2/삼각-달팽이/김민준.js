function solution(n) {
  let matrix = Array.from({ length: n }, () => new Array(n).fill(0));

  let currentNumber = 1;
  let [row, col] = [-1, 0];
  for (let i = 0; i < n; i += 1) {
    for (let j = i; j < n; j += 1) {
      if (i % 3 === 0) row += 1;
      if (i % 3 === 1) col += 1;
      if (i % 3 === 2) {
        row -= 1;
        col -= 1;
      }

      matrix[row][col] = currentNumber;
      currentNumber += 1;
    }
  }

  return matrix.flat().filter((el) => el !== 0);
}

const n = 4;
const result = solution(n);
console.log(result);
