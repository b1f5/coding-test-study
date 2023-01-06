// const s = "[](){}";
const s = "}]()[{";
const bracket = {
  "(": ")",
  "{": "}",
  "[": "]",
};
const leftBracket = Object.keys(bracket);
const rightBracket = Object.values(bracket);
function solution(s) {
  var answer = 0;
  for (let i = 0; i < s.length; i++) {
    let splitedS = s.split("");
    slicedS = splitedS.splice(0, i);
    splitedS = splitedS.concat(slicedS);
    validateBracket(splitedS) === false ? answer : (answer += 1);
  }
  return answer;
}
function validateBracket(arrayBracket) {
  if (countBracket(arrayBracket) === false) {
    return false;
  } else if (orderBracket(arrayBracket) === false) {
    return false;
  } else {
    for (let i = 0; i < arrayBracket.length; i++) {
      const element = arrayBracket[i];
      if (element === "") {
        continue;
      } else if (bracket[element] === undefined) {
        return false;
      } else {
        return true;
      }
    }
  }
}
let answer = validateBracket(["(", "[", "{", ")", "}", "]"]);
//갯수로만 알려주는 validation
function countBracket(arrayBracket) {
  let leftCount = 0;
  let rightCount = 0;

  arrayBracket.forEach((element) => {
    if (leftBracket.includes(element)) {
      leftCount += 1;
    }
    if (rightBracket.includes(element)) {
      rightCount += 1;
    }
  });
  if (leftCount === rightCount) {
    return true;
  } else {
    return false;
  }
}
//순서가 옳은지 알려주는 validation
function orderBracket(arrayBracket) {
  let temp = [];
  for (let i = 0; i < arrayBracket.length; i++) {
    let element = arrayBracket[i];
    if (leftBracket.includes(element)) {
      temp.push(element);
    } else {
      let lastElement = temp.pop();
      if (element !== bracket[lastElement]) {
        return false;
      }
    }
  }
  return true;
}
console.log(solution(s));
