const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
// const filePath = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let [N, ...coords] = input;
coords = coords.map((el) => el.split(" ").map(Number));
//좌표를 x좌표가 증가하는 순으로, x좌표가 같으면 y좌표가 증가하는 순서로 정렬한 다음 출력하는 프로그램을 작성하시오.
// [[1, 2], [], []];
coords.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

// || 첫번째 트루시값을 의미하니까

let answer = "";
coords.forEach((v) => (answer += v.join(" ") + "\n"));
console.log(answer);
