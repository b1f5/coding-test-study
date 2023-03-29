let fs = require('fs');
let input = fs.readFileSync("예제.txt").toString().trim().split('\n');
///dev/stdin
input = Number(input)

function solution() {
  const ableSequence = [1, 2, 3, 5];
  let ableSequenceCount = 0;

  if (input <= 4) {
    ableSequenceCount = ableSequence[input - 1];
  } else {
    for(let i = 4; i < input; i++){
        ableSequence.push((ableSequence[i - 1] + ableSequence[i - 2]) % 15746);
      }
      ableSequenceCount = ableSequence.pop();
    }
    return ableSequenceCount
}

console.log(solution());
