/**
 *
 * @param {number} n
 * @returns
 */
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    const arr = Array(i).fill(0);
    answer.push(arr);
  }
  // [
  //   [ 0 ],
  //   [ 0, 0 ],
  //   [ 0, 0, 0 ],
  //   [ 0, 0, 0, 0 ],
  //   [ 0, 0, 0, 0, 0 ]
  // ]

  let x = 0;
  let y = 0;
  let cnt = n;
  const DIR = ["down", "right", "up"];
  let loop = 0;
  let curVal = 1;
  while (cnt > 0) {
    for (let j = 0; j < cnt; j++) {
      // j : n n-1 n-2 ... 1
      answer[x][y] = curVal;
      // 마지막 단계에서 방향을 꺾어주기
      if (j === cnt - 1) loop++;

      // 다음 좌표로 이동시키기
      switch (DIR[loop % 3]) {
        case "down":
          x++;
          break;
        case "up":
          x--;
          y--;
          break;
        case "right":
          y++;
          break;
      }
      curVal++;
    }
    cnt--;
  }
  return answer.flat();
}

solution(5);

// [
//   [ 1 ],
//   [ 2, 12 ],
//   [ 3, 13, 11 ],
//   [ 4, 14, 15, 10 ],
//   [ 5, 6, 7, 8, 9 ]
// ]
