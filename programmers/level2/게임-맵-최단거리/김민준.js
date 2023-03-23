function solution(maps) {
  const MAPS_ROW = maps.length - 1;
  const MAPS_COL = maps[0].length - 1;

  const isValid = (row, col) => {
    if(row < 0 || row > MAPS_ROW) return false;
    if(col < 0 || col > MAPS_COL) return false;

    if(maps[row][col] === 0) return false;

    return true;
  }

  const DIR = {
    UP: [-1, 0],
    DOWN: [1, 0],
    LEFT: [0, -1],
    RIGHT: [0, 1],
  };
  const BFS = () => {
    // [row, col, distance]
    let queue = [[0, 0, 1]];

    while(queue.length) {
      let [row, col, distance] = queue.shift();

      // 끝에 다다랐다면 거리 return
      if(row === MAPS_ROW && col === MAPS_COL) return distance;

      for(const [DIR_ROW, DIR_COL] of Object.values(DIR)) {
        const [NEXT_ROW, NEXT_COL] = [row + DIR_ROW, col + DIR_COL];

        if(isValid(NEXT_ROW, NEXT_COL) === false) continue;

        // 지나온 길은 0으로 바꿔줌
        maps[NEXT_ROW][NEXT_COL] = 0;

        queue.push([NEXT_ROW, NEXT_COL, distance + 1]);
      }
    }

    return -1;
  }

  return BFS();
}
