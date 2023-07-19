const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1)
  .map((v) => v.split(" ").map(Number));

// 직전 회의가 끝나야 다음 회의가 시작할 수 있으므로
// 종료시간이 빠른 순으로 오름차순 정렬
const meetingTimes = input.sort((a, b) => {
  const [aStart, aEnd] = a;
  const [bStart, bEnd] = b;

  // 종료시간이 같다면 시작하자마자 종료하는 회의를 먼저 시작하지 않도록
  // 시작시간이 이른 회의가 먼저 오도록 정렬
  // ex) [0, 1], [2, 2], [1, 2]일 때, [0, 1] 이후 [2, 2]가 오면 [1, 2]가 스킵됨 => 총 2개 가능
  // [0, 1], [1, 2], [2, 2]이면 [0, 1], [1, 2], [2, 2] => 총 3개 가능
  if (aEnd === bEnd) return aStart - bStart;
  else return aEnd - bEnd;
});

let answer = 0;
let prevEndTime = 0;

// 정렬된 전체회의를 순회
meetingTimes.forEach((meetingTime) => {
  const [start, end] = meetingTime;

  // 이번 회의의 시작시간이 직전 회의의 종료시간 이상이라면
  if (start >= prevEndTime) {
    answer += 1;
    prevEndTime = end;
  }
});

console.log(answer);
