const [N, M] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split('\n');

const length = +N;
const arr = M.split(' ').map(Number); // [1, 5, 2, 1, 4, 3, 4, 5, 2, 1]

// 각 요소를 가운데 뒀을 때 양쪽으로 증가, 감소하는 애들 갯수 세기

function solution(n, arr) {
  let increase = Array(n).fill(1); // 왼쪽에서 시작하는 증가하는 부분 수열의 길이
  let decrease = Array(n).fill(1); // 오른쪽에서 시작하는 감소하는 부분 수열의 길이

  // increase 배열 채우기 -> [ 1, 2, 2, 1, 3, 3, 4, 5, 2, 1]
  // [1], [1, 5], [1, 2], [1], [1, 2, 4], [1, 2, 3], [1, 2, 3, 4, 5] [1, 2], [1]
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && increase[i] < increase[j] + 1) {
        increase[i] = increase[j] + 1;
      }
    }
  }

  // decrease 배열 채우기 -> [ 1, 5, 2, 1, 4, 3, 3, 3, 2, 1]
  //  [1],  [2, 1], [5, 2, 1],  [4, 3, 2] , [3, 2, 1],  [4, 3, 2, 1], [1], [2, 1], [5, 2, 1, 4, 3],  [1]
  for (let i = n - 2; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (arr[i] > arr[j] && decrease[i] < decrease[j] + 1) {
        decrease[i] = decrease[j] + 1;
      }
    }
  }

  let maxLen = 0;

  for (let i = 0; i < n; i++) {
    if (maxLen < increase[i] + decrease[i] - 1) {
      maxLen = increase[i] + decrease[i] - 1;
    }
  }

  return maxLen;
}

console.log(solution(length, arr));
