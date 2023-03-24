const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(1);

solution(input);

function solution(input) {
  // input [ '1 0', '5', '4 2', '1 2 3 4', '6 0', '1 1 9 1 1 1' ]
  for (let i = 0; i < input.length; i += 1) {
    if ((i + 1) % 2 === 0) continue;

    let answer = 1;
    let [_, targetIndex] = input[i].split(" ").map(Number);
    let originOrder = input[i + 1].split(" ").map(Number);

    // 우선순위에 따른 출력순서로 정렬
    let printOrder = [...originOrder].sort((a, b) => b - a);

    while (true) {
      if (originOrder.length === 0) break;

      // 최우선순위가 맨 앞에 있다면
      if (originOrder[0] === printOrder[0]) {
        // 출력
        originOrder = originOrder.slice(1);
        printOrder = printOrder.slice(1);
        // 최우선순위가 목표문서였다면 콘솔에 찍고 종료
        if (targetIndex === 0) {
          console.log(answer);
          break;
        }
        answer += 1;
      } else {
        // 현재 맨 앞의 문서를 맨 뒤로 보냄
        originOrder = [...originOrder.slice(1), originOrder[0]];
      }

      // 목표 문서의 인덱스를 하나 앞으로 당기고 맨 앞이었다면 맨 뒤로 보냄
      targetIndex =
        targetIndex === 0 ? originOrder.length - 1 : targetIndex - 1;
    }
  }
}
