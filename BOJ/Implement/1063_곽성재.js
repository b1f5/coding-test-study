const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [king, stone, n] = input[0].split(" ");
const moves = input.splice(1, n);

const board = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
};

const board2 = {
  1: "A",
  2: "B",
  3: "C",
  4: "D",
  5: "E",
  6: "F",
  7: "G",
  8: "H",
};

king = king.split("").map((el, i) => {
  return i === 0 ? board[el] : Number(el);
});
stone = stone.split("").map((el, i) => {
  return i === 0 ? board[el] : Number(el);
});

// console.log(king, stone);

// arr[y][x] => y:alphabet x:nums
// 시계로 돌렸으니까 방향들이 뒤틀린다
const dirs = {
  // [y, x]
  R: [1, 0],
  L: [-1, 0],
  B: [0, -1],
  T: [0, 1],
  RT: [1, 1],
  LT: [-1, 1],
  RB: [1, -1],
  LB: [-1, -1],
};

const validate = (y, x) => {
  if (x < 1 || y < 1 || x > 8 || y > 8) return false;
  return true;
};

const moving = (coord, dir) => {
  const [dy, dx] = dirs[dir];
  return [coord[0] + dy, coord[1] + dx];
};

for (const m of moves) {
  let nextKing = moving(king, m);
  let nextStone = moving(stone, m);
  if (nextKing.join("") === stone.join("")) {
    if (validate(...nextKing) && validate(...nextStone)) {
      king = nextKing;
      stone = nextStone;
    }
  } else {
    if (validate(...nextKing)) {
      king = nextKing;
    }
  }
}

console.log(
  king
    .map((el, i) => {
      return i === 0 ? board2[el] : el;
    })
    .join("") +
    "\n" +
    stone
      .map((el, i) => {
        return i === 0 ? board2[el] : el;
      })
      .join("")
);
