function solution(park, routes) {
  const W = park[0].length;
  const H = park.length;
  let curCoord = [];

  for (let i = 0; i < H; i++) {
    if (park[i].includes("S")) {
      curCoord.push(i, park[i].indexOf("S"));
      break;
    }
  }

  const dirs = {
    S: [1, 0],
    N: [-1, 0],
    E: [0, 1],
    W: [0, -1],
  };

  const move = (coord, route) => {
    const [dir, dist] = route.split(" ");
    const [dy, dx] = dirs[dir];

    let cnt = 1;
    while (true) {
      if (validate(coord[0] + cnt * dy, coord[1] + cnt * dx)) {
        if (cnt === Number(dist)) {
          return [coord[0] + cnt * dy, coord[1] + cnt * dx];
        }
        cnt++;
      } else {
        return [...coord];
      }
    }
  };

  const validate = (y, x) => {
    if (y < 0 || x < 0 || y >= H || x >= W || park[y][x] === "X") return false;
    else return true;
  };

  for (const m of routes) {
    const [nextY, nextX] = move(curCoord, m);
    curCoord = [nextY, nextX];
  }
  return curCoord;
}

// solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"]); // [2, 1]
// solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"]); // [0, 1]
solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"]); // [0, 0]
