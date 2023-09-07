const [N, M, rest] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
// 초기 채널 상수 선언
const INITIAL_CHANNEL = 100;
const targetChannel = Number(N);
// 고장난 버튼을 저장할 배열 선언 후 M이 0이 아니라면(고장난 버튼이 있다면) 할당
let brokenButtons = [];
if (M !== "0") brokenButtons = rest.split(" ");

// +, - 버튼만으로 목표 채널에 도달하기 위한 횟수를 답으로 초기화
const onlyUpDown = Math.abs(INITIAL_CHANNEL - targetChannel);
let answer = onlyUpDown;

// 50만 이상의 채널부터 내려와서 도달할 수 있으므로 0번 채널부터 100만 채널까지 하나씩 순회
for (let i = 0; i <= 100_0000; i += 1) {
  // 채널을 문자열로 만들어서 한 글자씩 분리한 후 고장난 버튼의 숫자를 포함하면 다음 채널로 continue
  const curr = i.toString().split("");
  if (curr.some((v) => brokenButtons.includes(v))) continue;
  else {
    // 아래 둘을 비교해서 더 적은 횟수를 현재까지의 답으로 할당
    // 1. 해당 채널에 도달하기 위해 누른 횟수 + 해당 채널에서 목표 채널에 도달하기 위해 + 또는 - 버튼을 눌러야 하는 횟수
    // 2. 현재까지의 답
    answer = Math.min(
      answer,
      Math.abs(Number(i) - targetChannel) + Number(curr.length)
    );
  }
}

console.log(answer);
