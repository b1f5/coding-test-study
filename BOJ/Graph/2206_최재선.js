const fs = require('fs');

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [rowLen, colLen] = input.shift().split(' ').map(Number);
const map = input.map((el) => el.split(''));
const normalVisited = new Array(rowLen).fill().map((_) => new Array(colLen).fill(false));
const itemUsedVisited = new Array(rowLen).fill().map((_) => new Array(colLen).fill(false));

let result = 1;
let isExist = false;
let poses = [[0, 0, 1]];
const moves = [[0, 1], [1, 0], [0, -1], [-1, 0]];
const destI = rowLen - 1;
const destJ = colLen - 1;

while (poses.length) {
  const newPoses = [];
  let isBreak = false;

  for (const pos of poses) {
    const [i, j, isItemExist] = pos;
    if (i === destI && j === destJ) {
      console.log(result);
      isExist = true;
      isBreak = true;
      break;
    }

    const visitedMap = isItemExist ? normalVisited : itemUsedVisited;

    for (const move of moves) {
      const movedI = i + move[0];
      const movedJ = j + move[1];

      if (movedI >= 0 && movedJ >= 0 && rowLen > movedI && colLen > movedJ && !visitedMap[movedI][movedJ]) {
        if (map[movedI][movedJ] === '1') {
          if (isItemExist) {
            newPoses.push([movedI, movedJ, false]);
            itemUsedVisited[movedI][movedJ] = true;
          }
          continue;
        }

        visitedMap[movedI][movedJ] = true;
        newPoses.push([movedI, movedJ, isItemExist]);
      }
    }
  }

  if (isBreak) {
    break;
  }

  result += 1;
  poses = newPoses;
}

if (!isExist) {
  console.log(-1);
}