const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [temp, ...coins] = input;

let [n, target] = temp.split(" ");

let answer = 0;

for (let i = coins.length - 1; i > -1; i--) {
  const coin = coins[i];
  answer += Math.floor(target / coin);
  target %= coin;
}

console.log(answer);
