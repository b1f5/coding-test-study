/**
 *
 * @param {number} rows
 * @param {number} columns
 * @param {number[][]} queries
 */
function solution(rows, columns, queries) {
  let answer = [];
  // 배열 만들기
  let arr = [];
  let num = 1;
  for (let i = 0; i < rows; i++) {
    const temp = [];
    for (let j = 0; j < columns; j++) {
      temp.push(num);
      num++;
    }
    arr.push(temp);
  }
  // ======================== 배열만들기
  // 깊?
  const copyArr = arr.map((v) => v.slice());
  // 기존배열 값들을 회전시킨걸 새로운배열에
  queries.forEach((v) => {
    const temp = [];
    const test = v.map((el) => el - 1);
    let [row, col] = [test[0], test[1]];
    let dir = "right";
    while (true) {
      let el = arr[row][col];
      temp.push(el);
      switch (dir) {
        case "right":
          col++;
          break;
        case "down":
          row++;
          break;
        case "left":
          col--;
          break;
        case "up":
          row--;
          break;
      }
      if (row === test[0] && col === test[3]) {
        dir = "down";
      } else if (row === test[2] && col === test[3]) {
        dir = "left";
      } else if (row === test[2] && col === test[1]) {
        dir = "up";
      }
      copyArr[row][col] = el;
      if (row === test[0] && col === test[1]) {
        break;
      }
    }
    answer.push(Math.min(...temp));
    arr = copyArr.map((v) => v.slice());
  });

  return answer;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);
