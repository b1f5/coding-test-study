/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const fs = require('fs');

const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [lengthInfo, ...mapInfo] = input;
const [n, m] = lengthInfo.split(' ').map((el) => Number(el));
const map = mapInfo.map((el) => el.split(' ').map((el) => Number(el)));

function solution(n, m, map) {
  let result = 0;

  const visited = new Array(n).fill().map((_) => new Array(m).fill(false));

  const search = (i, j, sum, leftCount) => {
    if (!leftCount) {
      return sum;
    }

    if (visited[i][j]) return 0;
    visited[i][j] = true;

    leftCount -= 1;
    sum += map[i][j];

    let searchResult = 0;

    if (i + 1 < n) {
      searchResult = Math.max(searchResult, search(i + 1, j, sum, leftCount));
    }

    if (j + 1 < m) {
      searchResult = Math.max(searchResult, search(i, j + 1, sum, leftCount));
    }

    if (i - 1 >= 0) {
      searchResult = Math.max(searchResult, search(i - 1, j, sum, leftCount));
    }

    if (j - 1 >= 0) {
      searchResult = Math.max(searchResult, search(i, j - 1, sum, leftCount));
    }

    if (leftCount === 3) {
      if (i + 1 < n && j + 1 < m && i - 1 >= 0) {
        searchResult = Math.max(
          searchResult,
          sum + map[i + 1][j] + map[i][j + 1] + map[i - 1][j],
        );
      }

      if (i + 1 < n && j + 1 < m && j - 1 >= 0) {
        searchResult = Math.max(
          searchResult,
          sum + map[i + 1][j] + map[i][j + 1] + map[i][j - 1],
        );
      }

      if (i + 1 < n && i - 1 >= 0 && j - 1 >= 0) {
        searchResult = Math.max(
          searchResult,
          sum + map[i + 1][j] + map[i - 1][j] + map[i][j - 1],
        );
      }

      if (j + 1 < m && i - 1 >= 0 && j - 1 >= 0) {
        searchResult = Math.max(
          searchResult,
          sum + map[i][j + 1] + map[i - 1][j] + map[i][j - 1],
        );
      }
    }

    visited[i][j] = false;

    return searchResult;
  };

  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < m; j += 1) {
      result = Math.max(result, search(i, j, 0, 4));
    }
  }

  console.log(result);
}

solution(n, m, map);
