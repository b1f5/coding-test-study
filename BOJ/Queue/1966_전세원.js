let fs = require('fs');
let input =
fs.readFileSync("예제.txt")
.toString()
.trim()
.split('\n');
///dev/stdin

const testNumber = input[0]; // 출력해야할 답 갯수
const testCase = input.slice(1).map(el => el.trim().split(" "));
const answerArray = [];
for(let i = 0; i < testCase.length; i+=2){
  //여기서부터 주어진 문제에 대한 해답을 얻기 위한 로직
    const [currentQueueLength, targetIndex] = [...testCase[i].map(el => Number(el))]; //주어지는 큐의 길이, 목표 인덱스
    const currentQueue = testCase[i+1];
    let numberedCurrentQueue = currentQueue.map((el, i) => [i, el]); // [인덱스, 값]
    let count = 0;
    let answer;

    function verifyFirstOut(element) {
      const firstOut = Math.max(...numberedCurrentQueue.map(el => el[1]));

      if(Number(element[1]) === firstOut){
        return true;
      } else {
        return false;
      }
    }
    while(true){
      if (answer) break;
      for (let j = 0; j < numberedCurrentQueue.length; j++) {
        if (verifyFirstOut(numberedCurrentQueue[j])) {
          count++;

          if (numberedCurrentQueue[j][0] === targetIndex) {
            answer = count;
            break;
          } else {
            numberedCurrentQueue = [...numberedCurrentQueue.slice(j+1), ...numberedCurrentQueue.slice(0, j)]
            break;
          }
        }
        }
    }
    answerArray.push(answer);
}
console.log(answerArray.join("\n"));
