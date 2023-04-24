let fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "./dev/stdin" : "예제.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = input.splice(1);

const finalAnswer = [];

for (let i = 0; i < testCase.length; i += 3) {
  const directions = testCase[i].split("");
  const arrayLength = testCase[i + 1];
  const array = JSON.parse(testCase[i + 2]);

  let testAnswer;
  let isReversed = false;
  let startIndex = 0;
  let endIndex = arrayLength;

  for (const direction of directions) {
    if (direction === "R") {
      isReversed = !isReversed;
    }

    if (direction === "D") {
      if (isReversed) {
        endIndex--;
      } else {
        startIndex++;
      }
    }
  }

  if (startIndex > endIndex) {
    testAnswer = "error";
    finalAnswer.push(testAnswer);
  }

  if (!testAnswer) {
    const slicedArray = array.slice(startIndex, endIndex);

    if (isReversed) {
      testAnswer = slicedArray.reverse();
    } else {
      testAnswer = slicedArray;
    }
    finalAnswer.push(JSON.stringify(testAnswer));
  }
}

console.log(finalAnswer.join("\n"));
