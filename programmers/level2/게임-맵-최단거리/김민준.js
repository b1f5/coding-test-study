function solution(maps) {
  let answer = 0;
  const MAPS_ROW = maps.length - 1;
  const MAPS_COL = maps[0].length - 1;
  const DISTANCE = Array.from({ length: MAPS_ROW }, () =>
    new Array(MAPS_COL).fill(Infinity)
  );

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

      if(row === MAPS_ROW && col === MAPS_COL) return distance;

      for(const [DIR_ROW, DIR_COL] of Object.values(DIR)) {
        const [NEXT_ROW, NEXT_COL] = [row + DIR_ROW, col + DIR_COL];

        if(isValid(NEXT_ROW, NEXT_COL) === false) continue;

        maps[NEXT_ROW][NEXT_COL] = 0;

        queue.push([NEXT_ROW, NEXT_COL, distance + 1]);
      }
    }

    return -1;
  }

  return BFS();
}
