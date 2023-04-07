let fs = require('fs');
let input =
fs.readFileSync("예제.txt")
.toString()
.trim()
.split('\n');
///dev/stdin

const [N, M] = input[0].split(" "); // N은 숫자 갯수 M은 정렬시킬 수 갯수
const numberArray = input.slice(1)[0].split(' ').map(el => Number(el));

function solution() {
  const sortedNumberArray = numberArray.sort((a, b) => a - b); // 1  7 8 9 -> 사전순서대로 뽑기 위해
  let finalAnswer = [];
  if(M === "1"){
    finalAnswer.push(...sortedNumberArray);
    return finalAnswer.join("\n");
  }

  const permuatationArray = getPermutation(sortedNumberArray, Number(M));
  finalAnswer = permuatationArray.map(array => array.join(" ").split(","));
  function getPermutation(array, pickCount) {
    const answer = [];
    if(pickCount === 1){
      return array.map((el) => [el]);
    }

    array.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]
      const permutations = getPermutation(rest, pickCount - 1);
      const attached = permutations.map((el) => [fixed, ...el]);
      answer.push(...attached);
    });
    return answer;
  }

  return finalAnswer.join("\n");
}


console.log(solution());
