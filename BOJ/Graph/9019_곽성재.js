const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const cases = input.slice(1).map((str) => str.split(" ").map(Number));
const commands = [];

const BFS = (start, target) => {
  // 0000 ~ 9999
  const visited = Array(10000).fill(false);
  visited[start] = true;
  // [현재숫자, 이제껏 누른 커맨드]
  const queue = [[start, ""]];

  while (queue.length) {
    const [curNum, comms] = queue.shift();

    if (curNum === target) return comms; // BFS함수 종료

    const D = (curNum * 2) % 10000;
    if (!visited[D]) {
      // 길이만 제일 짧게 만들기만하면 커맨드는 상관없으니까 그냥 방문처리
      visited[D] = true;
      queue.push([D, comms + "D"]);
    }

    const S = curNum === 0 ? 9999 : curNum - 1;
    if (!visited[S]) {
      visited[S] = true;
      queue.push([S, comms + "S"]);
    }

    // 1234 1000으로나눈 234(나머지) 1(몫) => 2341
    const L = (curNum % 1000) * 10 + Math.floor(curNum / 1000);
    if (!visited[L]) {
      visited[L] = true;
      queue.push([L, comms + "L"]);
    }

    // 1234 => 4123
    const R = (curNum % 10) * 1000 + Math.floor(curNum / 10);
    if (!visited[R]) {
      visited[R] = true;
      queue.push([R, comms + "R"]);
    }
  }
};

cases.forEach(([start, target]) => {
  const command = BFS(start, target);
  commands.push(command);
});

console.log(commands.join("\n"));
