const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1 7 19 37 61 +6 +12 +18
//2~7
//8~19

const calculateFloor = (coord) => {
  if (coord == 1) {
    console.log(1);
    return;
  }
  let floor = 1;
  const dp = [0, 1];
  while (true) {
    if (coord <= dp[floor]) break;
    floor++;
    dp[floor] = dp[floor - 1] + 6 * (floor - 1);
  }
  console.log(floor);
};

// calculateFloor(input[0]);
calculateFloor(13);
calculateFloor(58);
