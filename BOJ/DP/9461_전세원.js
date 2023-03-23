let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().trim().split('\n').map(el => Number(el));
///dev/stdin
const answerIndex = input.slice(1).map((el) => Number(el));
const basicArray = [1, 1, 1, 2, 2]
function solution () {
  const answer = [];
  const answerArray = [];
  const until = Math.max(...answerIndex);
  console.log(until)

  if(until < 6){
    answerIndex.forEach((index) => {
      answer.push(basicArray[index - 1]);
    })
    return answer.join("\n")
  } else {
      answerArray.push(...basicArray);
      let i = 0;
      for(let j = 4; j < until; j++){
        answerArray.push((answerArray[j] + answerArray[i]))
        i++;
      }
      answerIndex.forEach((index) => {
        answer.push(answerArray[index - 1])
      })
      console.log(answerArray);
      return answer.join("\n");
  }
}


console.log(solution());
