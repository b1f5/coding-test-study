const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";
const keypad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ["*", 0, "#"],
];
const left = [1, 4, 7, "*"];
const middle = [2, 5, 8, 0];
const right = [3, 6, 9, "#"];
const pressedLeft = ["*"];
const pressedRight = ["#"];
//x,y 축 찾기
function findeIdx(n) {
  for (i = 0; i < keypad.length; i++) {
    if (keypad[i].includes(n)) {
      const positionY = keypad[i].indexOf(n);
      return [i, positionY];
    }
  }
}

function solution(numbers, hand) {
  var answer = "";
  numbers.forEach((number) => {
    if (left.includes(number)) {
      pressedLeft.push(number);
      return (answer += "L");
    } else if (right.includes(number)) {
      pressedRight.push(number);
      return (answer += "R");
    } else {
      whichHandToPress(hand, number);
    }
  });
  function whichHandToPress(hand, number) {
    const leftHandNumber = pressedLeft[pressedLeft.length - 1];
    const rightHandNumber = pressedRight[pressedRight.length - 1];
    const numberPositionIdx = findeIdx(number);
    const leftPositionIdx = findeIdx(leftHandNumber);
    const rightPositionIdx = findeIdx(rightHandNumber);
    const [leftX, leftY] = [
      Math.abs(leftPositionIdx[0] - numberPositionIdx[0]),
      Math.abs(leftPositionIdx[1] - numberPositionIdx[1]),
    ];
    const [rightX, rightY] = [
      Math.abs(rightPositionIdx[0] - numberPositionIdx[0]),
      Math.abs(rightPositionIdx[1] - numberPositionIdx[1]),
    ];
    const distanceToLeft = leftX + leftY;
    const distanceToRight = rightX + rightY;
    if (distanceToLeft < distanceToRight) {
      pressedLeft.push(number);
      answer += "L";
    } else if (distanceToLeft > distanceToRight) {
      pressedRight.push(number);
      answer += "R";
    } else {
      if (hand === "left") {
        pressedLeft.push(number);
        answer += "L";
      } else {
        pressedRight.push(number);
        answer += "R";
      }
    }
  }
  return answer;
}
